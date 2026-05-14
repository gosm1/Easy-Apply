export default function Story() {
  return (
    <section className="story" id="story">
      <div className="container story-inner">
        <div className="section-label" style={{ color: "var(--brand)" }}>
          Why I built this
        </div>
        <h2>I&rsquo;m not a founder. I&rsquo;m a student who got tired.</h2>

        <div className="story-card">
          <div className="story-meta">
            <div>
              <div className="story-name">Elogss Mouhcine</div>
              <div className="story-role">CS Student &middot; PFE Internship Hunter</div>
            </div>
          </div>

          <div className="story-text">
            <p>
              Hey. I&rsquo;m a CS student, and last semester I was hunting for a PFE
              internship. I&rsquo;d open 20 tabs at a time, queue up a stack of
              applications, and tell myself this is the night I send ten of them.
            </p>
            <p>
              Then reality: 90% of the forms wanted links. GitHub here, LinkedIn there,
              portfolio in a field three scrolls down. I&rsquo;d fill half the form,
              realize I didn&rsquo;t have my GitHub URL copied, tab back to GitHub, copy,
              tab back, paste, then do it again for LinkedIn, then again for my portfolio.
              Every single application. Back and forth, back and forth, like a very sad
              human clipboard.
            </p>
            <p>
              Some nights I&rsquo;d open an application, see the wall of link fields, and
              just&hellip; close the tab. Not because the job was bad. Because I was
              already tired, and the idea of copy-pasting the same three URLs for the
              fiftieth time that week felt heavier than it should.
            </p>
            <p>
              One night, I think it was application number 62, I stopped mid-paste and
              thought:{" "}
              <span className="hl">
                this is what a computer is supposed to do for me, not to me.
              </span>{" "}
              So I closed the form, opened VSCode, and built EasyApply instead. It took a
              weekend. Filling out the next 40 applications took about{" "}
              <span className="hl">20 minutes.</span>
            </p>
            <p>
              I&rsquo;m sharing it for free because I know exactly what it feels like to
              close a tab at 2am because a form asked for one link too many. If this saves
              you even one application from being abandoned, that&rsquo;s a win.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
