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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EasyApply",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free Chrome extension that auto-fills your GitHub, LinkedIn, and portfolio links on any job application form. Works on Greenhouse, Workday, Lever, and any portal with text inputs.",
  url: "https://easyapply.vercel.app",
  installUrl:
    "https://chromewebstore.google.com/detail/easyapply-job-url-autofil/bonnjpebplkekihiokbfeeejkcbhfnfk",
  downloadUrl:
    "https://chromewebstore.google.com/detail/easyapply-job-url-autofil/bonnjpebplkekihiokbfeeejkcbhfnfk",
  author: { "@type": "Person", name: "Elogss Mouhcine" },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
