"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MoonStar } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050814] flex items-center justify-center">
      <div className="aurora-bg absolute inset-0" />
      <div className="relative z-10 max-w-md mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c9a84c]/10 to-[#8a7a3a]/5 flex items-center justify-center moon-glow">
              <MoonStar className="w-10 h-10 text-[#c9a84c]" />
            </div>
          </div>

          <h1 className="font-heading text-7xl sm:text-8xl text-foreground leading-[1.1] mb-4">
            404
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            This page does not exist in this year or the next.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c9a84c]/10 text-[#c9a84c] hover:bg-[#c9a84c]/20 transition-all duration-300 text-sm font-medium"
          >
            Return home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
