import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — GradePilot",
  description: "GradePilot Terms of Service. Free academic calculators for personal, non-commercial use.",
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-3">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-muted-foreground">Last updated: March 2026</p>
      </div>

      <div className="glass rounded-2xl border border-white/10 dark:border-violet-brand/20 p-8 space-y-8 text-muted-foreground leading-relaxed">
        <Section title="1. Acceptance of Terms">
          By accessing and using GradePilot, you agree to be bound by these Terms of Service. If you do not agree
          with any part of these terms, please do not use the service.
        </Section>

        <Section title="2. Use of Service">
          GradePilot is provided for personal, educational, and non-commercial use only. You may not use the service
          for any unlawful purpose or in a way that could harm other users or the operation of the website.
        </Section>

        <Section title="3. Accuracy of Calculations">
          While we strive for accuracy, GradePilot is provided "as is" without warranty of any kind. Calculator
          results should be used as a guide only. Always verify important academic decisions with your institution's
          official grading information.
        </Section>

        <Section title="4. Intellectual Property">
          All content, design, and code on GradePilot is owned by GradePilot and protected by applicable intellectual
          property laws. You may not reproduce, distribute, or create derivative works without written permission.
        </Section>

        <Section title="5. Disclaimer of Warranties">
          GradePilot is provided on an "as is" and "as available" basis. We make no warranties, express or implied,
          regarding the correctness, reliability, or fitness for any particular purpose.
        </Section>

        <Section title="6. Limitation of Liability">
          In no event shall GradePilot be liable for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of the service.
        </Section>

        <Section title="7. Changes to Terms">
          We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes
          acceptance of the new terms.
        </Section>

        <Section title="8. Contact">
          For questions about these terms, please visit our{" "}
          <a href="/contact" className="text-violet-brand hover:underline">Contact page</a>.
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-foreground mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  )
}
