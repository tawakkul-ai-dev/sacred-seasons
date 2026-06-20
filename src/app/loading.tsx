import { MoonStar } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050814] flex items-center justify-center">
      <div className="aurora-bg absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a84c]/10 to-[#8a7a3a]/5 flex items-center justify-center moon-glow">
          <MoonStar className="w-6 h-6 text-[#c9a84c] animate-pulse" />
        </div>
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
