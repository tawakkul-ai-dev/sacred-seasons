import type { Metadata } from "next"
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sacred-seasons.vercel.app"),
  title: "Sacred Seasons | The Islamic Year, Alive",
  description:
    "Understand where you are in the Islamic year and what matters right now. A beautifully designed almanac for the modern soul.",
  openGraph: {
    title: "Sacred Seasons | The Islamic Year, Alive",
    description:
      "Understand where you are in the Islamic year and what matters right now. A beautifully designed almanac for the modern soul.",
    url: "https://sacred-seasons.vercel.app",
    siteName: "Sacred Seasons",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Seasons | The Islamic Year, Alive",
    description:
      "Understand where you are in the Islamic year and what matters right now. A beautifully designed almanac for the modern soul.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${jetbrains.variable} dark h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
