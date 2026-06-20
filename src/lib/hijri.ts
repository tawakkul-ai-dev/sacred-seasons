import { toGregorian, toHijri } from "hijri-converter"

export interface HijriDate {
  year: number
  month: number
  day: number
}

const HIJRI_MONTH_NAMES = [
  "Muharram",
  "Safar",
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  "Jumada al-Awwal",
  "Jumada al-Thani",
  "Rajab",
  "Sha'ban",
  "Ramadan",
  "Shawwal",
  "Dhu al-Qa'dah",
  "Dhu al-Hijjah",
] as const

export function getToday(): Date {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

export function getTodayHijri(date: Date = getToday()): HijriDate {
  const { hy, hm, hd } = toHijri(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  )
  return { year: hy, month: hm, day: hd }
}

export function hijriToGregorian(hijri: HijriDate): Date {
  const { gy, gm, gd } = toGregorian(hijri.year, hijri.month, hijri.day)
  return new Date(gy, gm - 1, gd)
}

export function getMonthLength(hijriYear: number, hijriMonth: number): number {
  const start = hijriToGregorian({ year: hijriYear, month: hijriMonth, day: 1 })
  const nextMonth = hijriMonth === 12 ? 1 : hijriMonth + 1
  const nextYear = hijriMonth === 12 ? hijriYear + 1 : hijriYear
  const end = hijriToGregorian({ year: nextYear, month: nextMonth, day: 1 })
  return Math.round((end.getTime() - start.getTime()) / 86_400_000)
}

export function formatHijriDate(hijri: HijriDate, includeSuffix = true): string {
  const monthName = HIJRI_MONTH_NAMES[hijri.month - 1]
  const suffix = includeSuffix ? " AH" : ""
  return `${hijri.day} ${monthName} ${hijri.year}${suffix}`
}

export function formatGregorianDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

export function daysBetween(from: Date, to: Date): number {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate())
  return Math.round((end.getTime() - start.getTime()) / 86_400_000)
}

export function getNextOccurrence(
  month: number,
  day: number,
  from: Date = getToday()
): { hijriYear: number; date: Date; daysUntil: number } {
  const todayHijri = getTodayHijri(from)
  let hijriYear = todayHijri.year

  let date = hijriToGregorian({ year: hijriYear, month, day })

  if (date < from) {
    hijriYear += 1
    date = hijriToGregorian({ year: hijriYear, month, day })
  }

  return {
    hijriYear,
    date,
    daysUntil: daysBetween(from, date),
  }
}

export function getYearProgress(hijri: HijriDate = getTodayHijri()) {
  let daysElapsed = 0
  for (let month = 1; month < hijri.month; month++) {
    daysElapsed += getMonthLength(hijri.year, month)
  }
  daysElapsed += hijri.day

  let totalDays = 0
  for (let month = 1; month <= 12; month++) {
    totalDays += getMonthLength(hijri.year, month)
  }

  return {
    currentMonth: hijri.month,
    currentDay: hijri.day,
    totalDays,
    daysElapsed,
    percentageComplete: Math.round((daysElapsed / totalDays) * 1000) / 10,
  }
}
