"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles, CalendarDays, ArrowRight, Clock } from "lucide-react"
import { ResolvedIslamicEvent } from "@/types"

interface UpcomingEventsProps {
  events: ResolvedIslamicEvent[]
}

const eventColors: Record<string, { gradient: string }> = {
  ibadah: { gradient: "from-[#c9a84c]/10 to-[#8a7a3a]/5" },
  historical: { gradient: "from-[#0f1b3d]/40 to-[#0a1128]/20" },
  milestone: { gradient: "from-[#1a0f2e]/40 to-[#0a1128]/20" },
  seasonal: { gradient: "from-[#0d1f2d]/40 to-[#0a1128]/20" },
}

function formatDaysUntil(days: number): string {
  if (days === 0) return "Today"
  if (days === 1) return "Tomorrow"
  return `${days} days`
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section id="events" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c9a84c]/[0.01] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-xs text-[#c9a84c] tracking-widest uppercase font-medium">
              Coming Up
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.15]">
            Upcoming Events
          </h2>
        </motion.div>

        <div className="space-y-3">
          {events.map((event, i) => {
            const colors = eventColors[event.type] || eventColors.ibadah

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/events/${event.id}`}
                  className="group block glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${colors.gradient} shrink-0 flex flex-col items-center justify-center`}
                    >
                      <span className="font-heading text-lg sm:text-xl text-[#c9a84c]">
                        {event.day}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-heading text-lg sm:text-xl text-foreground group-hover:text-[#c9a84c] transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                            {event.subtitle}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#c9a84c] transition-colors shrink-0 mt-1" />
                      </div>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <CalendarDays className="w-3 h-3" />
                          {event.hijriDate}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-[#c9a84c]/80">
                          <Clock className="w-3 h-3" />
                          {formatDaysUntil(event.daysUntil)}
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-[#c9a84c]/60 font-medium">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
