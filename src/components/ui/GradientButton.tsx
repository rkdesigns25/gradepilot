"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { memo, ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export const GradientButton = memo(function GradientButton({
  children,
  onClick,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
}: GradientButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "relative font-semibold rounded-xl transition-all overflow-hidden",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-brand focus-visible:ring-offset-2",
        disabled && "opacity-50 cursor-not-allowed",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" && [
          "bg-gradient-to-r from-violet-brand to-violet-light text-white",
          "shadow-lg shadow-violet-brand/25",
          "hover:shadow-violet-brand/50 hover:shadow-xl",
        ],
        variant === "outline" && [
          "border border-violet-brand/50 text-violet-brand",
          "hover:bg-violet-brand/10",
          "dark:border-violet-brand/40",
        ],
        variant === "ghost" && [
          "text-foreground/70",
          "hover:bg-white/10 hover:text-foreground",
        ],
        className
      )}
    >
      {children}
    </motion.button>
  )
})
