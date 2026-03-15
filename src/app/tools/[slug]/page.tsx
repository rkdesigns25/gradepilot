// ============================================================================
// Dynamic SEO page — generates 120+ pages from seo-data.ts
// Uses /tools/[slug] route pattern for SEO-friendly URLs
// ============================================================================

import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getAllSEOPages, getSEOPageBySlug, getCalculatorName, getCalculatorRoute } from "@/lib/seo-data"
import { FAQSchema, HowToSchema, SoftwareApplicationSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"
import { SEOPageClient } from "./SEOPageClient"

// ─── Static Params ──────────────────────────────────────────────────────

/** Generate all 120+ pages at build time */
export function generateStaticParams() {
  return getAllSEOPages().map((page) => ({
    slug: page.slug,
  }))
}

// ─── Metadata ───────────────────────────────────────────────────────────

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getSEOPageBySlug(slug)
  if (!page) return {}

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: "website",
    },
  }
}

// ─── HowTo steps per calculator type ────────────────────────────────────

function getHowToSteps(type: string) {
  switch (type) {
    case "sgpa":
      return [
        { name: "Enter Subject Details", text: "Add each subject with its credit hours." },
        { name: "Input Marks or Grade", text: "Enter your marks (0-100) for automatic grade conversion, or select the grade directly." },
        { name: "View SGPA Result", text: "Your SGPA is calculated instantly using the formula: Σ(Credits × Grade Points) / Σ Credits." },
      ]
    case "cgpa":
      return [
        { name: "Add Semesters", text: "Enter each semester with its SGPA and total credits." },
        { name: "Enter SGPA and Credits", text: "Input the SGPA (0-10) and credit count for each semester." },
        { name: "View CGPA Result", text: "Your cumulative CGPA is calculated as: Σ(SGPA × Credits) / Σ Credits." },
      ]
    case "attendance":
      return [
        { name: "Enter Attendance Data", text: "Input the number of classes attended and total classes held." },
        { name: "Set Target Percentage", text: "Enter your required minimum attendance percentage (default: 75%)." },
        { name: "View Results", text: "See your current percentage, how many classes you can bunk, and how many you need to attend." },
      ]
    case "percentage":
      return [
        { name: "Choose Calculation Type", text: "Select Marks→%, %→Marks, or Marks Needed." },
        { name: "Enter Values", text: "Input your marks obtained and total marks (or target percentage)." },
        { name: "View Result", text: "Your percentage or required marks are calculated instantly." },
      ]
    default:
      return []
  }
}

// ─── Page Component ─────────────────────────────────────────────────────

export default async function SEOPage({ params }: Props) {
  const { slug } = await params
  const page = getSEOPageBySlug(slug)
  if (!page) notFound()

  const calcName = getCalculatorName(page.calculatorType)
  const calcRoute = getCalculatorRoute(page.calculatorType)
  const howToSteps = getHowToSteps(page.calculatorType)

  // Breadcrumb data for structured data
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: `${calcName} Calculator`, href: calcRoute },
    { name: page.h1, href: `/tools/${page.slug}` },
  ]

  return (
    <>
      {/* Structured Data (invisible to users, visible to search engines) */}
      <FAQSchema faqs={page.faqs} />
      <HowToSchema
        name={`How to Use the ${calcName} Calculator`}
        description={page.metaDescription}
        steps={howToSteps}
      />
      <SoftwareApplicationSchema
        name={`GradePilot ${calcName} Calculator`}
        description={page.metaDescription}
        applicationCategory="EducationalApplication"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Client-side rendered page content */}
      <SEOPageClient page={page} />
    </>
  )
}
