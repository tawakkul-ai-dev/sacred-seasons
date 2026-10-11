import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Sacred Seasons | The Islamic Year, Alive",
    short_name: "Sacred Seasons",
    description:
      "A spiritual almanac to help you understand where you are in the Hijri year and what matters now.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050814",
    theme_color: "#050814",
    orientation: "any",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
