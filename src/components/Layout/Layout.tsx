import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { ReactNode } from 'react'
import { useSiteMetadata } from '../../hooks'

interface LayoutI {
  children: ReactNode
  title: string
  description?: string
  seoImage?: string
  url?: string
  publishedDate?: string
  category?: string
  tags?: string[]
}

const Layout: FC<LayoutI> = ({ children, title, description, seoImage, url, publishedDate, category, tags }) => {
  const { author, siteUrl, siteName, fbAppId, twitterUsername } = useSiteMetadata()
  const metaImage = seoImage || author.photo
  const metaImageUrl = seoImage ? `${siteUrl}/seo-images/${metaImage}` : metaImage

  return (
    <div className="layout">
      <Helmet>
        {/* Primary Meta Tags*/}
        <meta charSet="UTF-8" />
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author.name} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" itemProp="image" content={metaImageUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={url} />
        <meta property="og:updated_time" content={publishedDate} />

        {/* Open Graph article*/}
        <meta property="og:type" content="article" />
        <meta property="article:author" content={author.name} />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={publishedDate} />
        <meta property="article:section" content={category} />
        {tags?.map((tag, index) => (
          <meta key={tag + index} property="article:tag" content={tag} />
        ))}

        {/* Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:site" content={twitterUsername} />
        <meta name="twitter:creator" content={twitterUsername} />

        {/* for facebook insights */}
        <meta property="fb:app_id" content={fbAppId} />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
