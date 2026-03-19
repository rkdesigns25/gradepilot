"use client"

import { useState, useEffect, useCallback } from "react"
import { type GradingSystemId, detectSystemFromLocale } from "@/lib/grading-systems"

const STORAGE_KEY = "gradepilot_grading_system"

/** Returns [systemId, setSystemId].
 *  Auto-detects locale on first visit, persists manual overrides in localStorage. */
export function useGradingSystem(forceSystem?: GradingSystemId) {
  const [systemId, setSystemIdState] = useState<GradingSystemId>("india")

  useEffect(() => {
    if (forceSystem) {
      // Externally forced (e.g., from a global landing page)
      setSystemIdState(forceSystem)
      return
    }
    // Try localStorage first, else detect from locale
    const stored = localStorage.getItem(STORAGE_KEY) as GradingSystemId | null
    if (stored && ["india", "usa", "uk", "canada", "australia"].includes(stored)) {
      setSystemIdState(stored)
    } else {
      setSystemIdState(detectSystemFromLocale())
    }
  }, [forceSystem])

  const setSystemId = useCallback((id: GradingSystemId) => {
    setSystemIdState(id)
    if (!forceSystem) {
      localStorage.setItem(STORAGE_KEY, id)
    }
  }, [forceSystem])

  return [systemId, setSystemId] as const
}
