import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MonthDetail } from "@/components/shared/month-detail"
import { getHijriMonth, hijriMonths } from "@/lib/content/months"
import { getMonthGuidance } from "@/lib/content/guidance"
import { getEventsByMonth } from "@/lib/content/events"

interface MonthPageProps {
  params: Promise<{ number: string }>
}

export function generateStaticParams() {
  return hijriMonths.map((month) => ({ number: String(month.number) }))
}

export async function generateMetadata({ params }: MonthPageProps): Promise<Metadata> {
  const { number } = await params
  const monthNum = parseInt(number, 10)
  const month = getHijriMonth(monthNum)

  if (!month) {
    return { title: "Month Not Found | Sacred Seasons" }
  }

  return {
    title: `${month.name} | Sacred Seasons`,
    description: month.significance.slice(0, 160),
  }
}

export default async function MonthPage({ params }: MonthPageProps) {
  const { number } = await params
  const monthNum = parseInt(number, 10)

  if (monthNum < 1 || monthNum > 12) {
    notFound()
  }

  const month = getHijriMonth(monthNum)
  const guidance = getMonthGuidance(monthNum)
  const events = getEventsByMonth(monthNum)
  const nextMonth = monthNum < 12 ? monthNum + 1 : null
  const prevMonth = monthNum > 1 ? monthNum - 1 : null

  return (
    <MonthDetail
      month={month}
      guidance={guidance}
      events={events}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
    />
  )
}
