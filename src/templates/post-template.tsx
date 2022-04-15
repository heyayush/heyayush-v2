import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { useSiteMetadata } from '../hooks'
import type { MarkdownRemark } from '../types'

interface PostTemplateI {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const PostTemplate: FC<PostTemplateI> = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle, siteUrl } = useSiteMetadata()
  const {
    frontmatter,
    fields: { slug },
  } = data.markdownRemark
  const { title: postTitle, description: postDescription = '', seoImage = '', date, category, tags } = frontmatter
  const metaDescription = postDescription || siteSubtitle

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      seoImage={seoImage}
      url={siteUrl + slug}
      publishedDate={date}
      category={category}
      tags={tags}
    >
      <Post post={data.markdownRemark} />
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        date
        seoImage
        category
        tags
      }
    }
  }
`

export default PostTemplate
