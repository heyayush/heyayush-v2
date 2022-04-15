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
}

const Layout: FC<LayoutI> = ({ children, title, description, seoImage, url, publishedDate }) => {
  const { author, siteUrl, fbAppId, twitterUsername } = useSiteMetadata()
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
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
        <meta property="og:image" itemProp="image" content={metaImageUrl} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:updated_time" content={publishedDate} />
        {/* Twitter*/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={metaImageUrl} />
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
