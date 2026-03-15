"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientButton } from "@/components/ui/GradientButton"
import { RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

type Tool = "marks-to-pct" | "pct-to-marks" | "marks-needed"

export function PercentageCalculator() {
  const [activeTool, setActiveTool] = useState<Tool>("marks-to-pct")

  // Tool 1
  const [obtained, setObtained] = useState("")
  const [totalMarks1, setTotalMarks1] = useState("")

  // Tool 2
  const [targetPct, setTargetPct] = useState("")
  const [totalMarks2, setTotalMarks2] = useState("")

  // Tool 3
  const [currentMarks, setCurrentMarks] = useState("")
  const [totalMarks3, setTotalMarks3] = useState("")
  const [targetPct3, setTargetPct3] = useState("")

  const tools: { id: Tool; label: string }[] = [
    { id: "marks-to-pct", label: "Marks → %" },
    { id: "pct-to-marks", label: "% → Marks" },
    { id: "marks-needed", label: "Marks Needed" },
  ]

  // Calculations — use proper NaN checks (parseFloat(x) && y fails when x is 0)
  const obtainedVal = parseFloat(obtained)
  const totalVal1 = parseFloat(totalMarks1)
  const pct1 = !isNaN(obtainedVal) && !isNaN(totalVal1) && totalVal1 > 0 && obtainedVal >= 0
    ? (obtainedVal / totalVal1) * 100
    : null

  const targetPctVal = parseFloat(targetPct)
  const totalVal2 = parseFloat(totalMarks2)
  const marks2 = !isNaN(targetPctVal) && !isNaN(totalVal2) && totalVal2 > 0 && targetPctVal >= 0
    ? (targetPctVal / 100) * totalVal2
    : null

  const currentVal = parseFloat(currentMarks)
  const totalVal3 = parseFloat(totalMarks3)
  const targetVal3 = parseFloat(targetPct3)
  const neededMarks = !isNaN(currentVal) && !isNaN(totalVal3) && !isNaN(targetVal3)
    && totalVal3 > 0 && currentVal >= 0 && targetVal3 >= 0
    ? Math.ceil((targetVal3 / 100) * totalVal3) - currentVal
    : null

  const reset = () => {
    setObtained(""); setTotalMarks1("")
    setTargetPct(""); setTotalMarks2("")
    setCurrentMarks(""); setTotalMarks3(""); setTargetPct3("")
  }

  const inputClass = "w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
  const labelClass = "text-sm font-medium mb-2 block"

  return (
    <div className="space-y-6">
      {/* Tab selector */}
      <GlassCard className="p-2">
        <div className="flex gap-1">
          {tools.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTool(t.id)}
              className={cn(
                "flex-1 py-2.5 px-3 rounded-xl text-sm font-semibold transition-all",
                activeTool === t.id
                  ? "bg-gradient-to-r from-violet-brand to-violet-light text-white shadow-md"
                  : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Tool panels */}
      <AnimatePresence mode="wait">
        {activeTool === "marks-to-pct" && (
          <motion.div
            key="marks-to-pct"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <GlassCard className="space-y-4">
              <h3 className="font-bold text-lg">Marks to Percentage</h3>
              <p className="text-sm text-muted-foreground">
                Formula: <span className="font-mono text-violet-brand bg-violet-brand/10 px-2 py-0.5 rounded">(Obtained / Total) × 100</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Obtained Marks</label>
                  <input type="number" placeholder="e.g. 450" min={0} value={obtained} onChange={e => setObtained(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Total Marks</label>
                  <input type="number" placeholder="e.g. 600" min={1} value={totalMarks1} onChange={e => setTotalMarks1(e.target.value)} className={inputClass} />
                </div>
              </div>
              <AnimatePresence>
                {pct1 !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mt-4 text-center py-6 rounded-xl bg-violet-brand/10 border border-violet-brand/20"
                  >
                    <p className="text-muted-foreground text-sm mb-1">Your Percentage</p>
                    <p className="text-5xl font-extrabold gradient-text">{pct1.toFixed(2)}%</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        )}

        {activeTool === "pct-to-marks" && (
          <motion.div
            key="pct-to-marks"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <GlassCard className="space-y-4">
              <h3 className="font-bold text-lg">Percentage to Marks</h3>
              <p className="text-sm text-muted-foreground">
                Formula: <span className="font-mono text-violet-brand bg-violet-brand/10 px-2 py-0.5 rounded">(Target% × Total) / 100</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Target Percentage (%)</label>
                  <input type="number" placeholder="e.g. 80" min={0} max={100} value={targetPct} onChange={e => setTargetPct(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Total Marks</label>
                  <input type="number" placeholder="e.g. 600" min={1} value={totalMarks2} onChange={e => setTotalMarks2(e.target.value)} className={inputClass} />
                </div>
              </div>
              <AnimatePresence>
                {marks2 !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mt-4 text-center py-6 rounded-xl bg-blue-500/10 border border-blue-500/20"
                  >
                    <p className="text-muted-foreground text-sm mb-1">Marks Required</p>
                    <p className="text-5xl font-extrabold text-blue-400">{marks2.toFixed(0)}</p>
                    <p className="text-sm text-muted-foreground mt-1">out of {totalMarks2}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        )}

        {activeTool === "marks-needed" && (
          <motion.div
            key="marks-needed"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <GlassCard className="space-y-4">
              <h3 className="font-bold text-lg">Marks Needed for Target %</h3>
              <p className="text-sm text-muted-foreground">Find how many more marks you need to achieve your target percentage.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Current Marks</label>
                  <input type="number" placeholder="e.g. 320" min={0} value={currentMarks} onChange={e => setCurrentMarks(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Total Marks</label>
                  <input type="number" placeholder="e.g. 600" min={1} value={totalMarks3} onChange={e => setTotalMarks3(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Target %</label>
                  <input type="number" placeholder="e.g. 75" min={0} max={100} value={targetPct3} onChange={e => setTargetPct3(e.target.value)} className={inputClass} />
                </div>
              </div>
              <AnimatePresence>
                {neededMarks !== null && !isNaN(neededMarks) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={cn(
                      "mt-4 text-center py-6 rounded-xl border",
                      neededMarks <= 0
                        ? "bg-emerald-500/10 border-emerald-500/20"
                        : "bg-orange-500/10 border-orange-500/20"
                    )}
                  >
                    {neededMarks <= 0 ? (
                      <>
                        <p className="text-emerald-400 text-sm font-medium mb-1">🎉 Target Already Achieved!</p>
                        <p className="text-4xl font-extrabold text-emerald-400">
                          {((parseFloat(currentMarks) / parseFloat(totalMarks3)) * 100).toFixed(2)}%
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Current percentage</p>
                      </>
                    ) : (
                      <>
                        <p className="text-muted-foreground text-sm mb-1">Additional Marks Needed</p>
                        <p className="text-5xl font-extrabold text-orange-400">{neededMarks}</p>
                        <p className="text-sm text-muted-foreground mt-1">to reach {targetPct3}%</p>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-end">
        <GradientButton onClick={reset} variant="ghost" size="sm" className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Reset All
        </GradientButton>
      </div>
    </div>
  )
}
