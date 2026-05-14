export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="how-header">
          <div className="section-label">How it works</div>
          <h2>Set it up once. Use it forever.</h2>
          <p>
            Three steps. Then every application form in the world is basically one
            right-click away from done.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <span className="step-num">01</span>
            <h3>Paste your links once</h3>
            <p>
              Open EasyApply, drop in your GitHub, LinkedIn, and portfolio URLs. Hit save.
              That&rsquo;s the whole setup.
            </p>
            <div className="demo">github.com/yourname ✓</div>
          </div>
          <div className="step">
            <span className="step-num">02</span>
            <h3>Right-click any input</h3>
            <p>
              On any job form: Greenhouse, Workday, Lever, random startup portals.
              Right-click the field and pick which link to drop in.
            </p>
            <div className="demo">right-click → EasyApply → GitHub</div>
          </div>
          <div className="step">
            <span className="step-num">03</span>
            <h3>Or nuke the whole form</h3>
            <p>
              Too many fields? Right-click anywhere on the page and hit{" "}
              <b>Fill whole page</b>. EasyApply finds the right boxes and fills them all.
            </p>
            <div className="demo">→ 3 fields filled in 0.2s</div>
          </div>
        </div>

        <div className="shortcut-banner">
          <div className="text">
            <b>Power user?</b> Skip the menu entirely. Keyboard shortcuts work on any
            focused input.
          </div>
          <div className="keys">
            <span>
              <span className="kbd">Alt</span>+<span className="kbd">Shift</span>+
              <span className="kbd">G</span> GitHub
            </span>
            <span>
              <span className="kbd">Alt</span>+<span className="kbd">Shift</span>+
              <span className="kbd">L</span> LinkedIn
            </span>
            <span>
              <span className="kbd">Alt</span>+<span className="kbd">Shift</span>+
              <span className="kbd">K</span> Portfolio
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
