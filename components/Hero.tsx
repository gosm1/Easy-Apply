export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow fade-up">
              <span className="eyebrow-dot"></span>
              Built by a student. For students. (who are tired.)
            </span>

            <h1 className="hero-title fade-up delay-1">
              <span style={{ display: "block" }}>
                I typed my GitHub URL{" "}<span className="num">247 times</span>{" "}last month.
              </span>
              <span style={{ display: "block" }}>
                So I{" "}<span className="strike">cried</span>{" "}built this.
              </span>
            </h1>

            <p className="hero-sub fade-up delay-2">
              <b>EasyApply</b> is a free Chrome extension that auto-fills your GitHub,
              LinkedIn, and portfolio links on <b>any</b> job application. Right-click
              or use a keyboard shortcut. Paste once, never type them again.
            </p>

            <div className="hero-ctas fade-up delay-3">
              <a href="/#install" className="btn btn-primary btn-large">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="21.17" y1="8" x2="12" y2="8" />
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                </svg>
                Add to Chrome, Free
              </a>
              <a href="/#how" className="btn btn-ghost btn-large">
                See how it works →
              </a>
            </div>

            <div className="hero-meta fade-up delay-4">
              <span className="check">Free forever</span>
              <span className="sep">·</span>
              <span className="check">No signup</span>
              <span className="sep">·</span>
              <span className="check">Data stays local</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="sticker">&ldquo;please stop asking for my LinkedIn&rdquo;</div>

            <div className="mock-browser">
              <div className="mock-browser-bar">
                <div className="mock-dot"></div>
                <div className="mock-dot"></div>
                <div className="mock-dot"></div>
                <div className="mock-url">careers.somecompany.com/apply/swe-intern</div>
              </div>
              <div className="mock-content">
                <div className="mock-form-title">Software Engineer Intern</div>
                <div className="mock-form-sub">Application: Step 2 of 4</div>

                <div className="mock-field">
                  <span className="mock-label">GitHub profile</span>
                  <div className="mock-input filling">github.com/yourname</div>
                </div>
                <div className="mock-field">
                  <span className="mock-label">LinkedIn</span>
                  <div className="mock-input">linkedin.com/in/yourname</div>
                </div>
                <div className="mock-field">
                  <span className="mock-label">Portfolio (optional)</span>
                  <div className="mock-input empty">https://...</div>
                </div>
              </div>
            </div>

            <div className="mock-ext">
              <div className="mock-ext-header">
                <div className="mock-ext-logo">
                  <svg viewBox="0 0 24 24">
                    <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
                  </svg>
                </div>
                <div>
                  <div className="mock-ext-title">EasyApply</div>
                  <div className="mock-ext-sub">Pick a link to fill</div>
                </div>
              </div>
              <div className="mock-ext-menu">
                <div className="mock-ext-item hover">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.47.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.5 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.68.42.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                  GitHub
                </div>
                <div className="mock-ext-item">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                  LinkedIn
                </div>
                <div className="mock-ext-item">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 17.93A8 8 0 0 1 5 12c0-.3.02-.58.06-.87L10 16v1a2 2 0 0 0 1 2v.93Zm6.9-2.55a2 2 0 0 0-1.9-1.38h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a8 8 0 0 1 2.9 12.79Z" />
                  </svg>
                  Portfolio
                </div>
                <div
                  className="mock-ext-item"
                  style={{
                    borderTop: "1px solid var(--border-soft)",
                    marginTop: "4px",
                    paddingTop: "8px",
                    color: "var(--muted)",
                    fontSize: "10.5px",
                  }}
                >
                  ⌥ Fill whole page
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
