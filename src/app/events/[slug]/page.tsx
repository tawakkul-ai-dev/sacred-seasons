import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EventDetail } from "@/components/shared/event-detail"
import { getEventById, getAllEventIds } from "@/lib/content/events"
import { resolveEvent } from "@/lib/season"

export const revalidate = 3600

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllEventIds().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventById(slug)

  if (!event) {
    return { title: "Event Not Found | Sacred Seasons" }
  }

  const resolved = resolveEvent(event)

  return {
    title: `${event.title} | Sacred Seasons`,
    description: event.significance.slice(0, 160),
    openGraph: {
      title: `${event.title} — ${resolved.hijriDate}`,
      description: event.subtitle,
    },
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventById(slug)

  if (!event) {
    notFound()
  }

  return <EventDetail event={resolveEvent(event)} />
}
