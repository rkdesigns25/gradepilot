import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "GradePilot — Free Academic Calculators for Students",
  description:
    "Smart calculators for GPA, attendance, and marks. Calculate SGPA, CGPA, attendance percentage and more. Free, fast, and private.",
  keywords: ["SGPA calculator", "CGPA calculator", "attendance calculator", "GPA calculator", "grade calculator"],
  openGraph: {
    title: "GradePilot — Free Academic Calculators for Students",
    description: "Smart calculators for GPA, attendance, and marks. Work smarter, not harder.",
    type: "website",
  },
  verification: {
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
