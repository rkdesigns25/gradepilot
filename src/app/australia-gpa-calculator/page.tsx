import type { Metadata } from "next"
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "@/components/seo/JsonLd"
import { GlobalGPAPage } from "@/components/seo/GlobalGPAPage"

export const metadata: Metadata = {
  title: "Australia GPA Calculator — WAM & 7.0 GPA Scale | GradePilot",
  description: "Calculate your Australian university GPA and Weighted Average Mark (WAM). Supports HD, D, CR, Pass grade system. Free and instant.",
  keywords: ["australia gpa calculator", "wam calculator australia", "australian university gpa", "high distinction calculator", "uwa gpa calculator"],
  openGraph: {
    title: "Australia GPA Calculator — WAM & 7.0 Scale | GradePilot",
    description: "Free Australian WAM and 7.0 GPA calculator for university students.",
    type: "website",
  },
}

const RELATED = [
  { label: "GPA Calculator USA", href: "/gpa-calculator-usa", flag: "🇺🇸" },
  { label: "UK Grade Calculator", href: "/uk-grade-calculator", flag: "🇬🇧" },
  { label: "GPA Calculator Canada", href: "/gpa-calculator-canada", flag: "🇨🇦" },
  { label: "India SGPA Calculator", href: "/sgpa", flag: "🇮🇳" },
]

export default function AustraliaPage() {
  return (
    <>
      <FAQSchema faqs={[
        { question: "What is WAM in Australian universities?", answer: "WAM stands for Weighted Average Mark. It is the standard measure of academic performance in Australian universities, calculated as the weighted average of all unit marks, where each unit is weighted by its credit points." },
        { question: "What is the 7-point grading scale in Australia?", answer: "Many Australian universities (ANU, USyd, UQ, etc.) use a 7-point GPA scale: HD=7, D=6, CR=5, Pass=4, Fail=0. This is distinct from the US 4.0 scale." },
        { question: "What does HD mean in Australia?", answer: "HD stands for High Distinction. It is awarded for marks of 85% or above and carries the highest grade point value of 7 on the Australian grading scale." },
        { question: "What is a good WAM in Australia?", answer: "A WAM above 75 is generally considered a Distinction average, while above 85 is a High Distinction average. For honours entry and graduate programs, a WAM of 70-75+ is typically required." },
        { question: "Is a 6.0 GPA good in Australia?", answer: "On the 7-point scale, a 6.0 GPA corresponds to a Distinction average, which is excellent. It demonstrates consistently strong academic performance above 75%." },
      ]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Australia GPA Calculator", href: "/australia-gpa-calculator" }]} />
      <SoftwareApplicationSchema name="GradePilot Australia GPA Calculator" description="Free Australian WAM and 7.0 GPA calculator" applicationCategory="EducationalApplication" />

      <GlobalGPAPage
        systemId="australia"
        slug="australia-gpa-calculator"
        breadcrumbLabel="Australia GPA Calculator"
        h1="Australia GPA Calculator — WAM & 7.0 Scale"
        intro="Calculate your Australian university GPA on the 7.0 scale with Weighted Average Mark (WAM) support. Designed for students at ANU, USYD, UNSW, UQ, Monash, and all major Australian universities. Enter your unit marks and credit points to compute your GPA and WAM instantly."
        howItWorks={[
          "Enter each unit with its credit points (typically 6 credit points per unit in Australia).",
          "Enter your percentage mark (0–100) for each unit.",
          "The calculator converts marks to the 7-point scale: HD=7 (85%+), D=6 (75%+), CR=5 (65%+), Pass=4 (50%+).",
          "Your GPA is computed using the weighted formula: Σ(Credits × Grade Points) ÷ Σ Credits.",
          "Your WAM percentage is also displayed for scholarship and honours applications.",
        ]}
        formula="GPA = Σ(Credit Points × Grade Points) ÷ Σ Credit Points"
        formulaNote="Australian universities use a 7-point GPA scale unlike the US 4.0 system. Grade points: HD=7, D=6, CR=5, Pass=4, Fail=0. The WAM is the direct percentage-weighted average and may differ from GPA calculation at some institutions."
        example={`Example — Australian GPA Calculation (7.0 Scale):

Unit 1: Advanced Mathematics — 6 credits, 88% → HD (7 pts)
Unit 2: Statistics — 6 credits, 76% → D (6 pts)
Unit 3: Programming — 6 credits, 67% → CR (5 pts)
Unit 4: Dissertation — 12 credits, 82% → D (6 pts)

Calculation:
Weighted sum = (6×7) + (6×6) + (6×5) + (12×6)
            = 42 + 36 + 30 + 72 = 180
Total credits = 6 + 6 + 6 + 12 = 30

GPA = 180 ÷ 30 = 6.00 — Distinction Average
WAM ≈ 79% → Distinction`}
        faqs={[
          { question: "What is WAM in Australian universities?", answer: "WAM stands for Weighted Average Mark. It is calculated as the weighted average of all unit marks, where each unit is weighted by its credit points." },
          { question: "What is the 7-point grading scale in Australia?", answer: "Many Australian universities use a 7-point GPA scale: HD=7, D=6, CR=5, Pass=4, Fail=0. This is distinct from the US 4.0 scale." },
          { question: "What does HD mean in Australia?", answer: "HD stands for High Distinction, awarded for marks of 85% or above, carrying the highest grade point value of 7 on the Australian scale." },
          { question: "What is a good WAM in Australia?", answer: "A WAM above 75 is generally considered a Distinction average. For honours entry and graduate programs, a WAM of 70-75+ is typically required." },
          { question: "Is Australian GPA comparable to US GPA?", answer: "Not directly. Australia uses a 7-point scale while the US uses 4.0. An Australian GPA of 6.0/7.0 (Distinction) is roughly equivalent to a US GPA of 3.5/4.0." },
        ]}
        relatedPages={RELATED}
      />
    </>
  )
}
