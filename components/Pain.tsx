export default function Pain() {
  return (
    <section className="pain">
      <div className="container pain-inner">
        <div className="section-label">The problem</div>
        <h2>
          Application n1: <i>excited.</i>
          <br />
          Application n50: <i>dead inside.</i>
          <br />
          Application n100: wrists hurt. soul hurts more.
        </h2>

        <div className="pain-grid">
          <div className="pain-stat">
            <span className="num">
              6.2<span className="unit">min</span>
            </span>
            <p>
              Average time a student spends typing the same links into a single job
              application form.
            </p>
          </div>
          <div className="pain-stat">
            <span className="num">
              80+<span className="unit">apps</span>
            </span>
            <p>
              Typical number of internship applications per student during recruiting
              season.
            </p>
          </div>
          <div className="pain-stat">
            <span className="num">
              8<span className="unit">hrs</span>
            </span>
            <p>
              Hours lost per month to mindlessly typing{" "}
              <code
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "12px",
                  opacity: 0.8,
                }}
              >
                github.com/yourname
              </code>
              . Gone. Forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
