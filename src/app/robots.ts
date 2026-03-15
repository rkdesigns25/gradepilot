import type { MetadataRoute } from "next"

const BASE_URL = "https://gradepilot-tools.vercel.app"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Allow all valid pages to be crawled
      allow: "/",
      // Next.js App Router best practice & specifically requested rules
      disallow: [
        "/api/",    // Block API routes from being crawled
        "/_next/",  // Block framework internal routing
        "/admin/",  // Block admin dashboards (if added later)
      ],
    },
    // Absolute path to the auto-generated sitemap index
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
