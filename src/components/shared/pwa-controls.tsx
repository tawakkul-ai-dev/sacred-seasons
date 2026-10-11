"use client"

import { useEffect, useState } from "react"
import { Download, WifiOff, X } from "lucide-react"

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export function PwaControls() {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null)
  const [showHelp, setShowHelp] = useState(false)
  const [isOffline, setIsOffline] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIos, setIsIos] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isNativeApp, setIsNativeApp] = useState(false)

  useEffect(() => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches
      || ("standalone" in window.navigator && Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone))
    queueMicrotask(() => {
      setIsInstalled(standalone)
      setIsIos(/iphone|ipad|ipod/i.test(window.navigator.userAgent))
      setIsAndroid(/android/i.test(window.navigator.userAgent))
      setIsNativeApp(/SacredSeasonsAndroid/i.test(window.navigator.userAgent))
      setIsOffline(!navigator.onLine)
    })

    const handleBeforeInstall = (event: Event) => {
      event.preventDefault()
      setInstallPrompt(event as InstallPromptEvent)
    }
    const handleInstalled = () => {
      setIsInstalled(true)
      setInstallPrompt(null)
      setShowHelp(false)
    }
    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)

    window.addEventListener("beforeinstallprompt", handleBeforeInstall)
    window.addEventListener("appinstalled", handleInstalled)
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    if ("serviceWorker" in navigator && (window.location.protocol === "https:" || window.location.hostname === "localhost")) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // The website remains fully usable if offline support cannot be registered.
      })
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall)
      window.removeEventListener("appinstalled", handleInstalled)
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  async function install() {
    if (!installPrompt) return
    await installPrompt.prompt()
    const result = await installPrompt.userChoice
    if (result.outcome === "accepted") setIsInstalled(true)
    setInstallPrompt(null)
  }

  return (
    <>
      {isOffline && (
        <div role="status" className="fixed bottom-4 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0a1128] px-4 py-2 text-xs text-foreground shadow-xl">
          <WifiOff className="h-4 w-4 text-[#c9a84c]" />
          You’re offline. Dates and event details may be out of date.
        </div>
      )}
      {!isInstalled && !isNativeApp && (
        <div className="fixed bottom-4 right-4 z-[55]">
          {showHelp && (
            <div role="dialog" aria-label="Install Sacred Seasons" className="mb-3 w-72 rounded-2xl border border-white/10 bg-[#0a1128] p-4 text-sm text-foreground shadow-2xl">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-medium">Add Sacred Seasons</h2>
                <button onClick={() => setShowHelp(false)} aria-label="Close install help" className="rounded p-1 text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
              </div>
              {isAndroid && (
                <div className="mb-3 rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/[0.06] p-3">
                  <p className="mb-2 text-xs leading-relaxed text-muted-foreground">Prefer a direct Android download? The app connects to the live website and needs internet for pages that aren’t cached.</p>
                  <a href="https://github.com/tawakkul-ai-dev/sacred-seasons/releases/download/android-latest/sacred-seasons.apk" className="inline-flex items-center gap-2 rounded-lg bg-[#c9a84c] px-3 py-2 text-xs font-medium text-[#050814]" download>
                    <Download className="h-3.5 w-3.5" /> Download Android APK
                  </a>
                </div>
              )}
              {installPrompt ? (
                <>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">Install the app for a focused, app-like experience. Your browser will confirm before anything is added.</p>
                  <button onClick={install} className="rounded-lg bg-[#c9a84c] px-3 py-2 text-xs font-medium text-[#050814]">Install app</button>
                </>
              ) : isIos ? (
                <p className="text-xs leading-relaxed text-muted-foreground">In Safari, tap <strong className="text-foreground">Share</strong>, then choose <strong className="text-foreground">Add to Home Screen</strong>. If you don’t see that option, open this page in Safari.</p>
              ) : (
                <p className="text-xs leading-relaxed text-muted-foreground">Use your browser’s menu and choose <strong className="text-foreground">Install app</strong> or <strong className="text-foreground">Add to Home Screen</strong>, if available.</p>
              )}
            </div>
          )}
          <button onClick={() => setShowHelp((visible) => !visible)} aria-expanded={showHelp} className="ml-auto flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#0a1128]/95 px-4 py-2.5 text-xs font-medium text-[#e8d48b] shadow-lg backdrop-blur hover:bg-[#13203d]">
            <Download className="h-4 w-4" /> Add to device
          </button>
        </div>
      )}
    </>
  )
}
