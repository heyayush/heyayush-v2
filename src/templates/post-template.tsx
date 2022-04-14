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

// TODO: Add social image functionality

const PostTemplate: FC<PostTemplateI> = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const { frontmatter } = data.markdownRemark
  const { title: postTitle, description: postDescription = '', seoImage = '' } = frontmatter
  const metaDescription = postDescription || siteSubtitle

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} seoImage={seoImage}>
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
        seoImage
      }
    }
  }
`

export default PostTemplate
