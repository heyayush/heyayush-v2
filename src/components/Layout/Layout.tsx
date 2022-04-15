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
}

const Layout: FC<LayoutI> = ({ children, title, description, seoImage, url }) => {
  const { author, fbAppId, twitterUsername } = useSiteMetadata()
  const metaImage = seoImage || author.photo
  const metaImageUrl = seoImage ? `/seoImages/${metaImage}` : metaImage

  return (
    <div className="layout">
      <Helmet>
        {/* Primary Meta Tags*/}
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta name="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta name="og:description" content={description} />
        <meta property="og:image" itemProp="image" content={metaImageUrl} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
        {/* Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:site" content={twitterUsername} /> {/* for twitter analytics */}
        <meta property="fb:app_id" content={fbAppId} /> {/* for facebook insights */}
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
