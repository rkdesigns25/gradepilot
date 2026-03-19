import type { Metadata } from "next"
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "@/components/seo/JsonLd"
import { GlobalGPAPage } from "@/components/seo/GlobalGPAPage"

export const metadata: Metadata = {
  title: "GPA Calculator Canada — Free 4.0 GPA Calculator | GradePilot",
  description: "Calculate your Canadian university GPA on the 4.0 scale. Supports A+, A, A-, B+, B grade conversions with weighted credit calculation.",
  keywords: ["gpa calculator canada", "canadian gpa calculator", "university gpa canada", "4.0 gpa canada", "canadian grade calculator"],
  openGraph: {
    title: "GPA Calculator Canada — 4.0 Scale | GradePilot",
    description: "Free Canadian 4.0 GPA calculator for university students.",
    type: "website",
  },
}

const RELATED = [
  { label: "GPA Calculator USA", href: "/gpa-calculator-usa", flag: "🇺🇸" },
  { label: "UK Grade Calculator", href: "/uk-grade-calculator", flag: "🇬🇧" },
  { label: "Australia GPA Calculator", href: "/australia-gpa-calculator", flag: "🇦🇺" },
  { label: "India SGPA Calculator", href: "/sgpa", flag: "🇮🇳" },
]

export default function CanadaPage() {
  return (
    <>
      <FAQSchema faqs={[
        { question: "What GPA scale do Canadian universities use?", answer: "Most Canadian universities use a 4.0 GPA scale, similar to the US system. However, the exact grade-to-percentage conversion varies slightly between institutions and provinces." },
        { question: "What is a good GPA in Canada?", answer: "A GPA of 3.0+ (73%+) is considered good in Canada. For graduate school admission, most programs require 3.0-3.5. A 3.7+ is considered exceptional." },
        { question: "Is an A+ worth 4.0 or more in Canada?", answer: "At most Canadian universities, both A and A+ are worth 4.0 GPA points. Some schools assign A+ a slightly higher value of 4.0 while distinguishing it from A." },
        { question: "How do I convert Canadian GPA to US GPA?", answer: "Canadian and US GPA scales are very similar. A 3.5 Canadian GPA is roughly equivalent to a 3.5 US GPA. Minor differences exist in the grade-to-percentage mapping." },
        { question: "What GPA do I need for Canadian graduate school?", answer: "Most Canadian graduate programs require a minimum GPA of 3.0 (B average) in the last two years of undergraduate study. Competitive programs may require 3.5+." },
      ]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "GPA Calculator Canada", href: "/gpa-calculator-canada" }]} />
      <SoftwareApplicationSchema name="GradePilot Canada GPA Calculator" description="Free Canadian 4.0 GPA calculator" applicationCategory="EducationalApplication" />

      <GlobalGPAPage
        systemId="canada"
        slug="gpa-calculator-canada"
        breadcrumbLabel="GPA Calculator Canada"
        h1="GPA Calculator Canada — 4.0 Scale"
        intro="Calculate your Canadian university GPA using the standard 4.0 scale. Designed for students at universities across Canada — from UBC and UofT to McGill and Waterloo. Enter your course marks and credit units to get your GPA instantly."
        howItWorks={[
          "Enter each course with its credit units (typically 3 or 6 units per course in Canada).",
          "Enter your percentage mark (0–100) or select your letter grade directly.",
          "The calculator converts marks: A+=4.0 (95%+), A=4.0 (87%+), A-=3.7 (80%+), B+=3.3 (77%+)...",
          "Your GPA is computed using the weighted average: Σ(Credits × Points) ÷ Σ Credits.",
          "View your GPA, percentage equivalent, and academic standing.",
        ]}
        formula="GPA = Σ(Credit Units × Grade Points) ÷ Σ Credit Units"
        formulaNote="Canadian GPA uses the same weighted average formula as the US system. The primary difference lies in the grade-to-percentage conversion thresholds, which can vary slightly between Canadian institutions and provinces."
        example={`Example — Canadian GPA Calculation:

Course 1: MATH 101 — 3 units, 91% → A- (3.7 pts)
Course 2: ENG 200 — 3 units, 82% → A- (3.7 pts)
Course 3: HIST 150 — 6 units, 74% → B+ (3.3 pts)
Course 4: CS 110 — 3 units, 88% → A (4.0 pts)

Calculation:
Weighted sum = (3×3.7) + (3×3.7) + (6×3.3) + (3×4.0)
            = 11.1 + 11.1 + 19.8 + 12.0 = 54.0
Total credits = 3 + 3 + 6 + 3 = 15

GPA = 54.0 ÷ 15 = 3.60 — Very Good Standing`}
        faqs={[
          { question: "What GPA scale do Canadian universities use?", answer: "Most Canadian universities use a 4.0 GPA scale, similar to the US system. The exact grade-to-percentage conversion varies slightly between institutions and provinces." },
          { question: "What is a good GPA in Canada?", answer: "A GPA of 3.0+ (73%+) is considered good in Canada. For graduate school, most programs require 3.0-3.5. A 3.7+ is considered exceptional." },
          { question: "How do I convert Canadian GPA to US GPA?", answer: "Canadian and US GPA scales are very similar. A 3.5 Canadian GPA is roughly equivalent to a 3.5 US GPA. Minor differences exist in the grade-to-percentage mapping." },
          { question: "What GPA is needed for Canadian graduate school?", answer: "Most Canadian graduate programs require a minimum GPA of 3.0 in the last two years of undergraduate study. Competitive programs may require 3.5+." },
          { question: "Does every Canadian university use the same grading scale?", answer: "No, there are some provincial and institutional variations. For example, some Quebec universities use a 4.0 scale while others use a percentage system directly." },
        ]}
        relatedPages={RELATED}
      />
    </>
  )
}
