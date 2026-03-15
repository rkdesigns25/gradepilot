"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CircularProgressProps {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  className?: string
  label?: string
  sublabel?: string
  color?: string
}

export function CircularProgress({
  value,
  max = 100,
  size = 180,
  strokeWidth = 12,
  className,
  label,
  sublabel,
  color = "#7C5CFF",
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const getColor = () => {
    if (percentage >= 75) return "#22c55e"
    if (percentage >= 60) return "#f59e0b"
    return "#ef4444"
  }

  const progressColor = label === undefined ? color : getColor()

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/50"
          opacity={0.3}
        />
        {/* Progress ring */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.span
          className="text-3xl font-bold"
          style={{ color: progressColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {percentage.toFixed(1)}%
        </motion.span>
        {sublabel && (
          <span className="text-xs text-muted-foreground mt-1">{sublabel}</span>
        )}
      </div>
    </div>
  )
}
