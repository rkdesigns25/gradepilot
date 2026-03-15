import { CGPACalculator } from "@/components/calculators/CGPACalculator"
import { BookOpen } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CGPA Calculator — GradePilot",
  description: "Calculate your CGPA from all semesters. Enter SGPA and credits per semester to get your Cumulative Grade Point Average instantly.",
}

export default function CGPAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">CGPA Calculator</h1>
            <p className="text-muted-foreground text-sm">Cumulative Grade Point Average</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Enter your SGPA and credit count for each semester below. CGPA is calculated as{" "}
          <span className="font-mono text-violet-brand bg-violet-brand/10 px-1.5 py-0.5 rounded text-sm">
            Σ(SGPA × Credits) / Σ Credits
          </span>
        </p>
      </div>
      <CGPACalculator />
    </div>
  )
}
