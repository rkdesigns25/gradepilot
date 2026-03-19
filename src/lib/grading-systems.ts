// ============================================================================
// GradePilot — Universal Grading Systems Library
// Supports: India (10-pt CGPA), USA (4.0 GPA), UK (Classification),
//           Canada (4.0 GPA), Australia (WAM + 7.0 GPA)
// ============================================================================

export type GradingSystemId = "india" | "usa" | "uk" | "canada" | "australia"

export interface GradeOption {
  label: string      // e.g. "A+" or "First Class"
  points: number     // grade points on the system's scale
  minMarks?: number  // minimum marks % to achieve this grade
  description?: string
}

export interface GradingSystem {
  id: GradingSystemId
  name: string
  country: string
  flag: string
  scale: number        // max GPA value (e.g. 10, 4.0, 7.0)
  scaleLabel: string   // e.g. "10 Point" or "4.0 GPA"
  creditLabel: string  // e.g. "Credits" or "Units"
  resultLabel: string  // e.g. "SGPA", "GPA", "WAM"
  passingPoints: number // minimum passing grade points
  grades: GradeOption[]
  marksToGrade: (marks: number) => GradeOption
  toPercentage: (gpa: number) => number  // convert GPA to %
  toClassification: (gpa: number) => string // e.g. "First Class"
}

// ─── INDIA — 10 Point SGPA/CGPA (UGC CBCS) ─────────────────────────────

const INDIA_GRADES: GradeOption[] = [
  { label: "O",  points: 10, minMarks: 90, description: "Outstanding" },
  { label: "A+", points: 9,  minMarks: 80, description: "Excellent" },
  { label: "A",  points: 8,  minMarks: 70, description: "Very Good" },
  { label: "B+", points: 7,  minMarks: 60, description: "Good" },
  { label: "B",  points: 6,  minMarks: 55, description: "Above Average" },
  { label: "C",  points: 5,  minMarks: 50, description: "Average" },
  { label: "P",  points: 4,  minMarks: 40, description: "Pass" },
  { label: "F",  points: 0,  minMarks: 0,  description: "Fail" },
]

const indiaMarksToGrade = (marks: number): GradeOption => {
  if (marks >= 90) return INDIA_GRADES[0]
  if (marks >= 80) return INDIA_GRADES[1]
  if (marks >= 70) return INDIA_GRADES[2]
  if (marks >= 60) return INDIA_GRADES[3]
  if (marks >= 55) return INDIA_GRADES[4]
  if (marks >= 50) return INDIA_GRADES[5]
  if (marks >= 40) return INDIA_GRADES[6]
  return INDIA_GRADES[7]
}

// ─── USA — 4.0 GPA Scale ────────────────────────────────────────────────

const USA_GRADES: GradeOption[] = [
  { label: "A",  points: 4.0, minMarks: 93, description: "Excellent" },
  { label: "A-", points: 3.7, minMarks: 90, description: "Excellent" },
  { label: "B+", points: 3.3, minMarks: 87, description: "Good" },
  { label: "B",  points: 3.0, minMarks: 83, description: "Good" },
  { label: "B-", points: 2.7, minMarks: 80, description: "Good" },
  { label: "C+", points: 2.3, minMarks: 77, description: "Satisfactory" },
  { label: "C",  points: 2.0, minMarks: 73, description: "Satisfactory" },
  { label: "C-", points: 1.7, minMarks: 70, description: "Satisfactory" },
  { label: "D+", points: 1.3, minMarks: 67, description: "Poor" },
  { label: "D",  points: 1.0, minMarks: 60, description: "Poor" },
  { label: "F",  points: 0.0, minMarks: 0,  description: "Fail" },
]

const usaMarksToGrade = (marks: number): GradeOption => {
  if (marks >= 93) return USA_GRADES[0]
  if (marks >= 90) return USA_GRADES[1]
  if (marks >= 87) return USA_GRADES[2]
  if (marks >= 83) return USA_GRADES[3]
  if (marks >= 80) return USA_GRADES[4]
  if (marks >= 77) return USA_GRADES[5]
  if (marks >= 73) return USA_GRADES[6]
  if (marks >= 70) return USA_GRADES[7]
  if (marks >= 67) return USA_GRADES[8]
  if (marks >= 60) return USA_GRADES[9]
  return USA_GRADES[10]
}

