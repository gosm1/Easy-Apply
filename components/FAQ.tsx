export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="container faq-inner">
        <div className="section-label">FAQ</div>
        <h2>Questions you might have.</h2>

        <details open>
          <summary>Is it really free? What&rsquo;s the catch?</summary>
          <p>
            Actually free. There&rsquo;s no catch. I built this for myself during a bad
            week and putting it on the Chrome store costs me nothing. I&rsquo;d rather
            10,000 students use it than charge 100 of them.
          </p>
        </details>

        <details>
          <summary>Where does my data go?</summary>
          <p>
            Nowhere. Your links live in your browser&rsquo;s local storage. No server, no
            analytics, no account required. You can verify this yourself. The extension
            is open source.
          </p>
        </details>

        <details>
          <summary>
            What if I want to add more links like Twitter, personal email, etc.?
          </summary>
          <p>
            Right now EasyApply focuses on the three fields that show up in ~95% of job
            forms. More link types are on the list. If there&rsquo;s a specific one you
            need, open an issue on GitHub.
          </p>
        </details>

        <details>
          <summary>Does it work on Workday/Greenhouse/Lever/[random portal]?</summary>
          <p>
            Yes. EasyApply works on any website with regular text inputs, which is ~every
            job portal in existence. Right-click on any input field and it&rsquo;ll offer
            to fill it.
          </p>
        </details>

        <details>
          <summary>Can I use it for things that aren&rsquo;t job applications?</summary>
          <p>
            Sure. It&rsquo;s just a fancy right-click menu that drops in saved URLs. Use
            it for forms, signups, whatever. I just happened to build it because of
            internship season.
          </p>
        </details>
      </div>
    </section>
  )
}
