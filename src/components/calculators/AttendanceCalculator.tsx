"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCw } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientButton } from "@/components/ui/GradientButton"
import { CircularProgress } from "@/components/ui/CircularProgress"

export function AttendanceCalculator() {
  const [attended, setAttended] = useState("")
  const [total, setTotal] = useState("")
  const [target, setTarget] = useState("75")

  const reset = () => {
    setAttended("")
    setTotal("")
    setTarget("75")
  }

  const attendedNum = parseFloat(attended)
  const totalNum = parseFloat(total)
  const targetNum = parseFloat(target) || 75

  const isValid = !isNaN(attendedNum) && !isNaN(totalNum) && totalNum > 0 && attendedNum >= 0 && attendedNum <= totalNum

  const currentPct = isValid ? (attendedNum / totalNum) * 100 : 0

  // Classes you can bunk: (attended - target/100 * (total + x)) = 0
  // attended / (total + x) = target/100
  // x = attended*100/target - total
  const canBunk = isValid ? Math.floor(attendedNum * (100 / targetNum) - totalNum) : 0

  // Classes you need to attend to reach target:
  // (attended + x) / (total + x) = target/100
  // x = (target*total/100 - attended) / (1 - target/100)
  // Guard: if target >= 100, need-to-attend is infinite (impossible)
  const needToAttend = isValid && currentPct < targetNum && targetNum < 100
    ? Math.ceil((targetNum * totalNum / 100 - attendedNum) / (1 - targetNum / 100))
    : 0

  const bunkAllowed = isValid && canBunk > 0
  const needMore = isValid && needToAttend > 0

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <GlassCard>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Classes Attended</label>
            <input
              type="number"
              placeholder="e.g. 58"
              min={0}
              value={attended}
              onChange={(e) => setAttended(e.target.value)}
              className="w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Total Classes</label>
            <input
              type="number"
              placeholder="e.g. 75"
              min={1}
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Target Attendance %</label>
            <input
              type="number"
              placeholder="e.g. 75"
              min={1}
              max={100}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-xl px-4 py-3 text-base focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
            />
          </div>
        </div>
      </GlassCard>

      {/* Results */}
      <AnimatePresence mode="wait">
        {isValid && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="space-y-6"
          >
            {/* Circular progress */}
            <GlassCard className="flex flex-col items-center py-10 gap-6">
              <CircularProgress
                value={currentPct}
                max={100}
                size={200}
                strokeWidth={14}
                sublabel="Current Attendance"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <div className="text-center p-4 rounded-xl bg-muted/20 dark:bg-muted/10">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Attended</p>
                  <p className="text-2xl font-bold">{attendedNum}</p>
                  <p className="text-xs text-muted-foreground">of {totalNum} classes</p>
                </div>

                <div className={`text-center p-4 rounded-xl ${bunkAllowed ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-muted/20"}`}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Can Bunk</p>
                  <p className={`text-2xl font-bold ${bunkAllowed ? "text-emerald-400" : "text-muted-foreground"}`}>
                    {bunkAllowed ? canBunk : 0}
                  </p>
                  <p className="text-xs text-muted-foreground">more class{canBunk !== 1 ? "es" : ""}</p>
                </div>

                <div className={`text-center p-4 rounded-xl ${needMore ? "bg-red-500/10 border border-red-500/20" : "bg-emerald-500/10 border border-emerald-500/20"}`}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {needMore ? "Must Attend" : "Target Met ✓"}
                  </p>
                  <p className={`text-2xl font-bold ${needMore ? "text-red-400" : "text-emerald-400"}`}>
                    {needMore ? needToAttend : "🎉"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {needMore ? "more classes" : `above ${targetNum}%`}
                  </p>
                </div>
              </div>

              {/* Status message */}
              <div className={`w-full text-center py-3 px-6 rounded-xl text-sm font-medium ${
                currentPct >= targetNum
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }`}>
                {currentPct >= targetNum
                  ? `✓ You're above the ${targetNum}% target. You can safely bunk ${bunkAllowed ? canBunk : 0} more class${canBunk !== 1 ? "es" : ""}.`
                  : `⚠ You need to attend ${needToAttend} more class${needToAttend !== 1 ? "es" : ""} to reach ${targetNum}%.`
                }
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-end">
        <GradientButton onClick={reset} variant="ghost" size="sm" className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Reset
        </GradientButton>
      </div>
    </div>
  )
}
