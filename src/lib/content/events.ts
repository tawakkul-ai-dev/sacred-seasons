import { IslamicEvent } from "@/types"

export const islamicEvents: IslamicEvent[] = [
  {
    id: "ashura",
    title: "Ashura",
    subtitle: "10th of Muharram",
    month: 1,
    day: 10,
    significance:
      "A day of profound historical and spiritual significance. On this day, Allah saved Prophet Musa (AS) and the Children of Israel from Pharaoh. It is a sunnah to fast on this day and the day preceding or following it. The Prophet Muhammad (PBUH) said fasting Ashura expiates the sins of the previous year.",
    historicalContext:
      'When the Prophet (PBUH) arrived in Madinah, he found the Jews fasting on Ashura in gratitude for Musa\'s deliverance. He said, "We have more right to Musa than you," and fasted himself, commanding the companions to fast. Originally obligatory before Ramadan, it became recommended after the revelation of fasting in Ramadan.',
    recommendedActions: [
      "Fast on the 9th and 10th of Muharram (or 10th and 11th)",
      "Give charity — even a small amount",
      "Spend time in reflection and gratitude",
      "Read the story of Musa (AS) and reflect on its meaning",
    ],
    references: [
      "Sahih Muslim 1162",
      "Sahih al-Bukhari 2004",
      "Ibn Abbas (RA) narration on fasting Ashura",
    ],
    type: "historical",
  },
  {
    id: "mawlid",
    title: "Mawlid al-Nabi",
    subtitle: "12th of Rabi' al-Awwal",
    month: 3,
    day: 12,
    significance:
      "The birth of the Prophet Muhammad (PBUH) — the most significant event in human history. His life, character, and message transformed the world. This is a time to study his seerah, reflect on his example, and send abundant salawat upon him.",
    historicalContext:
      "The Prophet (PBUH) was born in the Year of the Elephant in Mecca. His birth was accompanied by miraculous signs. He was sent as a mercy to all worlds, and his biography remains the most detailed and authenticated of any religious figure.",
    recommendedActions: [
      "Read or listen to the seerah (Prophetic biography)",
      "Send salawat and salam upon the Prophet",
      "Reflect on one teaching of the Prophet and implement it",
      "Gather with family to discuss his noble character",
    ],
    references: [
      "The Sealed Nectar (Ar-Raheeq Al-Makhtum)",
      "Sahih Muslim — descriptions of the Prophet",
      'Qur\'an 21:107 — "And We have not sent you except as a mercy to the worlds"',
    ],
    type: "historical",
  },
  {
    id: "isra-wal-miraj",
    title: "Isra' wal Mi'raj",
    subtitle: "27th of Rajab",
    month: 7,
    day: 27,
    significance:
      "The Night Journey and Ascension. The Prophet (PBUH) was transported from Mecca to Jerusalem and then ascended through the heavens. This night established the five daily prayers and demonstrated the boundless power of Allah.",
    historicalContext:
      "In a year of immense personal loss (the Year of Sorrow), Allah comforted the Prophet (PBUH) with this miraculous journey. He led all the prophets in prayer at Al-Aqsa Mosque, then ascended through the seven heavens, meeting prophets and receiving the command of prayer directly from Allah.",
    recommendedActions: [
      "Pray tahajjud (night prayer) — it was prescribed this night",
      "Learn about Al-Aqsa Mosque and its significance",
      "Reflect on the gift of the five daily prayers",
      "Strengthen your connection to the masjid",
    ],
    references: [
      "Surah Al-Isra (17:1)",
      "Surah An-Najm (53:13-18)",
      "Sahih al-Bukhari 3207",
      "Sahih Muslim 162",
    ],
    type: "historical",
  },
  {
    id: "nisf-shaban",
    title: "Nisf Sha'ban",
    subtitle: "15th of Sha'ban",
    month: 8,
    day: 15,
    significance:
      "The middle night of Sha'ban — a night of mercy and forgiveness. Deeds are raised to Allah, and it is a final spiritual preparation before Ramadan. The Prophet (PBUH) said Allah looks upon His creation this night and forgives all except those who associate partners with Him.",
    historicalContext:
      "The companions observed this night with extra worship. It marks the turning of the Qibla from Jerusalem to Mecca for some narrations, and it is the night when Allah decrees the provisions and lifespans for the coming year. It is the last chance to enter Ramadan free of burdens.",
    recommendedActions: [
      "Spend the night in prayer and supplication",
      "Seek forgiveness for yourself and others",
      "Fast the 15th of Sha'ban (or the 13th-15th, the white days)",
      "Make a plan for Ramadan — set spiritual goals",
    ],
    references: [
      "Sunan Ibn Majah 1388",
      "Sahih Ibn Hibban 5665",
      "Hadith on forgiveness in middle of Sha'ban",
    ],
    type: "ibadah",
  },
  {
    id: "ramadan",
    title: "Ramadan",
    subtitle: "Month of Fasting",
    month: 9,
    day: 1,
    significance:
      "The holiest month of the Islamic year. The month in which the Qur'an was revealed. Fasting from dawn to sunset is obligatory. The gates of Paradise are opened, the gates of Hell are closed, and the devils are chained. Every night has a special mercy, and one night (Laylat al-Qadr) is better than a thousand months.",
    historicalContext:
      "Fasting was prescribed in the second year of Hijrah (624 CE). The first revelation of the Qur'an came on Laylat al-Qadr during Ramadan. The Battle of Badr also took place during Ramadan, marking a turning point for the Muslim community.",
    recommendedActions: [
      "Fast every day from dawn to sunset",
      "Pray taraweeh (night prayers) at the masjid",
      "Give regular charity — especially food to the fasting",
      "Complete at least one khatm (full reading) of the Qur'an",
      "Seek Laylat al-Qadr in the last ten nights",
    ],
    references: [
      "Surah Al-Baqarah (2:183-185)",
      "Surah Al-Qadr (97:1-5)",
      "Sahih al-Bukhari 1899",
      "Sahih Muslim 1079",
    ],
    type: "ibadah",
  },
  {
    id: "laylat-al-qadr",
    title: "Laylat al-Qadr",
    subtitle: "27th of Ramadan (most likely)",
    month: 9,
    day: 27,
    significance:
      "The Night of Power — the most blessed night of the year. The Qur'an was first revealed on this night. Worship on this night is better than a thousand months (over 83 years). Angels descend with every decree, and peace prevails until dawn.",
    historicalContext:
      "The Prophet (PBUH) would intensify his worship in the last ten nights of Ramadan, particularly on the odd nights. He said to seek Laylat al-Qadr in the last ten nights, especially the odd ones. The exact night is unknown but most likely the 27th.",
    recommendedActions: [
      "Pray throughout the night — especially tahajjud",
      'Make abundant dua — especially the taught dua: "Allahumma innaka afuwwun tuhibbul afwa fa\'fu anni"',
      "Recite Qur'an — even if just a few pages with reflection",
      "Give sadaqah — whatever you can, whenever you can",
    ],
    references: [
      "Surah Al-Qadr (97:1-5)",
      "Sahih al-Bukhari 2020",
      "Sahih Muslim 1169",
      'Dua taught to Aisha (RA): "O Allah, You are Forgiving and love forgiveness, so forgive me"',
    ],
    type: "ibadah",
  },
  {
    id: "eid-al-fitr",
    title: "Eid al-Fitr",
    subtitle: "1st of Shawwal",
    month: 10,
    day: 1,
    significance:
      "The festival of breaking the fast — a day of joy, gratitude, and community. Marks the end of Ramadan. It is a day to thank Allah for the strength to complete the fast, give Zakat al-Fitr (charity of fast-breaking), and celebrate with family and community.",
    historicalContext:
      "Eid al-Fitr was established in the second year of Hijrah (624 CE). The Prophet (PBUH) would take a different route to and from the prayer ground, eat dates before leaving, and say takbir on the way. It is a sunnah to bathe, wear one's best clothes, and exchange greetings.",
    recommendedActions: [
      "Pay Zakat al-Fitr before the Eid prayer",
      "Attend the Eid prayer at the masjid or prayer ground",
      "Eat an odd number of dates before leaving for prayer",
      "Say takbir from sunset of the night before until the prayer",
      "Visit family, give gifts, and strengthen ties",
    ],
    references: [
      "Sahih al-Bukhari 953",
      "Sunnah of taking different routes to and from prayer",
      "Zakat al-Fitr obligations",
    ],
    type: "ibadah",
  },
  {
    id: "arafah",
    title: "Day of Arafah",
    subtitle: "9th of Dhu al-Hijjah",
    month: 12,
    day: 9,
    significance:
      "The greatest day of the Islamic year. The pilgrims stand on the plain of Arafah in supplication, and those not on Hajj are encouraged to fast. Fasting this day expiates the sins of two years — the previous and the coming. Allah descends to the lowest heaven and boasts to the angels about the pilgrims.",
    historicalContext:
      'The Prophet (PBUH) delivered his Farewell Sermon on this day, standing on Mount Arafah. He said, "This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as your religion." It was also on this day that the verse of perfection was revealed.',
    recommendedActions: [
      "Fast the Day of Arafah (if not on Hajj)",
      "Make abundant dua — it is the best day for supplication",
      "Recite la ilaha illallah throughout the day",
      "Learn about the Farewell Sermon and its meanings",
    ],
    references: [
      "Sahih Muslim 1162 — fasting Arafah expiates two years",
      "Surah Al-Ma'idah (5:3) — perfection of the religion",
      "Farewell Sermon of the Prophet (PBUH)",
    ],
    type: "ibadah",
  },
  {
    id: "eid-al-adha",
    title: "Eid al-Adha",
    subtitle: "10th of Dhu al-Hijjah",
    month: 12,
    day: 10,
    significance:
      "The festival of sacrifice — commemorating Prophet Ibrahim's (AS) willingness to sacrifice his son Isma'il (AS) in obedience to Allah. Muslims who can afford it sacrifice an animal and distribute the meat to family, friends, and the poor. It marks the completion of Hajj.",
    historicalContext:
      "Ibrahim (AS) saw in a dream that he was sacrificing his son. When he told Isma'il, the son said, \"Do as you are commanded.\" At the moment of sacrifice, Allah replaced Isma'il with a ram. This act of submission is commemorated every year.",
    recommendedActions: [
      "Attend the Eid prayer",
      "Sacrifice an animal if financially able",
      "Distribute meat — one-third to the poor, one-third to family, one-third to yourself",
      "Say takbir from Fajr of Arafah until Asr of the 13th",
      "Remember the spirit of submission and sacrifice",
    ],
    references: [
      "Surah As-Saffat (37:99-113)",
      "Sahih al-Bukhari 5545",
      "Sunnah of Qurbani (sacrifice)",
    ],
    type: "ibadah",
  },
]

export function getEventById(id: string): IslamicEvent | undefined {
  return islamicEvents.find((event) => event.id === id)
}

export function getAllEventIds(): string[] {
  return islamicEvents.map((event) => event.id)
}

export function getEventsByMonth(monthNumber: number): IslamicEvent[] {
  return islamicEvents.filter((event) => event.month === monthNumber)
}
