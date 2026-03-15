"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Trash2, Copy, RefreshCw } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientButton } from "@/components/ui/GradientButton"

interface Semester {
  id: string
  name: string
  sgpa: string
  credits: string
}

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

function newSemester(index: number): Semester {
  return { id: generateId(), name: `Semester ${index + 1}`, sgpa: "", credits: "" }
}

function getCGPAColor(cgpa: number) {
  if (cgpa >= 9) return { text: "text-emerald-400", label: "Outstanding" }
  if (cgpa >= 8) return { text: "text-green-400", label: "Excellent" }
  if (cgpa >= 7) return { text: "text-lime-400", label: "Very Good" }
  if (cgpa >= 6) return { text: "text-yellow-400", label: "Good" }
  if (cgpa >= 5) return { text: "text-orange-400", label: "Average" }
  return { text: "text-red-400", label: "Needs Improvement" }
}

export function CGPACalculator() {
  const [semesters, setSemesters] = useState<Semester[]>([
    newSemester(0),
    newSemester(1),
    newSemester(2),
  ])
  const [copied, setCopied] = useState(false)

  const update = (id: string, field: keyof Semester, value: string) => {
    setSemesters((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
  }

  const remove = (id: string) => setSemesters((prev) => prev.filter((s) => s.id !== id))
  const add = () => setSemesters((prev) => [...prev, newSemester(prev.length)])
  const reset = () => setSemesters([newSemester(0), newSemester(1), newSemester(2)])

  const valid = semesters.filter((s) => {
    const sg = parseFloat(s.sgpa)
    const cr = parseFloat(s.credits)
    return !isNaN(sg) && !isNaN(cr) && sg >= 0 && sg <= 10 && cr > 0
  })

  const totalCredits = valid.reduce((sum, s) => sum + parseFloat(s.credits), 0)
  const totalWeighted = valid.reduce((sum, s) => sum + parseFloat(s.sgpa) * parseFloat(s.credits), 0)
  const cgpa = totalCredits > 0 ? totalWeighted / totalCredits : null
  const colorInfo = cgpa !== null ? getCGPAColor(cgpa) : null

  const copyResult = () => {
    if (cgpa !== null) {
      navigator.clipboard.writeText(`CGPA: ${cgpa.toFixed(2)}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="space-y-6">
      {/* Semesters */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {semesters.map((sem, index) => (
            <motion.div
              key={sem.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <GlassCard className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-violet-brand/20 flex items-center justify-center text-xs font-bold text-violet-brand shrink-0">
                    {index + 1}
                  </div>
                  <input
                    type="text"
                    value={sem.name}
                    onChange={(e) => update(sem.id, "name", e.target.value)}
                    className="flex-1 bg-transparent text-sm font-medium placeholder:text-muted-foreground/50 border-none focus:outline-none"
                    placeholder={`Semester ${index + 1}`}
                  />
                  <button
                    onClick={() => remove(sem.id)}
                    className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">SGPA (0–10)</label>
                    <input
                      type="number"
                      placeholder="e.g. 8.5"
                      min={0}
                      max={10}
                      step={0.01}
                      value={sem.sgpa}
                      onChange={(e) => update(sem.id, "sgpa", e.target.value)}
                      className="w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Credits</label>
                    <input
                      type="number"
                      placeholder="e.g. 24"
                      min={1}
                      value={sem.credits}
                      onChange={(e) => update(sem.id, "credits", e.target.value)}
                      className="w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        onClick={add}
        className="w-full py-3 rounded-xl border-2 border-dashed border-violet-brand/30 hover:border-violet-brand/60 text-violet-brand/60 hover:text-violet-brand text-sm font-medium transition-all hover:bg-violet-brand/5 flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add Semester
      </button>

      {/* Result */}
      <AnimatePresence mode="wait">
        {cgpa !== null && valid.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <GlassCard glow className="text-center py-8">
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2 font-medium">Your CGPA</p>
              <motion.div
                key={cgpa.toFixed(2)}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`text-7xl font-extrabold mb-2 ${colorInfo?.text || "gradient-text"}`}
              >
                {cgpa.toFixed(2)}
              </motion.div>
              {colorInfo && (
                <motion.p
                  className={`text-sm font-semibold mb-1 ${colorInfo.text}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {colorInfo.label}
                </motion.p>
              )}
              <p className="text-muted-foreground text-sm mb-6">
                {valid.length} semester{valid.length !== 1 ? "s" : ""} · {totalCredits} total credits
              </p>

              {/* Progress bar */}
              <div className="w-full max-w-xs mx-auto h-2 bg-muted/40 rounded-full overflow-hidden mb-6">
                <motion.div
                  className="h-full rounded-full gradient-bg"
                  initial={{ width: 0 }}
                  animate={{ width: `${(cgpa / 10) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>

              <div className="flex gap-3 justify-center">
                <GradientButton onClick={copyResult} variant="outline" size="sm" className="gap-2">
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy CGPA"}
                </GradientButton>
                <GradientButton onClick={reset} variant="ghost" size="sm" className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </GradientButton>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
