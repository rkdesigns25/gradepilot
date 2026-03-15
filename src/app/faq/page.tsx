"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "What is SGPA?",
    a: "SGPA stands for Semester Grade Point Average. It measures your academic performance for a single semester. It is calculated as the sum of (Credits × Grade Points) for all subjects divided by the total credits that semester."
  },
  {
    q: "How is CGPA calculated?",
    a: "CGPA (Cumulative Grade Point Average) is the weighted average of your SGPA across all semesters. The formula is: CGPA = Σ(SGPA × Credits) / Σ Credits. Semesters with more credits have a proportionally higher influence on your CGPA."
  },
  {
    q: "How does the Attendance Calculator work?",
    a: "Enter the number of classes you've attended, the total classes held, and your target attendance percentage. The calculator then tells you: your current attendance %, how many additional classes you can safely skip while staying above target, and how many consecutive classes you must attend if you're currently below target."
  },
  {
    q: "Is GradePilot completely free?",
    a: "Yes! GradePilot is 100% free to use. There are no premium plans, no sign-ups required, and no ads that interrupt your experience. All tools are available to every student at no cost."
  },
  {
    q: "Does GradePilot store or collect my data?",
    a: "No. Every calculation runs entirely in your browser using JavaScript. No data is ever sent to any server. We do not collect, store, or share any personal information or academic data whatsoever."
  },
  {
    q: "Which grading system does the SGPA Calculator use?",
    a: "GradePilot uses a standard 10-point grading scale: O (90–100) = 10, A+ (80–89) = 9, A (70–79) = 8, B+ (60–69) = 7, B (55–59) = 6, C (50–54) = 5, P (40–49) = 4, F (0–39) = 0. You can also manually select a grade from the dropdown if your marks don't exactly match."
  },
  {
    q: "Can I use GradePilot on my phone?",
    a: "Absolutely! GradePilot is fully responsive and optimized for mobile devices. The layout adapts seamlessly to any screen size, from phones to large desktop monitors."
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass rounded-xl border border-white/10 dark:border-violet-brand/20 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-base">{q}</span>
        <ChevronDown className={cn("w-5 h-5 text-muted-foreground shrink-0 transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-white/5 dark:border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
        <p className="text-muted-foreground text-lg">Everything you need to know about GradePilot.</p>
      </div>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  )
}
