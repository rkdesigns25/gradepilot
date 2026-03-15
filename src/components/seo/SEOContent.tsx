"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Lightbulb, BookOpen, FlaskConical, Target } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import type { SEOPageData } from "@/lib/seo-data"

interface SEOContentProps {
  page: SEOPageData
}

/** Long-form SEO content section for programmatic pages (800-1200 words) */
export function SEOContent({ page }: SEOContentProps) {
  return (
    <div className="space-y-10 mt-12">
      {/* What is [X]? */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-violet-brand/10 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-violet-brand" />
          </div>
          <h2 className="text-2xl font-bold">What is {page.calculatorType.toUpperCase()}?</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed text-base">
          {page.whatIs}
        </p>
      </section>

      {/* Formula */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <FlaskConical className="w-4 h-4 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold">Formula</h2>
        </div>
        <GlassCard className="p-6">
          <div className="text-center">
            <code className="text-lg sm:text-xl font-mono font-bold text-violet-brand bg-violet-brand/10 px-4 py-2 rounded-lg inline-block">
              {page.formula}
            </code>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4 text-base">
            {page.formulaExplanation}
          </p>
        </GlassCard>
      </section>

      {/* Worked Example */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold">Step-by-Step Example</h2>
        </div>
        <GlassCard className="p-6">
          <pre className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans">
            {page.example}
          </pre>
        </GlassCard>
      </section>

      {/* Use Cases */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <Target className="w-4 h-4 text-amber-400" />
          </div>
          <h2 className="text-2xl font-bold">Who Needs This Calculator?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {page.useCases.map((useCase, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl bg-muted/20 dark:bg-muted/10"
            >
              <span className="w-6 h-6 rounded-full bg-violet-brand/20 flex items-center justify-center text-xs font-bold text-violet-brand shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-muted-foreground">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      {page.faqs.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {page.faqs.map((faq, i) => (
              <FAQAccordionItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

// ─── FAQ Accordion Item ─────────────────────────────────────────────────

function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <GlassCard className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left gap-3"
        aria-expanded={open}
      >
        <span className="font-medium text-sm">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  )
}