// ─── UK — Honours Classification ────────────────────────────────────────

const UK_GRADES: GradeOption[] = [
  { label: "First",     points: 4.0, minMarks: 70, description: "First Class Honours" },
  { label: "2:1",       points: 3.0, minMarks: 60, description: "Upper Second Class" },
  { label: "2:2",       points: 2.0, minMarks: 50, description: "Lower Second Class" },
  { label: "Third",     points: 1.0, minMarks: 40, description: "Third Class Honours" },
  { label: "Pass",      points: 0.5, minMarks: 35, description: "Pass (Ordinary)" },
  { label: "Fail",      points: 0.0, minMarks: 0,  description: "Fail" },
]

const ukMarksToGrade = (marks: number): GradeOption => {
  if (marks >= 70) return UK_GRADES[0]
  if (marks >= 60) return UK_GRADES[1]
  if (marks >= 50) return UK_GRADES[2]
  if (marks >= 40) return UK_GRADES[3]
  if (marks >= 35) return UK_GRADES[4]
  return UK_GRADES[5]
}

// ─── CANADA — 4.0 GPA Scale ─────────────────────────────────────────────

const CANADA_GRADES: GradeOption[] = [
  { label: "A+", points: 4.0, minMarks: 95, description: "Exceptional" },
  { label: "A",  points: 4.0, minMarks: 87, description: "Excellent" },
  { label: "A-", points: 3.7, minMarks: 80, description: "Very Good" },
  { label: "B+", points: 3.3, minMarks: 77, description: "Good" },
  { label: "B",  points: 3.0, minMarks: 73, description: "Good" },
  { label: "B-", points: 2.7, minMarks: 70, description: "Satisfactory" },
  { label: "C+", points: 2.3, minMarks: 67, description: "Satisfactory" },
  { label: "C",  points: 2.0, minMarks: 63, description: "Satisfactory" },
  { label: "C-", points: 1.7, minMarks: 60, description: "Marginal" },
  { label: "D",  points: 1.0, minMarks: 50, description: "Inadequate" },
  { label: "F",  points: 0.0, minMarks: 0,  description: "Fail" },
]

const canadaMarksToGrade = (marks: number): GradeOption => {
  if (marks >= 95) return CANADA_GRADES[0]
  if (marks >= 87) return CANADA_GRADES[1]
  if (marks >= 80) return CANADA_GRADES[2]
  if (marks >= 77) return CANADA_GRADES[3]
  if (marks >= 73) return CANADA_GRADES[4]
  if (marks >= 70) return CANADA_GRADES[5]
  if (marks >= 67) return CANADA_GRADES[6]
  if (marks >= 63) return CANADA_GRADES[7]
  if (marks >= 60) return CANADA_GRADES[8]
  if (marks >= 50) return CANADA_GRADES[9]
  return CANADA_GRADES[10]
}

// ─── AUSTRALIA — 7.0 GPA Scale (also outputs WAM %) ─────────────────────

const AUSTRALIA_GRADES: GradeOption[] = [
  { label: "HD", points: 7.0, minMarks: 85, description: "High Distinction" },
  { label: "D",  points: 6.0, minMarks: 75, description: "Distinction" },
  { label: "CR", points: 5.0, minMarks: 65, description: "Credit" },
  { label: "P",  points: 4.0, minMarks: 50, description: "Pass" },
  { label: "F",  points: 0.0, minMarks: 0,  description: "Fail" },
]

const australiaMarksToGrade = (marks: number): GradeOption => {
  if (marks >= 85) return AUSTRALIA_GRADES[0]
  if (marks >= 75) return AUSTRALIA_GRADES[1]
  if (marks >= 65) return AUSTRALIA_GRADES[2]
  if (marks >= 50) return AUSTRALIA_GRADES[3]
  return AUSTRALIA_GRADES[4]
}

// ─── Classification helpers ──────────────────────────────────────────────

function indiaClassification(gpa: number): string {
  if (gpa >= 9.0) return "Outstanding (O)"
  if (gpa >= 8.0) return "First Class with Distinction"
  if (gpa >= 6.5) return "First Class"
  if (gpa >= 5.5) return "Second Class"
  if (gpa >= 4.0) return "Pass"
  return "Fail"
}

