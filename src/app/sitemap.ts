import type { MetadataRoute } from "next"
import { client } from "@/sanity/lib/client"
import { SITEMAP_POSTS_QUERY } from "@/sanity/lib/queries"


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.developedbychels.com"
  const posts = await client.fetch(SITEMAP_POSTS_QUERY)

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt ?? post.publishedAt ?? new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postUrls,
  ]
}