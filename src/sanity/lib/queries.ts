import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, mainImage, author->{name, image, bio}, publishedAt, excerpt, readTime, category->{title, slug}
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, slug, body, mainImage, author->{name, image, bio}, publishedAt, excerpt, readTime, category->{title, slug}
}`)

export const EXPERIENCES_QUERY = defineQuery(`*[_type == "experience"]{
  _id, jobTitle, company, startDate, endDate, "isCurrent": endDate.isCurrent, description, skills
}`)

export const EXPERIENCE_QUERY = defineQuery(`*[_type == "experience" && _id == $id][0]{
  _id, jobTitle, company, startDate, endDate, "isCurrent": endDate.isCurrent, description, skills
}`)

export const CASE_STUDIES_QUERY = defineQuery(`*[_type == "caseStudy"] | order(order asc){
  _id, title, year, description, stack, liveUrl, sourceUrl
}`)

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  "resumeUrl": resume.asset->url,
  resumeFileName
}`)