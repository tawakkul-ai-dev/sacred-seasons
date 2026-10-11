const CACHE_PREFIX = "sacred-seasons-"
const CACHE_VERSION = "v1"
const STATIC_CACHE = `${CACHE_PREFIX}static-${CACHE_VERSION}`
const PAGE_CACHE = `${CACHE_PREFIX}pages-${CACHE_VERSION}`
const STATIC_URLS = ["/", "/offline.html", "/icons/icon-192.png", "/icons/icon-512.png"]
const MAX_CACHED_PAGES = 30

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_URLS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key.startsWith(CACHE_PREFIX) && key !== STATIC_CACHE && key !== PAGE_CACHE)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener("fetch", (event) => {
  const request = event.request
  const url = new URL(request.url)
  if (request.method !== "GET" || url.origin !== self.location.origin) return

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request)
        if (response.ok && response.type === "basic") {
          const cache = await caches.open(PAGE_CACHE)
          await cache.put(request, response.clone())
          const keys = await cache.keys()
          await Promise.all(keys.slice(0, Math.max(0, keys.length - MAX_CACHED_PAGES)).map((key) => cache.delete(key)))
        }
        return response
      } catch {
        return (await caches.match(request)) || (await caches.match("/")) || (await caches.match("/offline.html"))
      }
    })())
    return
  }

  if (url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/icons/")) {
    event.respondWith((async () => {
      const cache = await caches.open(STATIC_CACHE)
      const cached = await cache.match(request)
      if (cached) return cached
      try {
        const response = await fetch(request)
        if (response.ok && response.type === "basic") await cache.put(request, response.clone())
        return response
      } catch {
        return Response.error()
      }
    })())
  }
})
