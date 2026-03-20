const fs = require("fs");
const path = require("path");

const domain = "https://gradepilot-tools.vercel.app";

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
  "/contact"
];

const globalRoutes = [
  "/gpa-calculator-usa",
  "/uk-grade-calculator",
  "/gpa-calculator-canada",
  "/australia-gpa-calculator"
];

function extractSlugs() {
  const seoDataPath = path.join(__dirname, "..", "src", "lib", "seo-data.ts");
  const content = fs.readFileSync(seoDataPath, "utf-8");
  
  const regex = /(?:sgpaPage|cgpaPage|attendancePage|percentagePage)\s*\(\s*["']([^"']+)["']/g;
  const slugs = [];
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  
  return slugs;
}

function generateSitemap() {
  const programmaticSlugs = extractSlugs();
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static routes (Home priority 1.0, main tools 0.9, others 0.8)
  for (const route of staticRoutes) {
    const priority = route === "" ? "1.0" : ["/sgpa", "/cgpa", "/attendance", "/percentage"].includes(route) ? "0.9" : "0.8";
    xml += `  <url>\n`;
    xml += `    <loc>${domain}${route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Global routes (priority 0.9)
  for (const route of globalRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}${route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.9</priority>\n`;
    xml += `  </url>\n`;
  }

  // Programmatic routes (priority 0.8)
  for (const slug of programmaticSlugs) {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/tools/${slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  const sitemapPath = path.join(__dirname, "..", "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, xml, "utf-8");
  
  console.log(`✅ Successfully generated sitemap.xml with ${staticRoutes.length + globalRoutes.length + programmaticSlugs.length} total URLs.`);
}

generateSitemap();
