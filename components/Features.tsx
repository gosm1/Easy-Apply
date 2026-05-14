export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3>Works on any job site</h3>
            <p>
              Greenhouse, Workday, Lever, Ashby, random startup portals. If it has a text
              input, EasyApply fills it.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>Fill whole page in one click</h3>
            <p>
              One keystroke and EasyApply intelligently matches every link field on the
              page. No more scrolling to find &ldquo;GitHub.&rdquo;
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Your data never leaves</h3>
            <p>
              Everything lives locally in your browser. No server, no account, no
              tracking. I don&rsquo;t want your data. I&rsquo;m a student, not a VC.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6M14 11v6" />
              </svg>
            </div>
            <h3>Track your applications</h3>
            <p>
              Every company you fill for gets quietly logged in the History tab. Finally, a
              list of where you actually applied.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <path d="M6 8h.01M10 8h.01M14 8h.01M6 12h.01M10 12h12M6 16h12" />
              </svg>
            </div>
            <h3>Keyboard-first</h3>
            <p>
              Three shortcuts. Alt+Shift+G, L, or K. Your hands never leave the keyboard.
              (Your dignity, mostly intact.)
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Free. Actually free.</h3>
            <p>
              No trial. No freemium. No &ldquo;upgrade to Pro.&rdquo; I built this for
              broke students, charging them would be extremely on-brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
