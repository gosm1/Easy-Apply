"use client"

import { useEffect } from "react"

export default function ScrollAnimator() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.style.opacity = ""
            el.style.transform = ""
            el.style.animation = "fadeUp 0.7s ease forwards"
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px 60px 0px" }
    )

    document
      .querySelectorAll(".step, .feature, .pain-stat, .pain-quote, .story-card")
      .forEach((el) => {
        const elem = el as HTMLElement
        elem.style.opacity = "0"
        elem.style.transform = "translateY(20px)"
        io.observe(el)
      })

    return () => io.disconnect()
  }, [])

  return null
}
