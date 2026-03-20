import { PercentageCalculator } from "@/components/calculators/PercentageCalculator"
import { Percent } from "lucide-react"
import type { Metadata } from "next"
import { FAQSchema, SoftwareApplicationSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Academic Percentage Calculator (Marks to Target Percentage)",
  description: "The perfect fast calculator for students. Convert your test marks into percentages or find exactly how many marks you need to hit your target class percentage.",
  keywords: ["percentage calculator", "marks to percentage", "percentage formula exam", "exam marks calculator", "student percentage calculator"],
}

export default function PercentagePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/25">
            <Percent className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">Percentage Calculator</h1>
            <p className="text-muted-foreground text-sm">Three tools for percentage calculations</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Use the tabs below to switch between tools — convert marks to percentage, find marks from a target percentage, or calculate marks needed.
        </p>
      </div>
      <PercentageCalculator />

      {/* SEO CONTENT SECTION */}
      <section className="mt-20 pt-12 border-t border-border/50">
        <div className="prose prose-violet dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Converting Academic Marks to Percentages</h2>
          <p>
            Whether you are assessing midterm exam scores or building a final report card, the <strong>percentage calculator</strong> is the most fundamental <strong>marks to percentage</strong> tool for students worldwide. Because exams scale unpredictably—some tests are out of 30 marks, others out of 150—finding standardized percentages is critical for calculating distinction status and class ranks.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Required Marks Formula (Finding your missing score)</h2>
          <p>
            In academics, the standard mathematical <strong>percentage formula exam</strong> equation is relatively simple:
          </p>
          <div className="bg-muted p-4 rounded-xl font-mono text-center text-lg my-6">
            Percentage = (Obtained Marks ÷ Total Maximum Marks) × 100
          </div>
          <p>
            However, GradePilot automates complex reverse calculations as well. If you have an impending final exam and need to maintain a 75% overall class average, you're looking for the "Target Marks" formula:
            <br/><br/>
            <strong>Target Score = (Desired Percentage × Total Aggregate Marks) ÷ 100</strong>
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Example: Finding your Target Percentage</h3>
          <p>
            Assume you have scored 240 marks out of a possible 300 so far. You have a final exam worth 100 marks coming up. Your total out-of score will be 400. To secure First-Class Distinction (75%), you need an overall 300 marks (75% of 400).
            Therefore, you must score exactly <strong>60 marks</strong> (300 total - 240 already scored) on your upcoming final exam to maintain Distinction!
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Global Percentage Equivalents</h2>
          <p>
            Unlike the 4.0 GPA scale or the 10-Point Indian scale, "percentage" functions as a universal academic language. A 90% score represents extraordinary mastery regardless of whether you are studying in Mumbai, London, Toronto, or New York. The nuances lie purely in translation—in certain British Commonwealth systems, achieving a 70% is famously considered a rigorous First-Class Honours, whereas in the US, an 80% barely secures a B- grade.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              { q: "What percentage equals a distinction?", a: "In schools following the Indian and UK academic systems, 75% or higher is historically formally classified as a Distinction boundary pass." },
              { q: "Is 'percentile' the same thing as 'percentage'?", a: "No. Your percentage is simply how many objective marks you earned. Your percentile represents relative competitive rank (e.g., scoring in the 90th percentile means you objectively beat 90% of other test-takers, even if you only achieved a raw 60% mark score)." },
              { q: "How do I calculate aggregate percentage for multiple subjects?", a: "To calculate aggregate percentage: Add every single obtained score together. Then sum all the 'maximum possible marks'. Finally, divide your total score by the total maximum score and multiply by 100." },
              { q: "Can I use this as a CGPA to percentage tool?", a: "No, converting CGPA requires a custom formula (often multiplying by 9.5 or 10). A raw percentage calculator ONLY divides literal points scored by literal points possible." }
            ].map((faq, i) => (
              <div key={i} className="bg-background border border-border/50 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* JSON-LD Schemas */}
        <FAQSchema
          faqs={[
            { question: "What percentage equals a distinction?", answer: "In schools following the Indian and UK academic systems, 75% or higher is historically formally classified as a Distinction boundary pass." },
            { question: "Is 'percentile' the same thing as 'percentage'?", answer: "No. Your percentage is simply how many objective marks you earned. Your percentile represents relative competitive rank (e.g., scoring in the 90th percentile means you objectively beat 90% of other test-takers, even if you only achieved a raw 60% mark score)." },
            { question: "How do I calculate aggregate percentage for multiple subjects?", answer: "To calculate aggregate percentage: Add every single obtained score together. Then sum all the 'maximum possible marks'. Finally, divide your total score by the total maximum score and multiply by 100." },
            { question: "Can I use this as a CGPA to percentage tool?", answer: "No, converting CGPA requires a custom formula (often multiplying by 9.5 or 10). A raw percentage calculator ONLY divides literal points scored by literal points possible." }
          ]}
        />
        <SoftwareApplicationSchema
          name="Marks to Percentage Calculator"
          description="A fast student calculator to convert test marks into absolute percentages."
          applicationCategory="EducationalApplication"
        />
        <BreadcrumbSchema items={[
          { name: "Home", href: "/" },
          { name: "Percentage Calculator", href: "/percentage" }
        ]} />
      </section>
    </div>
  )
}
