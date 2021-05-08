import React, { FC } from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'
import { useSiteMetadata } from '../hooks'

interface PageTemplateI {
  pageTitle?: string
  pageDescription?: string
  socialImage?: string
}

const PageTemplate: FC<PageTemplateI> = ({ pageTitle, pageDescription, socialImage, children }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const metaDescription = pageDescription || siteSubtitle

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImage}>
      <Sidebar />
      <Page title={pageTitle}>{children}</Page>
    </Layout>
  )
}

export default PageTemplate
