import { CGPACalculator } from "@/components/calculators/CGPACalculator"
import { BookOpen } from "lucide-react"
import type { Metadata } from "next"
import { FAQSchema, HowToSchema, SoftwareApplicationSchema } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "CGPA Calculator + Percentage Converter (Free & Instant)",
  description: "Accurately calculate your Cumulative Grade Point Average across all semesters. Easily convert your CGPA into a percentage score for Indian and Global universities.",
  keywords: ["cgpa calculator", "cgpa to percentage converter", "cumulative gpa calculator college", "gpa calculator canada", "cumulative grade point average"],
}

export default function CGPAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">CGPA Calculator</h1>
            <p className="text-muted-foreground text-sm">Cumulative Grade Point Average</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Enter your SGPA and credit count for each semester below. CGPA is calculated as{" "}
          <span className="font-mono text-violet-brand bg-violet-brand/10 px-1.5 py-0.5 rounded text-sm">
            Σ(SGPA × Credits) / Σ Credits
          </span>
        </p>
      </div>
      <CGPACalculator />

      {/* SEO CONTENT SECTION */}
      <section className="mt-20 pt-12 border-t border-border/50">
        <div className="prose prose-violet dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold tracking-tight mb-6">What is a CGPA (Cumulative Grade Point Average)?</h2>
          <p>
            The <strong>Cumulative Grade Point Average (CGPA)</strong> is the ultimate aggregate measure of your entire academic performance across all semesters or years of your degree. While an SGPA Calculator determines your grade for a single term, this <strong>CGPA Calculator</strong> averages all those terms together mathematically, accounting for the total credits you've completed. Employers and graduate schools almost exclusively look at your final CGPA during placements or admissions.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">How to Calculate CGPA (Formula)</h2>
          <p>
            The global <strong>cumulative GPA calculator college</strong> formula is a weighted mean. You cannot simply find the mathematical average of your past SGPAs; you must weight each SGPA by the number of semester credits.
          </p>
          <div className="bg-muted p-4 rounded-xl font-mono text-center text-lg my-6">
            CGPA = Σ (Semester SGPA × Semester Credits) / Σ (Total Course Credits)
          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">Semester-by-Semester Worked Example</h3>
          <p>Assume you are tracking your CGPA over 3 past semesters:</p>
          <ul>
            <li><strong>Semester 1 (22 credits):</strong> SGPA 8.5. Weighted Score = 22 × 8.5 = 187</li>
            <li><strong>Semester 2 (24 credits):</strong> SGPA 7.8. Weighted Score = 24 × 7.8 = 187.2</li>
            <li><strong>Semester 3 (20 credits):</strong> SGPA 9.2. Weighted Score = 20 × 9.2 = 184</li>
          </ul>
          <p>
            Total Weighted Semester Scores = 187 + 187.2 + 184 = <strong>558.2</strong><br/>
            Total Credits Earned = 22 + 24 + 20 = <strong>66</strong><br/>
            <strong>Final CGPA = 558.2 / 66 = 8.46</strong>
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Global Cutoffs: CGPA for Placements & Master's Degrees</h2>
          <p>
            In India (on the 10-point scale), top-tier IT companies usually enforce a hard cut-off of 7.0 or higher. For Ivy League admissions in the USA or top universities in Canada and the UK, you typically need a CGPA equivalent of 3.5 or higher on the 4.0 scale (roughly equivalent to an 8.5+ in the Indian system). GradePilot also functions perfectly as a <strong>GPA calculator Canada</strong> by switching the internal grading limits.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              { q: "How do I convert my CGPA to a percentage?", a: "To use a cgpa to percentage converter accurately, you must refer to your university board. Under CBSE, the formula is (CGPA × 9.5). Under most Indian UGC universities, the formula is (CGPA - 0.75) × 10." },
              { q: "What is a First Class in UK Grading out of CGPA?", a: "In the UK, achieving a First-class Honours roughly correlates to a CGPA of 7.5 or above (or 70%+), though the exact credit-weighting rules differ substantially between universities." },
              { q: "Can a bad first semester permanently ruin my CGPA?", a: "No! Since CGPA averages out total credits, scoring an exceptional SGPA in later semesters (especially those with heavy credit loads) can significantly recover a weak start." },
              { q: "Is a 7.5 CGPA considered good?", a: "Yes, a 7.5 CGPA typically translates to a very strong First Class division. It easily clears the initial screening cutoffs for over 90% of campus placements." },
              { q: "Do backlog subjects affect CGPA?", a: "If you clear a backlog, only your passing grade affects the ultimate CGPA, but the failed attempt usually continues to reflect on your official transcript." }
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
            { question: "How do I convert my CGPA to a percentage?", answer: "To use a cgpa to percentage converter accurately, you must refer to your university board. Under CBSE, the formula is (CGPA × 9.5). Under most Indian UGC universities, the formula is (CGPA - 0.75) × 10." },
            { question: "What is a First Class in UK Grading out of CGPA?", answer: "In the UK, achieving a First-class Honours roughly correlates to a CGPA of 7.5 or above (or 70%+), though the exact credit-weighting rules differ substantially between universities." },
            { question: "Can a bad first semester permanently ruin my CGPA?", answer: "No! Since CGPA averages out total credits, scoring an exceptional SGPA in later semesters (especially those with heavy credit loads) can significantly recover a weak start." },
            { question: "Is a 7.5 CGPA considered good?", answer: "Yes, a 7.5 CGPA typically translates to a very strong First Class division. It easily clears the initial screening cutoffs for over 90% of campus placements." },
            { question: "Do backlog subjects affect CGPA?", answer: "If you clear a backlog, only your passing grade affects the ultimate CGPA, but the failed attempt usually continues to reflect on your official transcript." }
          ]}
        />
        <HowToSchema
          name="How to Calculate CGPA"
          description="A step-by-step mathematical guide to calculating your Cumulative Grade Point Average."
          steps={[
            { name: "Gather Semester Data", text: "Find your SGPA and total credit hours taken for each completed semester." },
            { name: "Multiply for Weighted Scores", text: "Multiply each semester's SGPA by its corresponding credit hours." },
            { name: "Sum All Weighted Scores", text: "Add the results from step 2 together." },
            { name: "Divide by Total Credits", text: "Divide the sum by the total amount of credits attempted across all semesters to find your CGPA." }
          ]}
        />
        <SoftwareApplicationSchema
          name="CGPA Calculator"
          description="A precise Cumulative Grade Point Average calculator and CGPA to percentage converter."
          applicationCategory="EducationalApplication"
        />
      </section>
    </div>
  )
}
