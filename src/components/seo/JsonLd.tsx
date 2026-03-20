// ============================================================================
// JSON-LD Structured Data Components
// Generates FAQ, HowTo, and SoftwareApplication schemas
// ============================================================================

import type { FAQItem } from "@/lib/seo-data"

interface FAQSchemaProps {
  faqs: FAQItem[]
}

/** FAQPage schema — boosts visibility in Google search with expandable FAQ results */
export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: { name: string; text: string }[]
}

/** HowTo schema — eligible for step-by-step rich results in Google */
export function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface SoftwareApplicationSchemaProps {
  name: string
  description: string
  applicationCategory: string
}

/** SoftwareApplication schema — marks the page as a web app/tool */
export function SoftwareApplicationSchema({ name, description, applicationCategory }: SoftwareApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: { name: string; href: string }[]
}

/** BreadcrumbList schema — shows breadcrumb trail in search results */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => {
      const isAbsolute = item.href.startsWith("http");
      const cleanHref = item.href.startsWith("/") ? item.href : `/${item.href}`;
      const absoluteUrl = isAbsolute ? item.href : `https://gradepilot-tools.vercel.app${cleanHref}`;
      
      return {
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: absoluteUrl,
      };
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
