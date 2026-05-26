import type { Metadata } from "next"
import { LifeBuoy, AlertCircle, Keyboard, Trash2, Bug, Lightbulb, Mail, Code2 } from "lucide-react"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with EasyApply. Common issues, troubleshooting tips, and how to reach a real human.",
  alternates: { canonical: "https://easyapply1.vercel.app/support" },
}

const issues = [
  {
    icon: AlertCircle,
    title: "The extension isn't filling my form",
    body: (
      <>
        Some sites use custom React/Vue inputs that block scripted typing.
        In those cases EasyApply falls back to copying the link to your
        clipboard so you can paste with <b>Ctrl/Cmd + V</b>. If the field
        still won&rsquo;t accept anything, it&rsquo;s the site, not the extension.
      </>
    ),
  },
  {
    icon: AlertCircle,
    title: 'Right-click menu doesn\'t show "EasyApply"',
    body: (
      <>
        Make sure you&rsquo;re right-clicking <i>inside an input field</i>,
        not on a blank area. The menu only appears for editable text inputs.
      </>
    ),
  },
  {
    icon: Keyboard,
    title: "Keyboard shortcuts aren't working",
    body: (
      <>
        Another extension might be hijacking the same shortcut. Open{" "}
        <code>chrome://extensions/shortcuts</code> to check and reassign{" "}
        <b>Alt + Shift + G / L / K</b> if needed.
      </>
    ),
  },
  {
    icon: AlertCircle,
    title: '"Fill whole page" didn\'t fill everything',
    body: (
      <>
        EasyApply matches fields by label (GitHub, LinkedIn, Portfolio).
        If a site uses an unusual label like &ldquo;Personal Website
        URL&rdquo;, it might miss it. Right-click that field and pick the
        link manually.
      </>
    ),
  },
  {
    icon: AlertCircle,
    title: "I lost my saved links",
    body: (
      <>
        EasyApply stores data in your browser&rsquo;s local storage. If you
        cleared browser data, switched Chrome profiles, or reinstalled the
        extension, your links went with it. Re-adding takes 10 seconds.
      </>
    ),
  },
  {
    icon: Trash2,
    title: "How do I delete all my data?",
    body: (
      <>
        Open the extension &rarr; Settings &rarr; <b>Clear all data</b>.
        Or uninstall. Either erases everything.
      </>
    ),
  },
]

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="container">
          <div className="legal-hero">
            <div className="legal-badge">
              <LifeBuoy size={14} />
              <span>Support</span>
            </div>
            <h1>Stuck on something? Let&rsquo;s unstick it.</h1>
            <p className="legal-lead">
              EasyApply is a one-student operation. No support team, no ticket
              queue, no chatbot. Just me, replying when I see it. Most issues
              have answers below.
            </p>
          </div>

          <section className="legal-section">
            <div className="legal-section-head">
              <AlertCircle size={20} color="var(--brand)" />
              <h2>Common issues</h2>
            </div>
            <div className="support-list">
              {issues.map((issue, i) => {
                const Icon = issue.icon
                return (
                  <div key={i} className="support-card">
                    <div className="support-card-head">
                      <Icon size={16} color="var(--brand)" />
                      <h3>{issue.title}</h3>
                    </div>
                    <p>{issue.body}</p>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="legal-section">
            <div className="legal-section-head">
              <Bug size={20} color="var(--brand)" />
              <h2>Found a bug?</h2>
            </div>
            <p>
              Open an issue on the{" "}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                EasyApply GitHub repo
              </a>
              . Include which site you were on, what you expected, what
              actually happened, and a screenshot if you have one. More detail
              = faster fix.
            </p>
          </section>

          <section className="legal-section">
            <div className="legal-section-head">
              <Lightbulb size={20} color="var(--brand)" />
              <h2>Want a feature?</h2>
            </div>
            <p>
              Same place. Open a GitHub issue tagged{" "}
              <code>feature request</code>. I read every one. I can&rsquo;t
              build everything, but the popular ones get done.
            </p>
          </section>

          <div className="support-cta">
            <div className="support-cta-icon">
              <Mail size={24} />
            </div>
            <div className="support-cta-body">
              <h3>Just want to email a human?</h3>
              <p>
                Hit me at{" "}
                <a href="mailto:contact@easyapply.com">contact@easyapply.com</a>.
                Response usually within a few days, sometimes same-day if
                it&rsquo;s not exam week.
              </p>
            </div>
            <a
              href="mailto:contact@easyapply.com"
              className="btn btn-primary support-cta-btn"
            >
              Email me
            </a>
          </div>

          <div className="support-secondary">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="support-link-card"
            >
              <Code2 size={20} />
              <div>
                <strong>GitHub</strong>
                <span>Bugs, features, source code</span>
              </div>
            </a>
            <a href="/#faq" className="support-link-card">
              <LifeBuoy size={20} />
              <div>
                <strong>FAQ</strong>
                <span>Quick answers to common questions</span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
