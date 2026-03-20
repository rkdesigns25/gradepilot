import { SGPACalculator } from "@/components/calculators/SGPACalculator"
import { Calculator } from "lucide-react"
import { FAQSchema, HowToSchema, SoftwareApplicationSchema } from "@/components/seo/JsonLd"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free SGPA Calculator (Accurate & Fast 10-Point & GPA Scales)",
  description:
    "Calculate your SGPA instantly with our free online Semester Grade Point Average calculator. Features automatic mark-to-grade conversions and supports multiple global systems.",
  keywords: ["sgpa calculator", "calculate sgpa online", "sgpa calculator engineering", "how to calculate sgpa", "semester gpa calculator", "sgpa to gpa converter"],
}

export default function SGPAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">SGPA Calculator</h1>
            <p className="text-muted-foreground text-sm">Semester Grade Point Average</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Enter your subject details below. You can input marks (auto-converted to grade) or select a grade directly.
          SGPA is calculated as <span className="font-mono text-violet-brand bg-violet-brand/10 px-1.5 py-0.5 rounded text-sm">Σ(Credits × Grade Points) / Σ Credits</span>
        </p>
      </div>

      <SGPACalculator />

      {/* SEO CONTENT SECTION */}
      <section className="mt-20 pt-12 border-t border-border/50">
        <div className="prose prose-violet dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold tracking-tight mb-6">What is SGPA (Semester Grade Point Average)?</h2>
          <p>
            The <strong>Semester Grade Point Average (SGPA)</strong> is a standardized metric used by universities worldwide to measure a student's academic performance during a single semester or term. Unlike a simple percentage, an <strong>SGPA calculator</strong> uses a credit-weighted system. This means that subjects with higher credit hours (like core engineering or science courses) have a significantly larger impact on your final SGPA than minor subjects or labs.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">The Exact SGPA Formula</h2>
          <p>
            Whether you are using a 10-point scale in India or a 4.0 GPA scale in the USA, the fundamental formula to <strong>calculate SGPA</strong> remains mathematically identical:
          </p>
          <div className="bg-muted p-4 rounded-xl font-mono text-center text-lg my-6">
            SGPA = Σ (Credit Hours × Grade Points) / Σ (Total Credit Hours)
          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">Step-by-step SGPA Calculation Example (Engineering marks)</h3>
          <p>Let's say you are an engineering student taking 4 subjects this semester:</p>
          <ul>
            <li><strong>Mathematics (4 credits):</strong> Scored a Grade A+ (9 points). Weighted Score = 4 × 9 = 36</li>
            <li><strong>Physics (3 credits):</strong> Scored a Grade A (8 points). Weighted Score = 3 × 8 = 24</li>
            <li><strong>Computer Science (3 credits):</strong> Scored a Grade O (10 points). Weighted Score = 3 × 10 = 30</li>
            <li><strong>English Lab (2 credits):</strong> Scored a Grade B+ (7 points). Weighted Score = 2 × 7 = 14</li>
          </ul>
          <p>
            Total Weighted Score = 36 + 24 + 30 + 14 = <strong>104</strong><br/>
            Total Credits = 4 + 3 + 3 + 2 = <strong>12</strong><br/>
            <strong>SGPA = 104 / 12 = 8.67</strong>
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">How SGPA Differs Globally (India vs USA GPA)</h2>
          <p>
            Our <strong>semester GPA calculator</strong> seamlessly adapts to your region. In India (under the UGC CBCS system), universities like VTU, Mumbai University, and Anna University typically use a 10-point grading scale where an 'O' is 10 points and an 'F' is 0 points.
          </p>
          <p>
            In contrast, the United States typically uses a 4.0 scale (A = 4.0, B = 3.0), and the UK uses an Honours classification system. GradePilot's <strong>sgpa to gpa converter</strong> engine natively handles all of these variations if you switch your grading system at the top of the calculator.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              { q: "What is considered a good SGPA?", a: "A 'good' SGPA depends on your university and major. Generally, on a 10-point scale, anything above 8.0 is excellent, and above 7.0 is solid for most job placements and internships." },
              { q: "What is the difference between SGPA and CGPA?", a: "SGPA measures your performance for just one specific semester. CGPA (Cumulative Grade Point Average) is the average of all your SGPAs combined across your entire degree program." },
              { q: "How do I convert my SGPA to a percentage?", a: "Conversion formulas vary by university. A very common UGC formula is Percentage = (SGPA - 0.75) × 10. However, always check your specific university's official conversion guidelines." },
              { q: "Does a failed subject affect my SGPA?", a: "Yes. A failed subject usually awards 0 grade points, which drastically lowers the numerator of the SGPA formula while the credits for that subject still count in the denominator." },
              { q: "Can a high SGPA fix a low CGPA?", a: "Yes, but it takes time. Since CGPA is an average of all semesters, a single very high SGPA will pull your CGPA upwards, mathematically proportional to the number of credits taken that semester." }
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
            { question: "What is considered a good SGPA?", answer: "A 'good' SGPA depends on your university and major. Generally, on a 10-point scale, anything above 8.0 is excellent, and above 7.0 is solid for most job placements and internships." },
            { question: "What is the difference between SGPA and CGPA?", answer: "SGPA measures your performance for just one specific semester. CGPA (Cumulative Grade Point Average) is the average of all your SGPAs combined across your entire degree program." },
            { question: "How do I convert my SGPA to a percentage?", answer: "Conversion formulas vary by university. A very common UGC formula is Percentage = (SGPA - 0.75) × 10. However, always check your specific university's official conversion guidelines." },
            { question: "Does a failed subject affect my SGPA?", answer: "Yes. A failed subject usually awards 0 grade points, which drastically lowers the numerator of the SGPA formula while the credits for that subject still count in the denominator." },
            { question: "Can a high SGPA fix a low CGPA?", answer: "Yes, but it takes time. Since CGPA is an average of all semesters, a single very high SGPA will pull your CGPA upwards, mathematically proportional to the number of credits taken that semester." }
          ]}
        />
        <HowToSchema
          name="How to Calculate SGPA"
          description="A step-by-step guide to calculating Semester Grade Point Average."
          steps={[
            { name: "Determine Credits", text: "Identify the credit hours for each subject." },
            { name: "Find Grade Points", text: "Convert your marks or grades into numeric grade points based on your university's scale." },
            { name: "Calculate Subject Score", text: "Multiply the credit hours by the grade points for every subject." },
            { name: "Sum Up", text: "Add all the Subject Scores together, and divide by the total number of credits to get your SGPA." }
          ]}
        />
        <SoftwareApplicationSchema
          name="SGPA Calculator"
          description="A free online tool to calculate Semester Grade Point Average with multi-country grading support."
          applicationCategory="EducationalApplication"
        />
      </section>
    </div>
  )
}
