import { SGPACalculator } from "@/components/calculators/SGPACalculator"
import { Calculator } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SGPA Calculator — GradePilot",
  description:
    "Calculate your SGPA instantly. Enter subject marks or grades, and get your Semester Grade Point Average with automatic mark-to-grade conversion.",
}

export default function SGPAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">SGPA Calculator</h1>
            <p className="text-muted-foreground text-sm">Semester Grade Point Average</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Enter your subject details below. You can input marks (auto-converted to grade) or select a grade directly.
          SGPA is calculated as <span className="font-mono text-violet-brand bg-violet-brand/10 px-1.5 py-0.5 rounded text-sm">Σ(Credits × Grade Points) / Σ Credits</span>
        </p>
      </div>

      <SGPACalculator />
    </div>
  )
}
