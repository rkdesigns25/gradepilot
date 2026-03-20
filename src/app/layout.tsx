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
  title: "GradePilot: Free Academic & GPA Calculators for Students",
  description:
    "The most accurate suite of online academic calculators. Instantly calculate SGPA, CGPA, Attendance %, and Grades for students in India, USA, UK, Canada & Australia.",
  keywords: ["student academic calculators", "college gpa calculator", "grade calculator online", "free academic tools", "gpa calculator usa", "uk grading calculator", "sgpa calculator"],
  openGraph: {
    title: "GradePilot: Free Academic & GPA Calculators for Students Globally",
    description: "The most accurate suite of online academic calculators. Instantly calculate SGPA, CGPA, Attendance %, and Grades.",
    type: "website",
  },
  verification: {
    google: "jPTUB2m2wwVlWWa8RN8oMdykBtB3rh8DmxCiULqgNDE",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
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
