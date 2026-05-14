export default function FinalCTA() {
  return (
    <section className="final-cta" id="install">
      <div className="container">
        <h2>
          Stop typing <i>github.com/yourname</i> by hand.
        </h2>
        <p>
          Install EasyApply, paste your three links, and reclaim your evenings. It takes
          about 30 seconds.
        </p>
        <a href="#" className="btn btn-white btn-large">
          <svg
            width="18"
            height="18"
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
        <div className="final-meta">
          <span>✓ Free forever</span>
          <span>✓ No signup</span>
          <span>✓ ~30 seconds to install</span>
        </div>
      </div>
    </section>
  )
}
