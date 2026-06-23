"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CalendarDays, CheckCircle2, BookHeart, Star } from "lucide-react"
import { HijriMonth, IslamicEvent } from "@/types"

interface MonthDetailProps {
  month: HijriMonth
  guidance: {
    title: string
    description: string
    actions: string[]
    insight: string
  }
  events: IslamicEvent[]
  nextMonth: number | null
  prevMonth: number | null
}

export function MonthDetail({ month, guidance, events, nextMonth, prevMonth }: MonthDetailProps) {
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
          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1]">
              {month.name}
            </h1>
            {month.isSacred && (
              <span className="text-[10px] uppercase tracking-wider text-[#c9a84c] font-medium px-2.5 py-1 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5">
                Sacred Month
              </span>
            )}
          </div>

          <p className="text-xl sm:text-2xl text-[#c9a84c] font-medium mb-2">
            {month.arabicName}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
            {month.significance}
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-gold rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <BookHeart className="w-4 h-4 text-[#c9a84c]" />
                <h2 className="font-heading text-xl text-foreground">{guidance.title}</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {guidance.description}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
                <h2 className="font-heading text-xl text-foreground">Recommended Actions</h2>
              </div>
              <ul className="space-y-3">
                {guidance.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
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
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-[#c9a84c]" />
                <h2 className="font-heading text-xl text-foreground">Reflection</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {guidance.insight}
              </p>
            </div>
          </motion.section>

          {events.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <CalendarDays className="w-4 h-4 text-[#c9a84c]" />
                  <h2 className="font-heading text-xl text-foreground">Events This Month</h2>
                </div>
                <div className="space-y-2">
                  {events.map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.id}`}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors"
                    >
                      <div>
                        <p className="text-sm sm:text-base text-foreground group-hover:text-[#c9a84c] transition-colors">
                          {event.title}
                        </p>
                        <p className="text-xs text-muted-foreground">{event.subtitle}</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#c9a84c]/60 font-medium">
                        {event.type}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-between mt-12 pt-8 border-t border-white/[0.06]"
        >
          {prevMonth ? (
            <Link
              href={`/months/${prevMonth}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous month
            </Link>
          ) : (
            <div />
          )}
          {nextMonth && (
            <Link
              href={`/months/${nextMonth}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Next month
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  )
}
