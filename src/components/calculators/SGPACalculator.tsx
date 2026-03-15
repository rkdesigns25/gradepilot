"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Trash2, Copy, RefreshCw } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientButton } from "@/components/ui/GradientButton"
import { cn } from "@/lib/utils"

type Grade = "O" | "A+" | "A" | "B+" | "B" | "C" | "P" | "F"

interface GradeInfo {
  grade: Grade
  points: number
}

function marksToGrade(marks: number): GradeInfo {
  if (marks >= 90) return { grade: "O", points: 10 }
  if (marks >= 80) return { grade: "A+", points: 9 }
  if (marks >= 70) return { grade: "A", points: 8 }
  if (marks >= 60) return { grade: "B+", points: 7 }
  if (marks >= 55) return { grade: "B", points: 6 }
  if (marks >= 50) return { grade: "C", points: 5 }
  if (marks >= 40) return { grade: "P", points: 4 }
  return { grade: "F", points: 0 }
}

const gradeOptions: { grade: Grade; points: number }[] = [
  { grade: "O", points: 10 },
  { grade: "A+", points: 9 },
  { grade: "A", points: 8 },
  { grade: "B+", points: 7 },
  { grade: "B", points: 6 },
  { grade: "C", points: 5 },
  { grade: "P", points: 4 },
  { grade: "F", points: 0 },
]

interface Subject {
  id: string
  name: string
  credits: string
  marks: string
  grade: Grade | ""
  gradePoints: number
  inputMode: "marks" | "grade"
}

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

function newSubject(): Subject {
  return {
    id: generateId(),
    name: "",
    credits: "",
    marks: "",
    grade: "",
    gradePoints: 0,
    inputMode: "marks",
  }
}

