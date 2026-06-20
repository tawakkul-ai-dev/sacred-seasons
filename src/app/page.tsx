import { Navigation } from "@/components/shared/navigation"
import { HeroSection } from "@/components/shared/hero-section"
import { WhatMattersNow } from "@/components/shared/what-matters-now"
import { IslamicYearJourney } from "@/components/shared/islamic-year-journey"
import { UpcomingEvents } from "@/components/shared/upcoming-events"
import { LearnSection } from "@/components/shared/learn-section"
import { Footer } from "@/components/shared/footer"
import { getCurrentSeason, getYearProgress, hijriMonths } from "@/lib/season"

export const revalidate = 3600

export default function Home() {
  const currentSeason = getCurrentSeason()
  const yearProgress = getYearProgress()

  return (
    <div className="min-h-screen bg-[#050814]">
      <Navigation />

      <main>
        <HeroSection
          hijriDate={currentSeason.hijriDate}
          monthName={currentSeason.month.name}
          monthSignificance={currentSeason.month.significance}
          nextEventTitle={currentSeason.nextMajorEvent.title}
          daysUntil={currentSeason.nextMajorEvent.daysUntil}
        />

        <WhatMattersNow
          title={currentSeason.whatMattersNow.title}
          description={currentSeason.whatMattersNow.description}
          actions={currentSeason.whatMattersNow.actions}
          insight={currentSeason.whatMattersNow.insight}
        />

        <IslamicYearJourney
          months={hijriMonths}
          currentMonth={yearProgress.currentMonth}
          yearProgress={yearProgress}
        />

        <UpcomingEvents events={currentSeason.upcomingEvents} />

        <LearnSection />
      </main>

      <Footer />
    </div>
  )
}
