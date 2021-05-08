import { useStaticQuery, graphql } from 'gatsby'
import { SiteMetadataI } from '../types'

const useSiteMetadata = (): SiteMetadataI => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                codepen
                youtube
                soundcloud
                medium
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortname
            spreadsheetId
            contactFormSheetsAPI
            contactFormEmailAPI
            contactToEmailAddress
            contactFromEmailAddress
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
