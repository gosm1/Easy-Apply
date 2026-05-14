import type { Metadata } from "next"
import { Shield, Lock, Database, X, Trash2, Code2, Mail } from "lucide-react"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "EasyApply's privacy policy. We don't collect, transmit, or share any of your data. Everything lives in your browser.",
  alternates: { canonical: "https://easyapply.vercel.app/privacy" },
}

const promises = [
  { icon: X, label: "No servers" },
  { icon: X, label: "No analytics" },
  { icon: X, label: "No tracking" },
  { icon: X, label: "No accounts" },
  { icon: X, label: "No cookies" },
  { icon: X, label: "No selling data" },
]

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="container">
          <div className="legal-hero">
            <div className="legal-badge">
              <Shield size={14} />
              <span>Privacy Policy</span>
            </div>
            <h1>Your data stays on your device. Full stop.</h1>
            <p className="legal-lead">
              EasyApply has no server, no analytics, no account system, no
              tracking. Everything it knows about you lives in your browser, on
              your device, and never goes anywhere else.
            </p>
            <div className="legal-meta-row">
              <span>Last updated: May 14, 2026</span>
              <span className="legal-dot">·</span>
              <span>Reading time: ~90 seconds</span>
            </div>
          </div>

          <div className="legal-promises">
            {promises.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="promise-card">
                  <Icon size={16} />
                  <span>{p.label}</span>
                </div>
              )
            })}
          </div>

          <section className="legal-section">
            <div className="legal-section-head">
              <Database size={20} color="var(--brand)" />
              <h2>What we store locally</h2>
            </div>
            <p>
              Two things get saved in your browser&rsquo;s local storage
              (via Chrome&rsquo;s <code>chrome.storage.local</code> API):
            </p>
            <div className="legal-data-grid">
              <div className="data-card">
                <div className="data-card-num">01</div>
                <h3>Your three links</h3>
                <p>
                  Your GitHub URL, your LinkedIn URL, and your portfolio URL.
                  The ones you type into the extension yourself.
                </p>
              </div>
              <div className="data-card">
                <div className="data-card-num">02</div>
                <h3>Your application history</h3>
                <p>
                  A list of websites where you triggered an autofill, so the
                  History tab can show you where you already applied.
                </p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <div className="legal-section-head">
              <Lock size={20} color="var(--brand)" />
              <h2>Permissions, plainly</h2>
            </div>
            <p>
              EasyApply asks for a few Chrome permissions because they&rsquo;re
              required for the extension to work. Here&rsquo;s what each one
              actually does:
            </p>
            <div className="perm-list">
              <div className="perm-row">
                <code>storage</code>
                <span>Save your 3 links and history on your own device.</span>
              </div>
              <div className="perm-row">
                <code>activeTab</code>
                <span>Put a link into a form field on the tab you&rsquo;re looking at, when you ask.</span>
              </div>
              <div className="perm-row">
                <code>scripting</code>
                <span>Inject the chosen link into the right input field.</span>
              </div>
              <div className="perm-row">
                <code>contextMenus</code>
                <span>Add the right-click &ldquo;Fill with EasyApply&rdquo; option.</span>
              </div>
              <div className="perm-row">
                <code>host permissions</code>
                <span>Job forms live on every domain (Greenhouse, Workday, Lever, custom portals). The extension only runs when you trigger it, never silently.</span>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <div className="legal-section-head">
              <Trash2 size={20} color="var(--brand)" />
              <h2>Delete everything, anytime</h2>
            </div>
            <p>
              Open the extension &rarr; Settings &rarr; <b>Clear all data</b>.
              Or uninstall the extension. Either erases every byte EasyApply
              has ever stored. Nothing else exists anywhere.
            </p>
          </section>

          <section className="legal-section">
            <div className="legal-section-head">
              <Code2 size={20} color="var(--brand)" />
              <h2>Open source, verify it yourself</h2>
            </div>
            <p>
              EasyApply is open source. If you want to verify any of this
              instead of taking my word for it, read the entire codebase on
              GitHub.
            </p>
          </section>

          <div className="legal-contact-card">
            <Mail size={22} color="var(--brand)" />
            <div>
              <h3>Questions or concerns?</h3>
              <p>
                Email <a href="mailto:contact@easyapply.com">contact@easyapply.com</a>.
                I read every message myself.
              </p>
            </div>
          </div>

          <p className="legal-footnote">
            If this policy ever changes, the &ldquo;Last updated&rdquo; date at
            the top will too. The whole thing is short enough to re-read in 90 seconds.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
