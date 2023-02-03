// export all Queries here 
import groq from "groq";
import client  from '../client';
import { config } from "./config";


const postFields = `
  _id,
  title,
  publishedAt,
  "category": categories->title,
  excerpt,
  mainImage,
  "slug": slug.current,
  "author": author->{name, image , bio},
`

const currentPostFields = `
    _id,
    title,
    publishedAt,
    "category": categories->title,
    excerpt,
    body[]{
        ...,
        _type == 'affiliateItem' => {
            "title": @->.title,
            "Image": @->.Image,
            "description": @->.description,
            "price": @->.price,
            "linkText": @->.linkText,
            "link": @->.link,
        }
    },
    mainImage,
    "slug": slug.current,
    "author": author->{name, image , bio},
`


export const getPostsCount = async () => {
    const total = await client.fetch(groq`count(*[_type == 'post'])`)
    return total ; 
}


export const getPaginatedPosts = async (page) => {
    const skipMultiplier = page === 1 ? 0 : page - 1; 
    const skip = skipMultiplier > 0 ? config.pagination.pageSize * skipMultiplier : 0 ;
    const limit = skip + config.pagination.pageSize ; 
    const query = groq`*[_type == "post"] | order(date desc, _updatedAt desc) { ${postFields} }[${skip}...${limit}]`
    const postSummaries = await client.fetch(query);
    return postSummaries ; 
}


export const getCategories = async () => {
    const categories = await client.fetch(groq`*[_type == "category"]{
        title,
        "slug": slug.current,
        image,
        description
    }`)
    return categories
}


export const getCurrentPost = async (slug) => {
    const post = await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]{
        ${currentPostFields}
      }`, { slug })

      return post
}

export const getAllPaths = async () => {
    const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)
    return paths;
}


export const getCurrentCategory = async (slug) => {
    const category = await client.fetch(groq`*[_type == "category" && slug.current == $slug][0]{
            title,
            "slug": slug.current,
            image,
            description
      }`, { slug })

      return category
}


export const getCategoriesPaths = async () => {
    const paths = await client.fetch(`*[_type == "category" && defined(slug.current)][].slug.current `)
    return paths;   
}

/**
 * 
 * export const getCategoriesPaths = async () => {
    const paths = await client.fetch(`*[_type == "post" && defined(categories->title )][].categories->title `)
    return paths;
}
 */


export const getAllPosts = async () => {
    const posts = await client.fetch(groq`*[_type == "post"] | order(date desc, _updatedAt desc) {${postFields}}`)
    return posts
}

export const getRecentPosts = async () => {
    const posts = await client.fetch(groq`*[_type == "post"] | order(date desc, _updatedAt desc)[0...10]{${postFields}}`)
    return posts
}

export const getRelatedPosts = async (category , slug) => {
    const relatedPosts = await client.fetch(groq`
    *[_type == "post" && slug.current != $slug && categories->title == "${category}" ] | order(date desc, _updatedAt desc)[0...5]{
    ${postFields}
  }` , { slug })
  return relatedPosts;
}

export const getPostsByCategory = async (category) => {
    const posts = await client.fetch(groq`
    *[_type == "post" && categories->title == "${category}" ] | order(date desc, _updatedAt desc)[0...5]{
    ${postFields}
  }`)
  return posts;
}



export const getTerms = async () => {
    const terms = await client.fetch(groq`*[_type == "terms"]{content}`)
    return terms;
}

export const getPolicy = async () => {
    const terms = await client.fetch(groq`*[_type == "privacy"]{content}`)
    return terms;
}