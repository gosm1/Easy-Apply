import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
})

const BASE_URL = "https://easyapply1.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "EasyApply: Auto-fill GitHub, LinkedIn & Portfolio on Any Job Form",
    template: "%s | EasyApply",
  },
  description:
    "Free Chrome extension that auto-fills your GitHub, LinkedIn, and portfolio links on any job application. One keystroke. Works on Greenhouse, Workday, Lever, and every other portal.",
  keywords: [
    "chrome extension",
    "job application autofill",
    "GitHub URL autofill",
    "LinkedIn autofill",
    "portfolio autofill",
    "job application tool",
    "internship application autofill",
    "Greenhouse autofill",
    "Workday autofill",
    "Lever autofill",
    "Ashby autofill",
    "student job search",
    "free chrome extension",
    "auto fill resume links",
    "easyapply chrome extension",
    "job hunt productivity",
    "PFE internship",
  ],
  authors: [{ name: "Elogss Mouhcine", url: BASE_URL }],
  creator: "Elogss Mouhcine",
  publisher: "EasyApply",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "EasyApply",
    title: "EasyApply: Auto-fill GitHub, LinkedIn & Portfolio on Any Job Form",
    description:
      "Free Chrome extension that auto-fills your GitHub, LinkedIn, and portfolio links on any job application. One keystroke. Works everywhere.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "EasyApply logo" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@easyapply",
    title: "EasyApply: Auto-fill GitHub, LinkedIn & Portfolio on Any Job Form",
    description:
      "Free Chrome extension that fills your GitHub, LinkedIn, and portfolio on any job form. Built by a student who got tired of copy-pasting.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/logo.png",
    shortcut: "/icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: BASE_URL,
  },
  category: "productivity",
  applicationName: "EasyApply",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
}

export const viewport: Viewport = {
  themeColor: "#0164ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
