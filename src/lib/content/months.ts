import { HijriMonth } from "@/types"

export const hijriMonths: HijriMonth[] = [
  { number: 1, name: "Muharram", arabicName: "مُحَرَّم", significance: "The sacred month — Islamic New Year. A month of reflection and renewed intention.", isSacred: true, days: 30 },
  { number: 2, name: "Safar", arabicName: "صَفَر", significance: "A month of emptying — letting go of what no longer serves.", isSacred: false, days: 29 },
  { number: 3, name: "Rabi' al-Awwal", arabicName: "رَبِيع الْأَوَّل", significance: "The spring of the first — the birth month of the Prophet Muhammad (PBUH).", isSacred: false, days: 30 },
  { number: 4, name: "Rabi' al-Thani", arabicName: "رَبِيع الثَّانِي", significance: "The second spring — a season of growth and spiritual cultivation.", isSacred: false, days: 29 },
  { number: 5, name: "Jumada al-Awwal", arabicName: "جُمَادَى الْأَوَّل", significance: "The dry month — a reminder of life's seasons and enduring faith.", isSacred: false, days: 30 },
  { number: 6, name: "Jumada al-Thani", arabicName: "جُمَادَى الثَّانِي", significance: "The second dry month — perseverance through the barren times.", isSacred: false, days: 29 },
  { number: 7, name: "Rajab", arabicName: "رَجَب", significance: "The month of Allah — a sacred month of preparation. The night of Isra' wal Mi'raj occurred this month.", isSacred: true, days: 30 },
  { number: 8, name: "Sha'ban", arabicName: "شَعْبَان", significance: "The month of separation — when deeds are raised to Allah. A time to prepare for Ramadan.", isSacred: false, days: 29 },
  { number: 9, name: "Ramadan", arabicName: "رَمَضَان", significance: "The month of fasting, Qur'an, and divine mercy. The holiest month of the Islamic year.", isSacred: true, days: 30 },
  { number: 10, name: "Shawwal", arabicName: "شَوَّال", significance: "The month of breaking — Eid al-Fitr and six days of voluntary fasting.", isSacred: false, days: 29 },
  { number: 11, name: "Dhu al-Qa'dah", arabicName: "ذُو الْقَعْدَة", significance: "The month of truce — a sacred month of peace and reflection.", isSacred: true, days: 30 },
  { number: 12, name: "Dhu al-Hijjah", arabicName: "ذُو الْحِجَّة", significance: "The month of Hajj — the pilgrimage and Eid al-Adha. The greatest days of the year.", isSacred: true, days: 30 },
]

export function getHijriMonth(number: number): HijriMonth {
  return hijriMonths[number - 1]
}
