import { groq } from 'next-sanity'

// Get all articles
export const ARTICLES_QUERY = groq`*[_type == "article"] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  image,
  date,
  category,
  featured
}`

// Get a single article by slug
export const ARTICLE_BY_SLUG_QUERY = groq`*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  image,
  content,
  date,
  category,
  featured
}`

// Get featured articles
export const FEATURED_ARTICLES_QUERY = groq`*[_type == "article" && featured == true] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  image,
  date,
  category,
  featured
}`
