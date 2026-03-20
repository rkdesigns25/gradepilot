import { AttendanceCalculator } from "@/components/calculators/AttendanceCalculator"
import { BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import { FAQSchema, SoftwareApplicationSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Attendance Calculator | Know Exactly How Many Classes You Can Skip",
  description: "Stressing over the 75% rule? Our free attendance tracker tells you instantly what your percentage is, exactly how many classes you can bunk, and what you need to attend.",
  keywords: ["attendance calculator", "attendance calculator 75 percent", "how many classes can I bunk", "minimum attendance tracker", "college attendance tracker"],
}

export default function AttendancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">Attendance Calculator</h1>
            <p className="text-muted-foreground text-sm">Track & manage your attendance</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Enter your attended classes, total classes, and target percentage. See your current status and find how many classes you can skip safely.
        </p>
      </div>
      <AttendanceCalculator />

      {/* SEO CONTENT SECTION */}
      <section className="mt-20 pt-12 border-t border-border/50">
        <div className="prose prose-violet dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Why the 75% Attendance Rule Exists</h2>
          <p>
            Almost every college student has furiously searched for an <strong>attendance calculator 75 percent</strong> online right before midterm exams. The 75% minimum attendance rule was standardized globally by various educational commissions to ensure that students physically experience sufficient lecture hours to comprehend the core syllabus. Falling below this threshold often results in immediate exam debarment.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">How to Calculate Your Attendance Percentage</h2>
          <p>
            Wondering <strong>how many classes can I bunk</strong>? An accurate <strong>attendance calculator</strong> does more than just divide two numbers; it instantly projects future classes to simulate your buffer limit. The basic percentage formula is simple:
          </p>
          <div className="bg-muted p-4 rounded-xl font-mono text-center text-lg my-6">
            Attendance % = (Classes Attended / Total Classes) × 100
          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">Finding Your Exact "Bunk Allowance" (Formula)</h3>
          <p>
            If your current attendance is 82% (41 out of 50 classes), you are in the safe zone. To calculate the maximum number of consecutive classes you can safely bunk without slipping below 75%, our system uses the formula:
          </p>
          <p className="font-mono text-sm bg-muted inline-block p-1 px-2 rounded">
            Max Bunks = (Current Attended × 100 / Target %) - Total Classes Conducted
          </p>
          <p className="mt-4">
            In this example: (41 × 100 / 75) - 50 = 54.6 - 50 = 4.6. You can safely cut exactly <strong>4 more classes</strong>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">College Attendance Rules Worldwide</h2>
          <p>
            While India heavily enforces the 75% mandate across all major universities (VTU, Mumbai University, etc.), minimum attendance targets in the USA, UK, and Canada can fluctuate wildly from 50% to 100% depending entirely on the professor's syllabus grading rubric. Our <strong>minimum attendance tracker</strong> lets you manually dial in your professor's strict target (e.g., 85% or 90%) seamlessly.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              { q: "How many continuous classes can I bunk?", a: "This depends entirely on your total conducted classes. Use the calculator and look at the 'You Can Safely Skip' metric. If it shows 0, skipping even one class will push you into the danger zone." },
              { q: "Do medical leaves count as attendance?", a: "Usually, submitting a valid medical certificate doesn't 'give' you attendance. Instead, those missed days are subtracted from the 'Total Classes Conducted' denominator, naturally skyrocketing your percentage." },
              { q: "Does the 75% rule apply to lab sessions too?", a: "Yes. In almost every engineering and science curriculum, theory lectures and practical lab sessions have totally segregated attendance trackers. You must maintain 75% independently in both." },
              { q: "What happens if my attendance sits at exactly 74.9%?", a: "Academic management systems round differently. Strictly speaking, 74.9% is below 75.0%, and without explicit professor grace, you will likely be debarred. Always aim for a 76% buffer minimum." },
              { q: "Can I use this for high school tracking?", a: "Certainly. High school students can simply adjust the target to 80% or 90% and use the exact same calculation metrics." }
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
            { question: "How many continuous classes can I bunk?", answer: "This depends entirely on your total conducted classes. Use the calculator and look at the 'You Can Safely Skip' metric. If it shows 0, skipping even one class will push you into the danger zone." },
            { question: "Do medical leaves count as attendance?", answer: "Usually, submitting a valid medical certificate doesn't 'give' you attendance. Instead, those missed days are subtracted from the 'Total Classes Conducted' denominator, naturally skyrocketing your percentage." },
            { question: "Does the 75% rule apply to lab sessions too?", answer: "Yes. In almost every engineering and science curriculum, theory lectures and practical lab sessions have totally segregated attendance trackers. You must maintain 75% independently in both." },
            { question: "What happens if my attendance sits at exactly 74.9%?", answer: "Academic management systems round differently. Strictly speaking, 74.9% is below 75.0%, and without explicit professor grace, you will likely be debarred. Always aim for a 76% buffer minimum." },
            { question: "Can I use this for high school tracking?", answer: "Certainly. High school students can simply adjust the target to 80% or 90% and use the exact same calculation metrics." }
          ]}
        />
        <SoftwareApplicationSchema
          name="Attendance Percentage Calculator"
          description="A free college attendance tracker and calculator that reports class skipping allowances."
          applicationCategory="EducationalApplication"
        />
        <BreadcrumbSchema items={[
          { name: "Home", href: "/" },
          { name: "Attendance Calculator", href: "/attendance" }
        ]} />
      </section>
    </div>
  )
}
