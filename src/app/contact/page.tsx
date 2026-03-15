"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageSquare, Send, CheckCircle } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientButton } from "@/components/ui/GradientButton"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full bg-muted/50 dark:bg-muted/20 border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-violet-brand focus:border-transparent transition-all"
  const labelClass = "text-sm font-medium mb-2 block"

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-xl shadow-violet-500/25 mx-auto mb-6">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Have a question, suggestion, or found a bug? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <GlassCard className="text-center">
          <div className="w-10 h-10 rounded-xl bg-violet-brand/10 flex items-center justify-center mx-auto mb-3">
            <Mail className="w-5 h-5 text-violet-brand" />
          </div>
          <h3 className="font-semibold text-sm mb-1">Email</h3>
          <p className="text-xs text-muted-foreground">hello@gradepilot.app</p>
        </GlassCard>
        <GlassCard className="text-center">
          <div className="w-10 h-10 rounded-xl bg-violet-brand/10 flex items-center justify-center mx-auto mb-3">
            <MessageSquare className="w-5 h-5 text-violet-brand" />
          </div>
          <h3 className="font-semibold text-sm mb-1">Response Time</h3>
          <p className="text-xs text-muted-foreground">Within 24–48 hours</p>
        </GlassCard>
        <GlassCard className="text-center">
          <div className="w-10 h-10 rounded-xl bg-violet-brand/10 flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-5 h-5 text-violet-brand" />
          </div>
          <h3 className="font-semibold text-sm mb-1">Support</h3>
          <p className="text-xs text-muted-foreground">Free forever</p>
        </GlassCard>
      </div>

      <GlassCard>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">Thanks for reaching out. We&apos;ll get back to you soon.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }) }}
                className="mt-6 text-violet-brand text-sm hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Subject</label>
                <input
                  required
                  type="text"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us more..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="flex justify-end">
                <GradientButton type="submit" size="md" className="gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </GradientButton>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  )
}
