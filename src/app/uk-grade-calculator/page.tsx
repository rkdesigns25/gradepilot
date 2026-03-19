import type { Metadata } from "next"
import { FAQSchema, BreadcrumbSchema, SoftwareApplicationSchema } from "@/components/seo/JsonLd"
import { GlobalGPAPage } from "@/components/seo/GlobalGPAPage"

export const metadata: Metadata = {
  title: "UK Grade Calculator — Honours Classification | GradePilot",
  description: "Calculate your UK university degree classification. Convert marks to First Class, 2:1, 2:2, Third Class honours. Free and instant.",
  keywords: ["uk grade calculator", "uk degree classification", "first class honours calculator", "2:1 grade calculator", "uk university gpa"],
  openGraph: {
    title: "UK Grade Calculator — Honours Classification | GradePilot",
    description: "Free UK degree classification calculator for university students.",
    type: "website",
  },
}

const RELATED = [
  { label: "GPA Calculator USA", href: "/gpa-calculator-usa", flag: "🇺🇸" },
  { label: "GPA Calculator Canada", href: "/gpa-calculator-canada", flag: "🇨🇦" },
  { label: "Australia GPA Calculator", href: "/australia-gpa-calculator", flag: "🇦🇺" },
  { label: "India SGPA Calculator", href: "/sgpa", flag: "🇮🇳" },
]

export default function UKPage() {
  return (
    <>
      <FAQSchema faqs={[
        { question: "What is First Class Honours?", answer: "First Class Honours is awarded to students scoring 70% or above overall. It is the highest degree classification in the UK university system." },
        { question: "What is a 2:1 degree?", answer: "A 2:1 (Upper Second Class Honours) requires marks between 60-69%. It is the most common degree award and the standard requirement for most graduate employers and postgraduate programs." },
        { question: "How is a UK degree classified?", answer: "UK honours degrees are classified as: First (70%+), 2:1 (60–69%), 2:2 (50–59%), Third (40–49%), and Pass (35–39%). The classification is based on weighted average marks across all modules." },
        { question: "Does a 2:2 degree matter?", answer: "A 2:2 degree can still lead to a successful career. While some graduate schemes require a 2:1, many employers consider the whole candidate — including experience and skills." },
        { question: "What GPA is equivalent to a UK First?", answer: "A UK First Class Honours (70%+) is roughly equivalent to a 3.7-4.0 GPA on the US 4.0 scale." },
      ]} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "UK Grade Calculator", href: "/uk-grade-calculator" }]} />
      <SoftwareApplicationSchema name="GradePilot UK Grade Calculator" description="Free UK honours degree classification calculator" applicationCategory="EducationalApplication" />

      <GlobalGPAPage
        systemId="uk"
        slug="uk-grade-calculator"
        breadcrumbLabel="UK Grade Calculator"
        h1="UK Grade Calculator — Honours Classification"
        intro="Calculate your UK degree classification instantly. Enter your module marks and credit weights to find out if you're on track for a First, 2:1, 2:2, or Third Class Honours degree. Completely free, no sign-up required."
        howItWorks={[
          "Enter each module with its credit value (typically 15, 20, or 30 credits).",
          "Enter your percentage mark (0–100) for each module.",
          "The calculator converts marks to UK grade classifications: First (70%+), 2:1 (60–69%), 2:2 (50–59%).",
          "Your degree classification is computed using weighted average across all modules.",
          "See your current classification and how far you are from the next class boundary.",
        ]}
        formula="Weighted Average = Σ(Module Credits × Module Mark) ÷ Σ Module Credits"
        formulaNote="The UK uses a credit-weighted average of all module marks. Your overall degree classification is determined by this weighted average, with the boundaries at 70% (First), 60% (2:1), 50% (2:2), and 40% (Third)."
        example={`Example — UK Degree Classification:

Module 1: Mathematics — 30 credits, 74% → First Class
Module 2: Research Methods — 20 credits, 65% → 2:1
Module 3: Dissertation — 40 credits, 72% → First Class
Module 4: Optional Module — 20 credits, 58% → 2:2

Calculation:
Weighted sum = (30×74) + (20×65) + (40×72) + (20×58)
            = 2220 + 1300 + 2880 + 1160 = 7560
Total credits = 30 + 20 + 40 + 20 = 110

Average = 7560 ÷ 110 = 68.7% → Upper Second Class (2:1)`}
        faqs={[
          { question: "What is First Class Honours?", answer: "First Class Honours is awarded to students scoring 70% or above overall. It is the highest degree classification in the UK university system." },
          { question: "What is a 2:1 degree?", answer: "A 2:1 (Upper Second Class Honours) requires marks between 60-69%. It is the most common degree award and the standard requirement for most graduate employers." },
          { question: "How is a UK degree classified?", answer: "UK honours degrees are classified as: First (70%+), 2:1 (60–69%), 2:2 (50–59%), Third (40–49%), and Pass (35–39%), based on weighted average marks." },
          { question: "Does a 2:2 degree matter for employment?", answer: "A 2:2 can still lead to a successful career. While some graduate schemes require a 2:1, many employers consider the whole candidate including experience and skills." },
          { question: "What GPA is equivalent to a UK First?", answer: "A UK First Class Honours (70%+) is roughly equivalent to a 3.7-4.0 GPA on the US 4.0 scale." },
        ]}
        relatedPages={RELATED}
      />
    </>
  )
}
