import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { ReactNode } from 'react'
import { useSiteMetadata } from '../../hooks'

interface LayoutI {
  children: ReactNode
  title: string
  description?: string
  socialImage?: string
}

const Layout: FC<LayoutI> = ({ children, title, description, socialImage = '' }) => {
  const { author, url } = useSiteMetadata()
  const metaImage = socialImage || author.photo
  const metaImageUrl = url + metaImage

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