export function SGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([newSubject(), newSubject(), newSubject()])
  const [copied, setCopied] = useState(false)

  const updateSubject = useCallback((id: string, updates: Partial<Subject>) => {
    setSubjects((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s
        const updated = { ...s, ...updates }

        if (updates.marks !== undefined) {
          const m = parseFloat(updates.marks)
          if (!isNaN(m) && m >= 0 && m <= 100) {
            const info = marksToGrade(m)
            updated.grade = info.grade
            updated.gradePoints = info.points
          } else {
            updated.grade = ""
            updated.gradePoints = 0
          }
        }

        if (updates.grade !== undefined && updates.grade !== "") {
          const found = gradeOptions.find((g) => g.grade === updates.grade)
          if (found) updated.gradePoints = found.points
        }

        return updated
      })
    )
  }, [])

  const removeSubject = (id: string) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id))
  }

  const addSubject = () => {
    setSubjects((prev) => [...prev, newSubject()])
  }

  const reset = () => {
    setSubjects([newSubject(), newSubject(), newSubject()])
  }

  // Calculate SGPA
  const validSubjects = subjects.filter((s) => {
    const credits = parseFloat(s.credits)
    return !isNaN(credits) && credits > 0 && s.gradePoints >= 0 && s.grade !== ""
  })

  const totalCredits = validSubjects.reduce((sum, s) => sum + parseFloat(s.credits), 0)
  const totalWeighted = validSubjects.reduce((sum, s) => sum + parseFloat(s.credits) * s.gradePoints, 0)
  const sgpa = totalCredits > 0 ? totalWeighted / totalCredits : null

  const copyResult = () => {
    if (sgpa !== null) {
      navigator.clipboard.writeText(`SGPA: ${sgpa.toFixed(2)}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const gradeColor: Record<Grade, string> = {
    O: "text-emerald-400 bg-emerald-400/10",
    "A+": "text-green-400 bg-green-400/10",
    A: "text-lime-400 bg-lime-400/10",
    "B+": "text-yellow-400 bg-yellow-400/10",
    B: "text-amber-400 bg-amber-400/10",
    C: "text-orange-400 bg-orange-400/10",
    P: "text-red-400 bg-red-400/10",
    F: "text-rose-500 bg-rose-500/10",
  }

  return (
    <div className="space-y-6">
      {/* Grade Table */}
      <GlassCard className="p-4">
        <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wider">
          Grade Conversion Table
        </h3>
        <div className="flex flex-wrap gap-2">
          {gradeOptions.map((g) => (
            <div key={g.grade} className={cn("px-3 py-1 rounded-full text-sm font-medium", gradeColor[g.grade])}>
              {g.grade} = {g.points}
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Subjects */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <GlassCard className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-violet-brand/20 flex items-center justify-center text-xs font-bold text-violet-brand">
                    {index + 1}
                  </div>
                  <input
                    type="text"
                    placeholder="Subject name (optional)"
                    value={subject.name}
                    onChange={(e) => updateSubject(subject.id, { name: e.target.value })}
                    className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground/50 border-none focus:outline-none"
                  />
                  <button
                    onClick={() => removeSubject(subject.id)}
                    className="ml-auto p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {/* Credits */}
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Credits</label>
                    <input
                      type="number"
                      placeholder="e.g. 4"
                      min={1}
                      max={10}
                      value={subject.credits}
                      onChange={(e) => updateSubject(subject.id, { credits: e.target.value })}
                      className="w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Mode toggle */}
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Input Mode</label>
                    <div className="flex rounded-lg overflow-hidden border border-border">
                      <button
                        onClick={() => updateSubject(subject.id, { inputMode: "marks" })}
                        className={cn(
                          "flex-1 py-2 text-xs font-medium transition-all",
                          subject.inputMode === "marks"
                            ? "bg-violet-brand text-white"
                            : "bg-muted/20 text-muted-foreground hover:bg-muted/40"
                        )}
                      >
                        Marks
                      </button>
                      <button
                        onClick={() => updateSubject(subject.id, { inputMode: "grade" })}
                        className={cn(
                          "flex-1 py-2 text-xs font-medium transition-all",
                          subject.inputMode === "grade"
                            ? "bg-violet-brand text-white"
                            : "bg-muted/20 text-muted-foreground hover:bg-muted/40"
                        )}
                      >
                        Grade
                      </button>
                    </div>
                  </div>

                  {/* Marks or Grade */}
                  {subject.inputMode === "marks" ? (
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Marks (0–100)</label>
                      <input
                        type="number"
                        placeholder="e.g. 85"
                        min={0}
                        max={100}
                        value={subject.marks}
                        onChange={(e) => updateSubject(subject.id, { marks: e.target.value, inputMode: "marks" })}
                        className="w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Grade</label>
                      <select
                        value={subject.grade}
                        onChange={(e) => updateSubject(subject.id, { grade: e.target.value as Grade, inputMode: "grade", marks: "" })}
                        className="w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
                      >
                        <option value="">Select grade</option>
                        {gradeOptions.map((g) => (
                          <option key={g.grade} value={g.grade}>
                            {g.grade} ({g.points})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Result badge */}
                  <div className="flex flex-col justify-end">
                    <label className="text-xs text-muted-foreground mb-1 block">Grade / Points</label>
                    <div className={cn(
                      "h-9 flex items-center justify-center rounded-lg text-sm font-bold",
                      subject.grade ? gradeColor[subject.grade as Grade] : "bg-muted/20 text-muted-foreground"
                    )}>
                      {subject.grade ? `${subject.grade} (${subject.gradePoints})` : "—"}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add Subject Button */}
      <button
        onClick={addSubject}
        className="w-full py-3 rounded-xl border-2 border-dashed border-violet-brand/30 hover:border-violet-brand/60 text-violet-brand/60 hover:text-violet-brand text-sm font-medium transition-all hover:bg-violet-brand/5 flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add Subject
      </button>

      {/* Result */}
      <AnimatePresence mode="wait">
        {sgpa !== null && validSubjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <GlassCard glow className="text-center py-8">
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2 font-medium">Your SGPA</p>
              <motion.div
                className="text-7xl font-extrabold gradient-text mb-3"
                key={sgpa.toFixed(2)}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {sgpa.toFixed(2)}
              </motion.div>
              <p className="text-muted-foreground text-sm mb-6">
                Based on {validSubjects.length} subject{validSubjects.length !== 1 ? "s" : ""} · {totalCredits} total credits
              </p>
              <div className="flex gap-3 justify-center">
                <GradientButton onClick={copyResult} variant="outline" size="sm" className="gap-2">
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy SGPA"}
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
