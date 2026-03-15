import { AttendanceCalculator } from "@/components/calculators/AttendanceCalculator"
import { BarChart3 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Attendance Calculator — GradePilot",
  description: "Track your class attendance, find how many classes you can bunk, and see how many you must attend to reach your target percentage.",
}

export default function AttendancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">Attendance Calculator</h1>
            <p className="text-muted-foreground text-sm">Track & manage your attendance</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Enter your attended classes, total classes, and target percentage. See your current status and find how many classes you can skip safely.
        </p>
      </div>
      <AttendanceCalculator />
    </div>
  )
}
