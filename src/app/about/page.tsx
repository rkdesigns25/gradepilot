import type { Metadata } from "next"
import { GraduationCap, Target, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About GradePilot — Free Academic Calculators",
  description: "Learn about GradePilot, the free academic calculator suite built for students. No sign-ups, no data collection, just fast and accurate results.",
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-xl shadow-violet-500/25 mx-auto mb-6">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">
          About <span className="gradient-text">GradePilot</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A free, fast, and privacy-first collection of academic calculators built by students for students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Target, title: "Our Mission", desc: "Make academic tracking effortless for every student, regardless of their university or grading system." },
          { icon: Shield, title: "Privacy First", desc: "We never collect, store, or share your data. All calculations run entirely in your browser." },
          { icon: Zap, title: "Always Free", desc: "GradePilot is and always will be free. No premium plans, no ads that interrupt you, no sign-ups." },
        ].map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="glass rounded-2xl p-6 border border-white/10 dark:border-violet-brand/20">
              <div className="w-10 h-10 rounded-xl bg-violet-brand/10 border border-violet-brand/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-violet-brand" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="glass rounded-2xl border border-white/10 dark:border-violet-brand/20 p-8">
        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <ul className="space-y-3 text-muted-foreground">
          {[
            "SGPA Calculator with automatic mark-to-grade conversion using standard grading tables",
            "CGPA Calculator using weighted credit-based formula across all semesters",
            "Attendance Tracker with bunk allowance and attendance deficit calculations",
            "Percentage Calculator with three utility modes for every student need",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-violet-brand mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
