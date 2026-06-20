"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  CalendarDays,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Star,
  Clock,
} from "lucide-react"
import { ResolvedIslamicEvent } from "@/types"

interface EventDetailProps {
  event: ResolvedIslamicEvent
}

export function EventDetail({ event }: EventDetailProps) {
  return (
    <div className="min-h-screen">
      <div className="aurora-bg fixed inset-0" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-xs text-[#c9a84c] tracking-widest uppercase font-medium">
              {event.type === "ibadah" ? "Act of Worship" : "Historical Event"}
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1] mb-3">
            {event.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            {event.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="w-4 h-4 text-[#c9a84c]" />
              {event.hijriDate}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="w-4 h-4 text-[#c9a84c]" />
              {event.gregorianDate}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#c9a84c]">
              <Clock className="w-4 h-4" />
              {event.daysUntil === 0
                ? "Today"
                : event.daysUntil === 1
                  ? "Tomorrow"
                  : `${event.daysUntil} days away`}
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-gold rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-[#c9a84c]" />
                <h2 className="font-heading text-xl text-foreground">Significance</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {event.significance}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#c9a84c]" />
                <h2 className="font-heading text-xl text-foreground">Historical Context</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {event.historicalContext}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
                <h2 className="font-heading text-xl text-foreground">Recommended Actions</h2>
              </div>
              <ul className="space-y-3">
                {event.recommendedActions.map((action, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/50 mt-2 shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-[#c9a84c]" />
                <h2 className="font-heading text-xl text-foreground">References</h2>
              </div>
              <ul className="space-y-2">
                {event.references.map((ref, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-[#c9a84c] mt-0.5">&bull;</span>
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
