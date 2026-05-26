# EasyApply Landing Page

> The marketing site for [EasyApply](https://easyapply1.vercel.app), a free Chrome extension that auto-fills your GitHub, LinkedIn, and portfolio links on any job application.

Built by a student who got tired of typing `github.com/yourname` for the fiftieth time at 2am.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)

---

## What is this

This repo is just the landing page. The actual Chrome extension lives in a separate repo. This site exists to:

1. Tell the story (a student got tired, built the thing, you can have it for free)
2. Show how the extension works
3. Send people to the Chrome Web Store
4. Host the privacy policy and support pages that Google requires for extension submission

If you're looking for the extension itself, that's elsewhere. This is the public-facing site.

## Tech stack

| Thing | What's used |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 plus hand-written CSS for everything custom |
| Fonts | Geist Sans (body), Fraunces (headings), Geist Mono (code) |
| Icons | lucide-react |
| Animations | motion (Framer Motion successor), CSS keyframes, IntersectionObserver |
| Hosting | Vercel |

No CMS, no database, no analytics, no third-party trackers. Just a static-ish marketing page.

## Design choices worth mentioning

* **No CMS.** All copy is inline JSX. If a marketing site has fewer than 10 pages and changes rarely, a CMS adds more pain than it removes.
* **Fraunces for headings.** It's a serif with personality (variable axes for SOFT and WONK), which fits a brand voice that's supposed to feel like a real person wrote it.
* **No motion library overkill.** A single IntersectionObserver handles every fade-up animation on the page. No per-component motion logic.
* **Hand-written CSS.** Tailwind v4 is configured and available, but the design language uses a lot of custom CSS variables. Mixing both was faster than fighting either.
* **Privacy and Support are real pages.** Not just placeholders. Chrome Web Store reviewers actually read these, and a thoughtful policy page is part of the submission.

## SEO

* Open Graph and Twitter Card metadata
* JSON-LD SoftwareApplication schema
* Sitemap at `/sitemap.xml`, robots at `/robots.txt`
* Canonical URLs set per page
* Favicon and icons resolved through Next.js metadata conventions

## License

MIT. Copy whatever's useful.

## Credits

Made by Elogss Mouhcine. CS student, internship hunter, occasional weekend tool-builder.

If this saved you even one application from being abandoned at 2am, that's the win. Drop me an email at [contact@easyapply.com](mailto:contact@easyapply.com).
