// ── Terms of Service ────────────────────────────────────────────────────────

export type TermsSection = {
  title: string
  body?: string
  items?: string[]
}

// ── FAQ ─────────────────────────────────────────────────────────────────────

export type FAQ = {
  q: string
  a: string
}

export type FAQSection = {
  heading: string
  questions: FAQ[]
}

// ── Dispute Policy ──────────────────────────────────────────────────────────

export type DisputePolicySubsection = {
  title: string
  text: string
}

export type DisputePolicySection = {
  heading: string
  items?: string[]
  subsections?: DisputePolicySubsection[]
}

// ── Privacy Policy ──────────────────────────────────────────────────────────

export type PrivacySection = {
  title: string
  body?: string
  items?: string[]
}

// ── About ───────────────────────────────────────────────────────────────────

export type AboutSection = {
  heading: string
  paragraphs: string[]
}
