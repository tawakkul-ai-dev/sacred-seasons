export interface HijriMonth {
  number: number
  name: string
  arabicName: string
  significance: string
  isSacred: boolean
  days: number
}

export interface IslamicEvent {
  id: string
  title: string
  subtitle: string
  month: number
  day: number
  significance: string
  historicalContext: string
  recommendedActions: string[]
  references: string[]
  type: "ibadah" | "historical" | "milestone" | "seasonal"
}

export interface ResolvedIslamicEvent extends IslamicEvent {
  hijriDate: string
  gregorianDate: string
  daysUntil: number
  hijriYear: number
}

export interface YearProgress {
  currentMonth: number
  currentDay: number
  totalDays: number
  daysElapsed: number
  percentageComplete: number
}

export interface MonthGuidance {
  title: string
  description: string
  actions: string[]
  insight: string
}

export interface CurrentSeason {
  hijriDate: string
  month: HijriMonth
  nextMajorEvent: {
    title: string
    daysUntil: number
    date: string
  }
  whatMattersNow: MonthGuidance
  upcomingEvents: ResolvedIslamicEvent[]
}
