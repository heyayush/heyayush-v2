import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { ReactNode } from 'react'
import { useSiteMetadata } from '../../hooks'

interface LayoutI {
  children: ReactNode
  title: string
  description?: string
  seoImage?: string
}

const Layout: FC<LayoutI> = ({ children, title, description, seoImage }) => {
  const { author } = useSiteMetadata()
  const metaImage = seoImage || author.photo
  const metaImageUrl = seoImage ? `/seoImages/${metaImage}` : metaImage

  return (
    <div className="layout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
