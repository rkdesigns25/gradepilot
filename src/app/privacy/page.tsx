import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — GradePilot",
  description: "GradePilot Privacy Policy. We don't collect any of your data — all calculations run locally in your browser.",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-3">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-muted-foreground">Last updated: March 2026</p>
      </div>

      <div className="glass rounded-2xl border border-white/10 dark:border-violet-brand/20 p-8 space-y-8 text-muted-foreground leading-relaxed">
        <Section title="1. Overview">
          GradePilot ("we", "us", "our") is committed to protecting your privacy. This privacy policy explains how
          we handle information when you use GradePilot at gradepilot.app.
        </Section>

        <Section title="2. Data We Collect">
          <strong className="text-foreground">We collect absolutely no personal data.</strong> All calculator inputs
          (marks, grades, credits, attendance counts) are processed entirely within your browser using JavaScript.
          No information is ever transmitted to any server, stored in any database, or shared with any third party.
        </Section>

        <Section title="3. Cookies & Storage">
          GradePilot may store your selected theme preference (dark/light mode) in your browser&apos;s localStorage.
          This data never leaves your device and contains no personal information.
        </Section>

        <Section title="4. Third-Party Services">
          GradePilot does not integrate with any advertising networks, analytics platforms, or third-party tracking
          services. We do not serve personalized advertisements.
        </Section>

        <Section title="5. Children's Privacy">
          GradePilot is suitable for students of all ages. Since we collect no data, there are no privacy risks
          for younger users.
        </Section>

        <Section title="6. Changes to This Policy">
          We may update this privacy policy from time to time. Any changes will be reflected on this page with an
          updated revision date.
        </Section>

        <Section title="7. Contact">
          If you have questions about this privacy policy, please reach out via our{" "}
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
