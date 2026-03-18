import * as fs from "fs"
import * as path from "path"

const dataPath = path.join(__dirname, "../src/lib/seo-data.ts")
const sitemapPath = path.join(__dirname, "../public/sitemap.xml")

const content = fs.readFileSync(dataPath, "utf8")

// Regex to match sgpaPage("slug", ...) or cgpaPage(...) etc.
const slugRegex = /(?:sgpa|cgpa|attendance|percentage)Page\(\s*"([^"]+)"/g
let match
const slugs: string[] = []

while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1])
}

const BASE_URL = "https://gradepilot-tools.vercel.app"

const staticRoutes = [
  "",
  "/sgpa",
  "/cgpa",
  "/attendance",
  "/percentage",
  "/about",
  "/faq",
  "/privacy",
  "/terms",
  "/contact",
]

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

for (const route of staticRoutes) {
  const priority = route === "" ? "1.0" : route.match(/sgpa|cgpa|attendance|percentage/) ? "0.9" : "0.8"
  const freq = route === "" ? "daily" : "weekly"
  xml += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>
`
}

for (const slug of slugs) {
  xml += `  <url>
    <loc>${BASE_URL}/tools/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`
}

xml += `</urlset>`

fs.mkdirSync(path.dirname(sitemapPath), { recursive: true })
fs.writeFileSync(sitemapPath, xml, "utf8")

console.log(`Generated sitemap with ${staticRoutes.length + slugs.length} URLs.`)
