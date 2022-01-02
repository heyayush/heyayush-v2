import { ReactNode } from 'react'

export type RenderCallback = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (data: any) => ReactNode
}

export type Entry = {
  getIn: (x: string[]) => string
}

export type WidgetFor = (x: string) => string

export type PageContext = {
  tag: string
  category: string
  currentPage: number
  prevPagePath: string
  nextPagePath: string
  hasPrevPage: boolean
  hasNextPage: boolean
}

export type Node = {
  fields: {
    slug: string
    categorySlug?: string
    tagSlugs?: string[]
  }
  frontmatter: {
    date: string
    description?: string
    category?: string
    tags?: string[]
    title: string
    socialImage?: string
  }
  html: string
  id: string
}

export interface SocialImageI {
  publicURL?: string
}

export type Edge = {
  node: Node
}

export type Edges = Array<Edge>

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges
  }
  group: {
    fieldValue: string
    totalCount: number
  }[]
}

export type MarkdownRemark = Node

export interface SiteMetadataI {
  author: {
    name: string
    bio: string
    photo: string
    contacts: {
      facebook: string
      linkedin: string
      github: string
      twitter: string
      telegram: string
      instagram: string
      email: string
      rss: string
      codepen: string
      youtube: string
      soundcloud: string
      medium: string
    }
  }
  menu: {
    label: string
    path: string
  }[]
  url: string
  title: string
  subtitle: string
  copyright: string
  disqusShortname: string
  googleSheetsAPI: string
  contactFormSpreadsheetId: string
  contactFormEmailAPI: string
  contactToEmailAddress: string
  contactFromEmailAddress: string
  emailSubSpreadsheetId: string
  sendWishesSpreadsheetId: string
}

export interface PostGroupI {
  fieldValue: string
  totalCount: number
}
