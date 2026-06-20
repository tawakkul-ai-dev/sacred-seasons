"use client"

import { motion } from "framer-motion"
import { Sparkles, CheckCircle2, BookHeart } from "lucide-react"

interface WhatMattersNowProps {
  title: string
  description: string
  actions: string[]
  insight: string
}

export function WhatMattersNow({ title, description, actions, insight }: WhatMattersNowProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c9a84c]/[0.02] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-xs text-[#c9a84c] tracking-widest uppercase font-medium">
              What Matters Right Now
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.15] mb-6">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8 h-full">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-xs text-[#c9a84c] tracking-widest uppercase font-medium">
                  Recommended Actions
                </span>
              </div>
              <ul className="space-y-3">
                {actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/50 mt-2 shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-gold rounded-2xl p-6 sm:p-8 h-full">
              <div className="flex items-center gap-2 mb-5">
                <BookHeart className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-xs text-[#c9a84c] tracking-widest uppercase font-medium">
                  Reflection
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {insight}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
