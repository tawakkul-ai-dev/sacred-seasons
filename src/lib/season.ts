import { CurrentSeason, ResolvedIslamicEvent } from "@/types"
import { islamicEvents } from "@/lib/content/events"
import { getMonthGuidance } from "@/lib/content/guidance"
import { getHijriMonth, hijriMonths } from "@/lib/content/months"
import {
  formatGregorianDate,
  formatHijriDate,
  getNextOccurrence,
  getToday,
  getTodayHijri,
  getYearProgress,
} from "@/lib/hijri"

export function resolveEvent(event: (typeof islamicEvents)[number]): ResolvedIslamicEvent {
  const today = getToday()
  const { hijriYear, date, daysUntil } = getNextOccurrence(event.month, event.day, today)

  return {
    ...event,
    hijriDate: formatHijriDate({ year: hijriYear, month: event.month, day: event.day }),
    gregorianDate: formatGregorianDate(date),
    daysUntil,
    hijriYear,
  }
}

export function resolveAllEvents(): ResolvedIslamicEvent[] {
  return islamicEvents.map(resolveEvent)
}

export function getUpcomingEvents(limit = 6): ResolvedIslamicEvent[] {
  return resolveAllEvents()
    .filter((event) => event.daysUntil >= 0)
    .sort((a, b) => a.daysUntil - b.daysUntil)
    .slice(0, limit)
}

export function getCurrentSeason(): CurrentSeason {
  const today = getToday()
  const hijri = getTodayHijri(today)
  const month = getHijriMonth(hijri.month)
  const guidance = getMonthGuidance(hijri.month)
  const upcoming = getUpcomingEvents()
  const nextEvent = upcoming[0]

  return {
    hijriDate: formatHijriDate(hijri),
    month,
    nextMajorEvent: nextEvent
      ? {
          title: nextEvent.title,
          daysUntil: nextEvent.daysUntil,
          date: nextEvent.hijriDate,
        }
      : {
          title: "Islamic New Year",
          daysUntil: getNextOccurrence(1, 1, today).daysUntil,
          date: formatHijriDate({
            year: getNextOccurrence(1, 1, today).hijriYear,
            month: 1,
            day: 1,
          }),
        },
    whatMattersNow: guidance,
    upcomingEvents: upcoming,
  }
}

export { getYearProgress, hijriMonths }
