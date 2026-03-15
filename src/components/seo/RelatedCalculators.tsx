"use client"

import Link from "next/link"
import { ArrowRight, Calculator, BookOpen, Clock, Percent } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import type { SEOPageData } from "@/lib/seo-data"
import { getRelatedPages, getCalculatorName } from "@/lib/seo-data"

const typeIcons = {
  sgpa: Calculator,
  cgpa: BookOpen,
  attendance: Clock,
  percentage: Percent,
}

interface RelatedCalculatorsProps {
  page: SEOPageData
}

/** Internal linking section showing related calculator pages */
export function RelatedCalculators({ page }: RelatedCalculatorsProps) {
  const related = getRelatedPages(page)

  if (related.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.slice(0, 6).map((rPage) => {
          const Icon = typeIcons[rPage.calculatorType]
          return (
            <Link key={rPage.slug} href={`/tools/${rPage.slug}`}>
              <GlassCard hover className="p-5 h-full group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-brand/10 flex items-center justify-center shrink-0 group-hover:bg-violet-brand/20 transition-colors">
                    <Icon className="w-5 h-5 text-violet-brand" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-violet-brand transition-colors">
                      {getCalculatorName(rPage.calculatorType)} Calculator
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {rPage.metaDescription}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-violet-brand transition-colors shrink-0 mt-1" />
                </div>
              </GlassCard>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
