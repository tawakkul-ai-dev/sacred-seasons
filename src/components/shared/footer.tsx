import { MoonStar } from "lucide-react"

const footerLinks = [
  { href: "#today", label: "Today" },
  { href: "#calendar", label: "Calendar" },
  { href: "#events", label: "Events" },
  { href: "#learn", label: "Learn" },
  { href: "#about", label: "About" },
]

export function Footer() {
  return (
    <footer id="about" className="relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#8a7a3a] flex items-center justify-center">
              <MoonStar className="w-4 h-4 text-[#050814]" />
            </div>
            <div>
              <p className="font-heading text-base text-foreground tracking-wide">
                Sacred Seasons
              </p>
              <p className="text-[11px] text-muted-foreground">
                The Islamic Year, Alive
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center sm:text-left">
          <p className="text-[11px] text-muted-foreground">
            Built with intention. Sacred Seasons helps you navigate the Islamic year
            with presence and purpose. Dates computed live using the Umm al-Qura calendar.
          </p>
        </div>
      </div>
    </footer>
  )
}
