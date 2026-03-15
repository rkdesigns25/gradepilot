import { PercentageCalculator } from "@/components/calculators/PercentageCalculator"
import { Percent } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Percentage Calculator — GradePilot",
  description: "Convert marks to percentage, find marks needed for a target percentage, or convert percentage to marks. Three powerful tools in one.",
}

export default function PercentagePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/25">
            <Percent className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">Percentage Calculator</h1>
            <p className="text-muted-foreground text-sm">Three tools for percentage calculations</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Use the tabs below to switch between tools — convert marks to percentage, find marks from a target percentage, or calculate marks needed.
        </p>
      </div>
      <PercentageCalculator />
    </div>
  )
}
