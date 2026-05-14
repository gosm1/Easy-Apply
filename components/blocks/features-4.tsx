import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Works on any job site',
    description: 'Greenhouse, Workday, Lever, Ashby, random startup portals. If it has a text input, EasyApply fills it.',
  },
  {
    icon: Cpu,
    title: 'Fill the whole page at once',
    description: 'One keystroke fills every link field on the page. No hunting, no scrolling, no clicking through fields one by one.',
  },
  {
    icon: Fingerprint,
    title: 'Your data never leaves',
    description: "Your links live in your browser. No server, no account, no tracking. Verify it yourself. It's open source.",
  },
  {
    icon: Settings2,
    title: 'Track your applications',
    description: 'Every company you fill for gets quietly logged in the History tab. Finally know where you actually applied.',
  },
  {
    icon: Pencil,
    title: 'Keyboard-first',
    description: 'Alt+Shift+G, L, or K. Three shortcuts, three links, hands never leave the keyboard.',
  },
  {
    icon: Sparkles,
    title: 'Free. Actually free.',
    description: "No trial. No freemium. No upgrade to Pro. Built for broke students, charging them would be on-brand.",
  },
]

export function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-label">Features</div>
        <h2>Six reasons to never type your GitHub URL again.</h2>
        <p className="sub">Built for students in recruiting season. No fluff, no upsells.</p>

        <div className="features-grid-new">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="feature-cell">
                <div className="feature-cell-icon">
                  <Icon size={15} color="var(--brand)" />
                  <h3>{f.title}</h3>
                </div>
                <p>{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
