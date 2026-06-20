"use client"

import { motion } from "framer-motion"
import { MoonStar } from "lucide-react"

interface HeroSectionProps {
  hijriDate: string
  monthName: string
  monthSignificance: string
  nextEventTitle: string
  daysUntil: number
}

export function HeroSection({
  hijriDate,
  monthName,
  monthSignificance,
  nextEventTitle,
  daysUntil,
}: HeroSectionProps) {
  return (
    <section id="today" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="aurora-bg absolute inset-0" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/[0.03] blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#e8d48b]/[0.02] blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#c9a84c]/10 to-[#8a7a3a]/5 flex items-center justify-center moon-glow">
                <MoonStar className="w-10 h-10 sm:w-14 sm:h-14 text-[#c9a84c]" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c9a84c] blur-sm animate-pulse" />
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#c9a84c] font-medium mb-3 tracking-widest uppercase">
            {hijriDate}
          </p>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] mb-4 tracking-tight">
            {monthName}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            {monthSignificance}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block"
          >
            <div className="glass-gold rounded-2xl px-6 sm:px-10 py-4 sm:py-5 moon-glow">
              <p className="text-xs sm:text-sm text-[#c9a84c] tracking-widest uppercase mb-1">
                {daysUntil === 0
                  ? "Today Is"
                  : daysUntil === 1
                    ? "Tomorrow Is"
                    : `${daysUntil} Days Until`}
              </p>
              <p className="font-heading text-2xl sm:text-3xl text-gradient">
                {nextEventTitle}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-white/[0.12] flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  )
}
