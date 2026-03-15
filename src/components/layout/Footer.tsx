"use client"

import Link from "next/link"
import { GraduationCap, Heart } from "lucide-react"

const footerLinks = {
  Calculators: [
    { href: "/sgpa", label: "SGPA Calculator" },
    { href: "/cgpa", label: "CGPA Calculator" },
    { href: "/attendance", label: "Attendance Calculator" },
    { href: "/percentage", label: "Percentage Calculator" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 dark:border-violet-brand/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">GradePilot</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free academic calculators for students. Work smarter, not harder.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-3 text-foreground/80">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-violet-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 dark:border-violet-brand/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1 flex-wrap justify-center sm:justify-start">
            Created &amp; Designed with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> by RK Shetty
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 GradePilot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
