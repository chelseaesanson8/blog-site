import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, mainImage, author->{name}, publishedAt
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage, author->{name}
}`)

export const EXPERIENCES_QUERY = defineQuery(`*[_type == "experience"]{
  _id, jobTitle, company, startDate, endDate, "isCurrent": endDate.isCurrent, description, skills
}`)

export const EXPERIENCE_QUERY = defineQuery(`*[_type == "experience" && _id == $id][0]{
  _id, jobTitle, company, startDate, endDate, "isCurrent": endDate.isCurrent, description, skills
}`)