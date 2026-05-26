import type { MetadataRoute } from "next"

const BASE_URL = "https://easyapply1.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}
