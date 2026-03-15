"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { SEOPageData } from "@/lib/seo-data"
import { getCalculatorName, getCalculatorRoute } from "@/lib/seo-data"
import { Breadcrumb } from "@/components/seo/Breadcrumb"
import { SEOContent } from "@/components/seo/SEOContent"
import { RelatedCalculators } from "@/components/seo/RelatedCalculators"
import { GradientButton } from "@/components/ui/GradientButton"

// Lazy-import calculators
import { SGPACalculator } from "@/components/calculators/SGPACalculator"
import { CGPACalculator } from "@/components/calculators/CGPACalculator"
import { AttendanceCalculator } from "@/components/calculators/AttendanceCalculator"
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator"

const calculators = {
  sgpa: SGPACalculator,
  cgpa: CGPACalculator,
  attendance: AttendanceCalculator,
  percentage: PercentageCalculator,
}

interface SEOPageClientProps {
  page: SEOPageData
}

export function SEOPageClient({ page }: SEOPageClientProps) {
  const Calculator = calculators[page.calculatorType]
  const calcName = getCalculatorName(page.calculatorType)
  const calcRoute = getCalculatorRoute(page.calculatorType)

  const breadcrumbItems = [
    { label: `${calcName} Calculator`, href: calcRoute },
    { label: page.h1, href: `/tools/${page.slug}` },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text">
          {page.h1}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {page.intro}
        </p>
      </motion.div>

      {/* Calculator Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Try the Calculator</h2>
          <Link href={calcRoute}>
            <GradientButton variant="outline" size="sm" className="gap-1">
              Full Page <ArrowRight className="w-3.5 h-3.5" />
            </GradientButton>
          </Link>
        </div>
        <Calculator />
      </motion.div>

      {/* Long-form SEO Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SEOContent page={page} />
      </motion.div>

      {/* Internal Linking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <RelatedCalculators page={page} />
      </motion.div>
    </div>
  )
}
