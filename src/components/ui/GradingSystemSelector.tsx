"use client"

import { memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { GRADING_SYSTEMS, type GradingSystemId } from "@/lib/grading-systems"
import { cn } from "@/lib/utils"

interface GradingSystemSelectorProps {
  value: GradingSystemId
  onChange: (id: GradingSystemId) => void
  className?: string
}

/** Minimal, glassmorphism-styled grading system selector.
 *  Matches existing GradePilot design system pixel-perfectly. */
export const GradingSystemSelector = memo(function GradingSystemSelector({
  value,
  onChange,
  className,
}: GradingSystemSelectorProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const systems = Object.values(GRADING_SYSTEMS)
  const selected = GRADING_SYSTEMS[value]

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium",
          "border transition-all duration-200 select-none",
          "border-border/60 bg-muted/30 hover:bg-muted/60 hover:border-violet-brand/40",
          "dark:bg-muted/20 dark:hover:bg-muted/40",
          "focus:outline-none focus:ring-2 focus:ring-violet-brand/30"
        )}
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="text-foreground/80">{selected.scaleLabel}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.18 }}
          className="text-muted-foreground"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute z-50 right-0 mt-1.5 min-w-[200px] rounded-xl overflow-hidden",
              "border border-border/60 shadow-xl shadow-black/10",
              "bg-card/95 backdrop-blur-xl",
              "dark:bg-card/90 dark:shadow-black/30"
            )}
          >
            {systems.map((sys) => (
              <li
                key={sys.id}
                role="option"
                aria-selected={sys.id === value}
                onClick={() => { onChange(sys.id); setOpen(false) }}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm transition-colors",
                  "hover:bg-violet-brand/10 hover:text-violet-brand",
                  sys.id === value
                    ? "bg-violet-brand/10 text-violet-brand font-semibold"
                    : "text-foreground/80"
                )}
              >
                <span className="text-base">{sys.flag}</span>
                <div className="flex-1">
                  <div className="font-medium text-xs leading-tight">{sys.name}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{sys.scaleLabel} Scale</div>
                </div>
                {sys.id === value && (
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-brand shrink-0" />
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
})
