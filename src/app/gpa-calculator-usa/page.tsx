import type { Metadata } from "next"
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "@/components/seo/JsonLd"
import { GlobalGPAPage } from "@/components/seo/GlobalGPAPage"

export const metadata: Metadata = {
  title: "GPA Calculator USA — Free 4.0 Scale GPA Calculator | GradePilot",
  description: "Calculate your GPA on the US 4.0 scale. Supports A, A-, B+, B grades with weighted credit calculation. Free, instant, no sign-up required.",
  keywords: ["gpa calculator usa", "4.0 gpa calculator", "us gpa calculator", "college gpa calculator", "american gpa scale"],
  openGraph: {
    title: "GPA Calculator USA — 4.0 Scale | GradePilot",
    description: "Free US 4.0 GPA calculator for college and university students.",
    type: "website",
  },
}

const RELATED = [
  { label: "GPA Calculator Canada", href: "/gpa-calculator-canada", flag: "🇨🇦" },
  { label: "UK Grade Calculator", href: "/uk-grade-calculator", flag: "🇬🇧" },
  { label: "Australia GPA Calculator", href: "/australia-gpa-calculator", flag: "🇦🇺" },
  { label: "India SGPA Calculator", href: "/sgpa", flag: "🇮🇳" },
]

export default function USAPage() {
  return (
    <>
      <FAQSchema faqs={[
        { question: "What is a 4.0 GPA?", answer: "A 4.0 GPA is the highest achievable grade point average on the standard US 4.0 scale, equivalent to straight A grades (93%+) in all courses." },
        { question: "What GPA do I need for graduate school?", answer: "Most competitive graduate programs in the US require a minimum GPA of 3.0, with top schools often expecting 3.5+." },
        { question: "Is a 3.5 GPA good?", answer: "Yes, a 3.5 GPA (87-89% average) is considered very strong in the US and qualifies for Magna Cum Laude distinction at many universities." },
        { question: "How is GPA calculated in the US?", answer: "GPA = Σ(Credit Hours × Grade Points) ÷ Σ(Credit Hours). Each letter grade converts to points: A=4.0, A-=3.7, B+=3.3, B=3.0, etc." },
        { question: "What is Summa Cum Laude?", answer: "Summa Cum Laude ('with highest honor') is awarded to students with a GPA of 3.7+ at most US universities." },
      ]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "GPA Calculator USA", href: "/gpa-calculator-usa" }]} />
      <SoftwareApplicationSchema name="GradePilot USA GPA Calculator" description="Free US 4.0 GPA calculator" applicationCategory="EducationalApplication" />

      <GlobalGPAPage
        systemId="usa"
        slug="gpa-calculator-usa"
        breadcrumbLabel="GPA Calculator USA"
        h1="GPA Calculator USA — 4.0 Scale"
        intro="Calculate your US college GPA using the standard 4.0 scale. Supports all letter grades (A through F with +/- variants), credit-weighted calculation, and shows your cumulative GPA with academic standing. Free and instant — no login required."
        howItWorks={[
          "Enter each course with its credit hours (typically 3-4 per class).",
          "Enter your percentage marks (0–100) or select your letter grade directly.",
          "The calculator converts marks to GPA points: A=4.0, A-=3.7, B+=3.3, B=3.0...",
          "Your GPA is computed using the weighted formula: Σ(Credits × Points) ÷ Σ Credits.",
          "See your GPA, academic standing (Summa/Magna/Cum Laude), and percentage equivalent.",
        ]}
        formula="GPA = Σ(Credit Hours × Grade Points) ÷ Σ Credit Hours"
        formulaNote="Each course's credit hours are multiplied by the grade points earned. The sum is divided by total credit hours attempted. This weighted average ensures courses with more credits have greater impact on your overall GPA."
        example={`Example — US 4.0 GPA Calculation:

Course 1: Calculus II — 4 credits, 94% → A (4.0 pts)
Course 2: English Comp — 3 credits, 88% → B+ (3.3 pts)
Course 3: History 101 — 3 credits, 82% → B (3.0 pts)
Course 4: CS 101 — 4 credits, 91% → A- (3.7 pts)

Calculation:
Weighted sum = (4×4.0) + (3×3.3) + (3×3.0) + (4×3.7)
            = 16.0 + 9.9 + 9.0 + 14.8 = 49.7
Total credits = 4 + 3 + 3 + 4 = 14

GPA = 49.7 ÷ 14 = 3.55 — Magna Cum Laude`}
        faqs={[
          { question: "What is a 4.0 GPA?", answer: "A 4.0 GPA is the highest achievable grade point average on the standard US 4.0 scale, equivalent to straight A grades (93%+) in all courses." },
          { question: "What GPA do I need for graduate school?", answer: "Most competitive graduate programs in the US require a minimum GPA of 3.0, with top schools often expecting 3.5+." },
          { question: "Is a 3.5 GPA good?", answer: "Yes, a 3.5 GPA is considered very strong in the US and qualifies for Magna Cum Laude distinction at many universities." },
          { question: "How is GPA calculated with plus and minus grades?", answer: "Grade modifiers shift points by 0.3: A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, etc. Courses with more credit hours have a proportionally larger impact on cumulative GPA." },
          { question: "What is academic probation in the US?", answer: "Students with a GPA below 2.0 are typically placed on academic probation. They must improve their GPA within a specified period or risk suspension." },
        ]}
        relatedPages={RELATED}
      />
    </>
  )
}
