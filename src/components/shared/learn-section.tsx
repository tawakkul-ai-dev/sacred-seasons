"use client"

import { motion } from "framer-motion"
import { BookOpen, Moon, CalendarDays, Sparkles } from "lucide-react"

const topics = [
  {
    icon: CalendarDays,
    title: "The Hijri Calendar",
    body: "The Islamic calendar is lunar — each month begins with the sighting of the new moon. A year is roughly 354 days, so Hijri dates shift through the seasons over time. Sacred Seasons uses the Umm al-Qura calendar for accurate date conversion.",
  },
  {
    icon: Moon,
    title: "The Four Sacred Months",
    body: "Allah designated Dhul Qa'dah, Dhul Hijjah, Muharram, and Rajab as sacred (Qur'an 9:36). In these months, good deeds carry greater weight and wrongdoing is especially serious. They are seasons of heightened spiritual awareness.",
  },
  {
    icon: Sparkles,
    title: "Living by the Year",
    body: "Sacred Seasons is not a date converter — it is a companion. Each day you open it, you see where you are in the Islamic year, what the current month asks of you, and what is coming next. The goal is presence, not productivity.",
  },
  {
    icon: BookOpen,
    title: "How to Use This App",
    body: "Start with Today — your current Hijri date and the next major event. Read What Matters Now for month-specific guidance. Explore the year timeline to see the full journey. Tap any upcoming event for deeper context, history, and recommended actions.",
  },
]

export function LearnSection() {
  return (
    <section id="learn" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1b3d]/15 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-xs text-[#c9a84c] tracking-widest uppercase font-medium">
              Learn
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.15]">
            Understanding the Islamic Year
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="glass rounded-2xl p-6 sm:p-8 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <topic.icon className="w-4 h-4 text-[#c9a84c]" />
                  <h3 className="font-heading text-lg text-foreground">{topic.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {topic.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
