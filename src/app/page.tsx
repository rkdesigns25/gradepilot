"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { Calculator, BookOpen, BarChart3, Percent, ArrowRight, Star, Shield, Zap, CheckCircle } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientButton } from "@/components/ui/GradientButton"
import { FAQSchema, SoftwareApplicationSchema, BreadcrumbSchema } from "@/components/seo/JsonLd"

const tools = [
  {
    icon: Calculator,
    title: "SGPA Calculator",
    description: "Calculate your Semester Grade Point Average with automatic mark-to-grade conversion.",
    href: "/sgpa",
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/25",
  },
  {
    icon: BookOpen,
    title: "CGPA Calculator",
    description: "Compute your Cumulative GPA across all semesters with weighted credit system.",
    href: "/cgpa",
    color: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-500/25",
  },
  {
    icon: BarChart3,
    title: "Attendance Calculator",
    description: "Track attendance percentage, find how many classes you can skip or must attend.",
    href: "/attendance",
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/25",
  },
  {
    icon: Percent,
    title: "Percentage Calculator",
    description: "Convert marks to percentage, find marks needed for a target percentage and more.",
    href: "/percentage",
    color: "from-orange-500 to-rose-500",
    glow: "shadow-orange-500/25",
  },
]

const features = [
  {
    icon: Zap,
    title: "Instant Results",
    description: "Real-time calculations as you type. No waiting, no page loads.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "All calculations run in your browser. Zero data is stored or shared.",
  },
  {
    icon: Star,
    title: "Completely Free",
    description: "No sign-ups, no ads that interrupt you. Free forever for every student.",
  },
  {
    icon: CheckCircle,
    title: "Always Accurate",
    description: "Built with standard university grading formulas you can trust.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="animate-float absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 dark:opacity-10 blur-3xl bg-gradient-to-br from-violet-400 to-purple-600" />
        <div className="animate-float-delay absolute top-1/2 -left-40 w-80 h-80 rounded-full opacity-15 dark:opacity-10 blur-3xl bg-gradient-to-br from-blue-400 to-indigo-500" />
        <div className="absolute bottom-20 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-pink-400 to-rose-500" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-brand/30 bg-violet-brand/10 text-violet-brand text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              Free Academic Tools for Students
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="gradient-text">GradePilot</span>
              <br />
              <span className="text-foreground/90 text-4xl sm:text-5xl lg:text-6xl">
                Academic Calculators
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Smart calculators for GPA, attendance, and marks.
              <br />
              <span className="text-foreground/70 font-medium">Work smarter, not harder.</span>
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/sgpa">
                <GradientButton size="lg" className="gap-2 group">
                  Start Calculating
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
              </Link>
              <Link href="/attendance">
                <GradientButton variant="outline" size="lg">
                  Check Attendance
                </GradientButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating icons */}
          <div className="absolute top-32 left-10 hidden lg:block">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-violet-500/30 opacity-70"
            >
              <Calculator className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <div className="absolute top-48 right-10 hidden lg:block">
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg opacity-70"
            >
              <BarChart3 className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              All the tools you need,{" "}
              <span className="gradient-text">in one place</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Four powerful calculators built for students, designed for clarity.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <motion.div key={tool.href} variants={itemVariants}>
                  <Link href={tool.href} className="block h-full group">
                    <GlassCard hover className="h-full flex flex-col gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg ${tool.glow} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-violet-brand transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-violet-brand text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Open calculator
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why students love{" "}
              <span className="gradient-text">GradePilot</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <GlassCard className="text-center h-full flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-xl bg-violet-brand/10 border border-violet-brand/20 flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-violet-brand" />
                    </div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative rounded-3xl overflow-hidden p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800 opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_70%)]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to ace your grades?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Start using GradePilot today. Free, fast, and completely private.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sgpa">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-white text-violet-700 font-bold text-base shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    Calculate SGPA
                  </motion.button>
                </Link>
                <Link href="/cgpa">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 transition-all"
                  >
                    Calculate CGPA
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================================================
        SEO CONTENT INJECTION (Below the fold)
        ======================================================================== 
      */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
        <div className="max-w-4xl mx-auto prose prose-violet dark:prose-invert">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Top Academic Tools for College Students</h2>
          <p>
            Navigating college academics requires precision. GradePilot provides the most accurate suite of <strong>free student academic calculators</strong> online. Whether you are tracking your <strong>Semester Grade Point Average (SGPA)</strong> after a tough exam cycle, converting your <strong>Cumulative GPA (CGPA)</strong> into a percentage for job placements, or calculating exactly how many classes you can afford to skip, our platform is designed to give you instant, reliable answers.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Global Grading Systems Supported</h2>
          <p>
            Unlike region-specific tools, GradePilot is built as a truly global <strong>grade calculator online</strong>. We natively support:
          </p>
          <ul>
            <li><strong>India (UGC/AICTE):</strong> Standard 10-point scale CBCS systems used across VTU, Mumbai University, Anna University, and more.</li>
            <li><strong>USA (4.0 Scale):</strong> Traditional letter grade weighting (A=4.0, A-=3.7) used natively by the <strong>college GPA calculator</strong> engine.</li>
            <li><strong>UK (Honours):</strong> Classification systems (First-class, 2:1, 2:2) to help UK students gauge their final degree outcome.</li>
            <li><strong>Canada & Australia:</strong> 4.0 variants and 7.0 WAM (Weighted Average Mark) calculators seamlessly integrated.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">Why accurate grade tracking matters</h3>
          <p>
            Your GPA is the primary metric evaluating your academic trajectory. Utilizing a <strong>free academic tool</strong> to monitor your grades semester-by-semester prevents unpleasant surprises during final year placements. Our calculators automatically handle the complex credit-weighting algorithms so you don't have to manually apply the conversion formulas.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              { q: "Is GradePilot completely free to use?", a: "Yes, GradePilot is 100% free with no hidden fees, no required sign-ups, and absolutely no data tracking." },
              { q: "How accurate is the SGPA and CGPA calculator?", a: "Our calculators use the exact academic formulas prescribed by global university standards (such as the UGC CBCS 10-point scale and the US 4.0 scale), ensuring 100% mathematical accuracy based on the credits and grades you input." },
              { q: "Does the attendance calculator account for the 75% rule?", a: "Yes. The attendance calculator defaults to the standard 75% minimum required by most Indian universities, but you can manually adjust your target percentage to 80% or any other threshold required by your specific college." },
              { q: "Can I use GradePilot on my mobile phone?", a: "Absolutely. GradePilot is a fully responsive Web Application optimized for seamless use on all mobile devices and tablets." },
              { q: "Do you store my grades or attendance data?", a: "No. All calculations are performed strictly client-side within your own web browser. We do not store, track, or share any of your academic data." }
            ].map((faq, i) => (
              <div key={i} className="bg-background border border-border/50 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* JSON-LD Schemas */}
        <FAQSchema
          faqs={[
            { question: "Is GradePilot completely free to use?", answer: "Yes, GradePilot is 100% free with no hidden fees, no required sign-ups, and absolutely no data tracking." },
            { question: "How accurate is the SGPA and CGPA calculator?", answer: "Our calculators use the exact academic formulas prescribed by global university standards (such as the UGC CBCS 10-point scale and the US 4.0 scale), ensuring 100% mathematical accuracy based on the credits and grades you input." },
            { question: "Does the attendance calculator account for the 75% rule?", answer: "Yes. The attendance calculator defaults to the standard 75% minimum required by most Indian universities, but you can manually adjust your target percentage to 80% or any other threshold required by your specific college." },
            { question: "Can I use GradePilot on my mobile phone?", answer: "Absolutely. GradePilot is a fully responsive Web Application optimized for seamless use on all mobile devices and tablets." },
            { question: "Do you store my grades or attendance data?", answer: "No. All calculations are performed strictly client-side within your own web browser. We do not store, track, or share any of your academic data." }
          ]}
        />
        <SoftwareApplicationSchema
          name="GradePilot Academic Calculators"
          description="A comprehensive suite of academic tools including SGPA, CGPA, Attendance, and Percentage calculators for global university students."
          applicationCategory="EducationalApplication"
        />
        <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />
      </section>
    </div>
  )
}
