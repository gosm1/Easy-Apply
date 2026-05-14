'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { useScroll } from 'motion/react'

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
    },
  },
}

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'How it works', href: '#how' },
  { name: 'FAQ', href: '#faq' },
]

const portals = ['Greenhouse', 'Workday', 'Lever', 'Ashby', 'LinkedIn', 'Rippling', 'SmartRecruiters', 'JazzHR']

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <div className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--bg)_75%)]" />
            <div className="mx-auto max-w-5xl px-6">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
                  },
                  ...transitionVariants,
                }}
              >
                <div className="flex justify-start">
                  <span className="eyebrow">
                    <span className="eyebrow-dot" />
                    Built by a student. For students. (who are tired.)
                  </span>
                </div>

                <h1 className="hero-title mt-4 mb-6">
                  <span style={{ display: 'block' }}>
                    I typed my GitHub URL <span className="num">247&nbsp;times</span> last&nbsp;month.
                  </span>
                  <span style={{ display: 'block' }}>
                    So I <span className="strike">cried</span> built&nbsp;this.
                  </span>
                </h1>

                <p className="hero-sub">
                  <b>EasyApply</b> is a free Chrome extension that auto-fills your GitHub,
                  LinkedIn, and portfolio links on <b>any</b> job application, with a
                  right-click or a keyboard shortcut. Paste once. Never type them again.
                </p>

                <div className="flex items-center gap-3 flex-wrap mt-0 mb-8">
                  <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Button asChild size="lg" className="rounded-xl px-5 text-base">
                      <a href="#install">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
                          <line x1="21.17" y1="8" x2="12" y2="8" />
                          <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                          <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                        </svg>
                        <span className="text-nowrap">Add to Chrome, Free</span>
                      </a>
                    </Button>
                  </div>
                  <Button asChild size="lg" variant="ghost" className="h-[44px] rounded-xl px-5 text-base">
                    <a href="#how">
                      <span className="text-nowrap">See how it works →</span>
                    </a>
                  </Button>
                </div>

                <div className="hero-meta">
                  <span className="check">Free forever</span>
                  <span className="sep">·</span>
                  <span className="check">No signup</span>
                  <span className="sep">·</span>
                  <span className="check">Data stays local</span>
                </div>
              </AnimatedGroup>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-12 overflow-hidden px-4 md:mt-20">
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-[var(--bg)]"
                />
                <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border bg-[var(--paper)] p-4 shadow-lg shadow-zinc-950/10 ring-1 ring-[var(--border-soft)]">
                  <div className="hero-visual mx-auto" style={{ maxWidth: '560px' }}>
                    <div className="sticker">&ldquo;please stop asking for my LinkedIn&rdquo;</div>

                    <div className="mock-browser">
                      <div className="mock-browser-bar">
                        <div className="mock-dot" /><div className="mock-dot" /><div className="mock-dot" />
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
                          <svg viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" /></svg>
                        </div>
                        <div>
                          <div className="mock-ext-title">EasyApply</div>
                          <div className="mock-ext-sub">Pick a link to fill</div>
                        </div>
                      </div>
                      <div className="mock-ext-menu">
                        <div className="mock-ext-item hover">
                          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.47.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.5 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.68.42.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
                          GitHub
                        </div>
                        <div className="mock-ext-item">
                          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
                          LinkedIn
                        </div>
                        <div className="mock-ext-item">
                          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 17.93A8 8 0 0 1 5 12c0-.3.02-.58.06-.87L10 16v1a2 2 0 0 0 1 2v.93Zm6.9-2.55a2 2 0 0 0-1.9-1.38h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a8 8 0 0 1 2.9 12.79Z" /></svg>
                          Portfolio
                        </div>
                        <div className="mock-ext-item" style={{ borderTop: '1px solid var(--border-soft)', marginTop: '4px', paddingTop: '8px', color: 'var(--muted)', fontSize: '10.5px' }}>
                          ⌥ Fill whole page
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        <section className="pb-16 pt-16 md:pb-24">
          <div className="group relative mx-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <span className="text-sm" style={{ color: 'var(--muted)' }}>Works on any site with a text input</span>
            </div>
            <p className="text-center text-xs font-medium tracking-widest uppercase mb-8" style={{ color: 'var(--muted)' }}>
              Works on every platform
            </p>
            <div className="group-hover:blur-sm mx-auto grid max-w-2xl grid-cols-4 gap-x-12 gap-y-6 transition-all duration-500 group-hover:opacity-40">
              {portals.map((portal) => (
                <div key={portal} className="flex items-center justify-center">
                  <span className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>{portal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export function HeroHeader() {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
        className={cn(
          'group fixed z-20 w-full border-b border-[var(--border-soft)] transition-colors duration-150',
          scrolled && 'backdrop-blur-3xl'
        )}
        style={
          scrolled
            ? { background: 'rgba(250,248,243,0.6)' }
            : { background: 'transparent', backdropFilter: 'none', WebkitBackdropFilter: 'none' }
        }
      >
        <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <a href="#" className="logo" aria-label="home">
                <span className="logo-mark">
                  <svg viewBox="0 0 24 24">
                    <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
                  </svg>
                </span>
                <span className="logo-text">EasyApply</span>
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block duration-150"
                        style={{ color: 'var(--muted)', fontWeight: 500 }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={cn(
                'mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-[var(--border)] p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:p-0 lg:shadow-none',
                menuState && 'block'
              )}
              style={{ background: menuState ? 'var(--paper)' : 'transparent' }}
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block duration-150"
                        style={{ color: 'var(--muted)' }}
                        onClick={() => setMenuState(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild size="sm">
                  <a href="#install">Add to Chrome, Free</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
