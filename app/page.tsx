import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Pain from "@/components/Pain"
import Story from "@/components/Story"
import HowItWorks from "@/components/HowItWorks"
import { Features } from "@/components/blocks/features-4"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import ScrollAnimator from "@/components/ScrollAnimator"

const SITE_URL = "https://easyapply1.vercel.app"
const STORE_URL =
  "https://chromewebstore.google.com/detail/easyapply-job-url-autofil/bonnjpebplkekihiokbfeeejkcbhfnfk"

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EasyApply",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free Chrome extension that auto-fills your GitHub, LinkedIn, and portfolio links on any job application form. Works on Greenhouse, Workday, Lever, and any portal with text inputs.",
  url: SITE_URL,
  installUrl: STORE_URL,
  downloadUrl: STORE_URL,
  author: { "@type": "Person", name: "Elogss Mouhcine" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is EasyApply really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free. No catch, no upgrade, no email required. Built by a student who put it on the Chrome Web Store at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my data go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nowhere. Your links live in your browser's local storage. No server, no analytics, no account. The extension is open source so you can verify this yourself.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on Workday, Greenhouse, Lever, and Ashby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EasyApply works on any site with regular text input fields, which is every job portal in existence. Right-click any input and it offers to fill it.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use it for things other than job applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It's a right-click menu that drops in saved URLs. Use it for forms, signups, or any field that needs your GitHub, LinkedIn, or portfolio link.",
      },
    },
  ],
}

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EasyApply",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [STORE_URL],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <Nav />
      <Hero />
      <Pain />
      <Story />
      <HowItWorks />
      <Features />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollAnimator />
    </>
  )
}