function usaClassification(gpa: number): string {
  if (gpa >= 3.7) return "Summa Cum Laude"
  if (gpa >= 3.3) return "Magna Cum Laude"
  if (gpa >= 3.0) return "Cum Laude"
  if (gpa >= 2.0) return "Good Standing"
  return "Academic Probation"
}

function ukClassification(gpa: number): string {
  if (gpa >= 3.5) return "First Class Honours"
  if (gpa >= 2.5) return "Upper Second (2:1)"
  if (gpa >= 1.5) return "Lower Second (2:2)"
  if (gpa >= 0.7) return "Third Class"
  if (gpa > 0)    return "Pass"
  return "Fail"
}

function australiaClassification(gpa: number): string {
  if (gpa >= 6.5) return "High Distinction Average"
  if (gpa >= 5.5) return "Distinction Average"
  if (gpa >= 4.5) return "Credit Average"
  if (gpa >= 4.0) return "Pass"
  return "Fail"
}

// ─── Exported systems registry ───────────────────────────────────────────

export const GRADING_SYSTEMS: Record<GradingSystemId, GradingSystem> = {
  india: {
    id: "india",
    name: "India / CBCS",
    country: "India",
    flag: "🇮🇳",
    scale: 10,
    scaleLabel: "10 Point",
    creditLabel: "Credits",
    resultLabel: "SGPA",
    passingPoints: 4,
    grades: INDIA_GRADES,
    marksToGrade: indiaMarksToGrade,
    toPercentage: (gpa) => parseFloat(((gpa - 0.75) * 10).toFixed(2)),
    toClassification: indiaClassification,
  },
  usa: {
    id: "usa",
    name: "USA / 4.0 GPA",
    country: "USA",
    flag: "🇺🇸",
    scale: 4.0,
    scaleLabel: "4.0 GPA",
    creditLabel: "Credits",
    resultLabel: "GPA",
    passingPoints: 1.0,
    grades: USA_GRADES,
    marksToGrade: usaMarksToGrade,
    toPercentage: (gpa) => parseFloat((gpa * 25).toFixed(2)),
    toClassification: usaClassification,
  },
  uk: {
    id: "uk",
    name: "UK / Honours",
    country: "UK",
    flag: "🇬🇧",
    scale: 4.0,
    scaleLabel: "Classification",
    creditLabel: "Credits",
    resultLabel: "GPA",
    passingPoints: 0.5,
    grades: UK_GRADES,
    marksToGrade: ukMarksToGrade,
    toPercentage: (gpa) => parseFloat((gpa * 25).toFixed(2)),
    toClassification: ukClassification,
  },
  canada: {
    id: "canada",
    name: "Canada / 4.0 GPA",
    country: "Canada",
    flag: "🇨🇦",
    scale: 4.0,
    scaleLabel: "4.0 GPA",
    creditLabel: "Units",
    resultLabel: "GPA",
    passingPoints: 1.0,
    grades: CANADA_GRADES,
    marksToGrade: canadaMarksToGrade,
    toPercentage: (gpa) => parseFloat((gpa * 25).toFixed(2)),
    toClassification: usaClassification, // similar classification system
  },
  australia: {
    id: "australia",
    name: "Australia / WAM",
    country: "Australia",
    flag: "🇦🇺",
    scale: 7.0,
    scaleLabel: "7.0 GPA",
    creditLabel: "Units",
    resultLabel: "GPA",
    passingPoints: 4.0,
    grades: AUSTRALIA_GRADES,
    marksToGrade: australiaMarksToGrade,
    toPercentage: (gpa) => parseFloat(((gpa / 7) * 100).toFixed(2)),
    toClassification: australiaClassification,
  },
}

/** Detect grading system from browser locale. Fallback: India */
export function detectSystemFromLocale(): GradingSystemId {
  if (typeof navigator === "undefined") return "india"
  const locale = navigator.language || ""
  if (locale.startsWith("en-US")) return "usa"
  if (locale.startsWith("en-GB")) return "uk"
  if (locale.startsWith("en-CA")) return "canada"
  if (locale.startsWith("en-AU")) return "australia"
  return "india" // default
}

export function getSystem(id: GradingSystemId): GradingSystem {
  return GRADING_SYSTEMS[id]
}
