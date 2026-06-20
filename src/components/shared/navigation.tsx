"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, CalendarDays, Sparkles, BookOpen, Info, Menu, X } from "lucide-react"

const links = [
  { href: "#today", label: "Today", icon: Moon },
  { href: "#calendar", label: "Calendar", icon: CalendarDays },
  { href: "#events", label: "Events", icon: Sparkles },
  { href: "#learn", label: "Learn", icon: BookOpen },
  { href: "#about", label: "About", icon: Info },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#050814]/70 backdrop-blur-xl border-b border-white/[0.06]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 text-foreground">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#8a7a3a] flex items-center justify-center">
              <Moon className="w-4 h-4 text-[#050814]" />
            </div>
            <span className="font-heading text-lg tracking-wide hidden sm:inline">
              Sacred Seasons
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] bg-[#050814]/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/[0.04]"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
