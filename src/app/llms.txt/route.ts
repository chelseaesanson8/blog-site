import { client } from "@/sanity/lib/client"
import { LLMS_POSTS_QUERY } from '@/sanity/lib/queries'

export async function GET() {
  const baseUrl = "https://developedbychels.com"
  const posts = await client.fetch(LLMS_POSTS_QUERY)

  const postLines = posts
    .map((post) => `- [${post.title}](${baseUrl}/blog/${post.slug}): ${post.excerpt ?? ""}`)
    .join("\n")

  const content = `# Developed by Chels

> Personal portfolio and blog of Chelsea Sanson, a frontend developer based in Northeast Ohio.

## Pages
- [Home](${baseUrl}): Portfolio homepage with introduction, case studies, and contact
- [Blog](${baseUrl}/blog): Writing on frontend development, dev tooling, and personal projects

## Blog Posts
${postLines}
`

  return new Response(content, {
    headers: { "Content-Type": "text/plain" },
  })
}