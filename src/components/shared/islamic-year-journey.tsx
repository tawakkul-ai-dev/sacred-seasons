"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { HijriMonth, YearProgress } from "@/types"

interface IslamicYearJourneyProps {
  months: HijriMonth[]
  currentMonth: number
  yearProgress: YearProgress
}

function MonthCard({ month, isCurrent }: { month: HijriMonth; isCurrent: boolean }) {
  if (isCurrent) {
    return (
      <Link href={`/months/${month.number}`} className="block">
        <div className="glass-gold rounded-xl px-4 py-3 group hover:bg-white/[0.06] transition-all duration-300">
          <p className="text-xs text-[#c9a84c] font-medium mb-0.5">We are here</p>
          <p className="font-heading text-lg sm:text-xl text-foreground group-hover:text-[#c9a84c] transition-colors">{month.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{month.arabicName}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/months/${month.number}`} className="group inline-block">
      <p className="font-heading text-base sm:text-lg text-foreground group-hover:text-[#c9a84c] transition-colors">{month.name}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{month.arabicName}</p>
    </Link>
  )
}

function MonthDetails({ month }: { month: HijriMonth }) {
  return (
    <>
      <p className="text-xs text-muted-foreground leading-relaxed">{month.significance}</p>
      {month.isSacred && (
        <span className="inline-block mt-2 text-[10px] text-[#c9a84c] tracking-wider uppercase font-medium">
          Sacred Month
        </span>
      )}
    </>
  )
}

export function IslamicYearJourney({
  months,
  currentMonth,
  yearProgress,
}: IslamicYearJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])

  return (
    <section id="calendar" ref={containerRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1b3d]/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-[#c9a84c] tracking-widest uppercase font-medium">
            The Islamic Year
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.15] mt-3">
            Your Journey Through the Year
          </h2>
          <p className="text-sm text-muted-foreground mt-4">
            Day {yearProgress.currentDay} of the year &middot;{" "}
            {yearProgress.percentageComplete}% complete
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-white/[0.06]" />

          <motion.div
            className="absolute left-[19px] sm:left-1/2 top-0 w-px bg-gradient-to-b from-[#c9a84c] to-[#c9a84c]/20"
            style={{ height: lineHeight }}
          />

          <div className="space-y-8 sm:space-y-12">
            {months.map((month, index) => {
              const isCurrent = month.number === currentMonth
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={month.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`hidden sm:block w-1/2 ${
                      isLeft ? "pr-10 text-right" : "pl-10 text-left"
                    }`}
                  >
                    <MonthCard month={month} isCurrent={isCurrent} />
                  </div>

                  <div className="relative shrink-0 flex items-center justify-center">
                    <div
                      className={`w-[39px] h-[39px] rounded-full border-2 flex items-center justify-center ${
                        isCurrent
                          ? "border-[#c9a84c] bg-[#c9a84c]/10"
                          : month.isSacred
                            ? "border-[#c9a84c]/30 bg-transparent"
                            : "border-white/[0.08] bg-transparent"
                      }`}
                    >
                      <span
                        className={`text-xs font-medium ${
                          isCurrent ? "text-[#c9a84c]" : "text-muted-foreground"
                        }`}
                      >
                        {month.number}
                      </span>
                    </div>
                  </div>

                  <div className="sm:hidden flex-1">
                    <MonthCard month={month} isCurrent={isCurrent} />
                    {isCurrent && (
                      <div className="mt-3">
                        <MonthDetails month={month} />
                      </div>
                    )}
                  </div>

                  <div
                    className={`hidden sm:block w-1/2 ${
                      isLeft ? "pl-10 text-left" : "pr-10 text-right"
                    }`}
                  >
                    <MonthDetails month={month} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
