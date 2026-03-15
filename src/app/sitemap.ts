import type { MetadataRoute } from "next"
import { getAllSEOPages } from "@/lib/seo-data"

const BASE_URL = "https://gradepilot-tools.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const seoPages = getAllSEOPages()
  
  // 1. Core static routes
  const staticRoutes = [
    "", // Home
    "/sgpa",
    "/cgpa",
    "/attendance",
    "/percentage",
    "/about",
    "/faq",
    "/privacy",
    "/terms",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8, // Home page is most important
  }))

  // 2. Programmatic SEO routes (120+ pages)
  const dynamicRoutes = seoPages.map((page) => ({
    url: `${BASE_URL}/tools/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6, // programmatic pages generally get slightly lower priority
  }))

  // 3. Combine and return all routes
  // Next.js automatically handles XML encoding, UTF-8, and format
  return [...staticRoutes, ...dynamicRoutes]
}
