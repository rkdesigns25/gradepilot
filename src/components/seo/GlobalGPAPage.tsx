"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"
import type { GradingSystemId } from "@/lib/grading-systems"
import { getSystem } from "@/lib/grading-systems"
import { SGPACalculator } from "@/components/calculators/SGPACalculator"
import { CGPACalculator } from "@/components/calculators/CGPACalculator"
import { Breadcrumb } from "@/components/seo/Breadcrumb"
import { GlassCard } from "@/components/ui/GlassCard"

interface FAQItem { question: string; answer: string }

export interface GlobalGPAPageProps {
  systemId: GradingSystemId
  h1: string
  intro: string
  howItWorks: string[]
  formula: string
  formulaNote: string
  example: string
  faqs: FAQItem[]
  relatedPages: { label: string; href: string; flag: string }[]
  breadcrumbLabel: string
  slug: string
}

export const GlobalGPAPage = memo(function GlobalGPAPage({
  systemId,
  h1,
  intro,
  howItWorks,
  formula,
  formulaNote,
  example,
  faqs,
  relatedPages,
  breadcrumbLabel,
  slug,
}: GlobalGPAPageProps) {
  const system = getSystem(systemId)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: `${system.flag} ${breadcrumbLabel}`, href: `/${slug}` },
        ]}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-brand/10 border border-violet-brand/20 text-violet-brand text-xs font-medium mb-4">
          <Globe className="w-3.5 h-3.5" />
          {system.flag} {system.country} · {system.scaleLabel} Scale
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text">{h1}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{intro}</p>
      </motion.div>

      {/* Calculators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <h2 className="text-xl font-bold mb-4">Semester {system.resultLabel} Calculator</h2>
        <SGPACalculator forceSystem={systemId} />

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Cumulative {system.resultLabel} Calculator</h2>
          <CGPACalculator forceSystem={systemId} />
        </div>
      </motion.div>

      {/* How it works */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid gap-3">
          {howItWorks.map((step, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/20 dark:bg-muted/10">
              <span className="w-6 h-6 rounded-full bg-violet-brand/20 flex items-center justify-center text-xs font-bold text-violet-brand shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Formula */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Formula</h2>
        <GlassCard className="p-6">
          <code className="text-base sm:text-lg font-mono font-bold text-violet-brand bg-violet-brand/10 px-4 py-2 rounded-lg inline-block mb-4">
            {formula}
          </code>
          <p className="text-sm text-muted-foreground">{formulaNote}</p>
        </GlassCard>
      </section>

      {/* Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Worked Example</h2>
        <GlassCard className="p-6">
          <pre className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans">
            {example}
          </pre>
        </GlassCard>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <GlassCard key={i} className="p-4">
              <h3 className="font-semibold text-sm mb-2">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section>
        <h2 className="text-2xl font-bold mb-4">GPA Calculators by Country</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {relatedPages.map((page) => (
            <Link key={page.href} href={page.href}>
              <GlassCard hover className="p-4 flex items-center gap-3 group">
                <span className="text-2xl">{page.flag}</span>
                <span className="text-sm font-medium group-hover:text-violet-brand transition-colors flex-1">
                  {page.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-violet-brand group-hover:translate-x-1 transition-all" />
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
})
