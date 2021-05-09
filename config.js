/* eslint-disable */
'use strict'

const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    url: 'https://heyayush.com',
    title: 'Ayush Sharma | Web developer freelancer',
    description: 'A minimal, lightweight, and mobile-first starter for creating blogs using Gatsby.',
    subtitle: `Portfolio and Personal blog of Ayush Sharma | Web developer,
    front-end specialist, freelancer, web consultant, travel blogger`,
    copyright: '© All rights reserved.',
    author: 'heyAyush',
    disqusShortname: 'heyayush',
    postsPerPage: 6,
    useKatex: false,
    menu: [
      {
        label: 'Articles by categories',
        path: '/categories',
      },
      {
        label: 'Projects',
        path: '/t',
      },
      {
        label: 'Frontend/',
        path: '/category/front-end',
      },
      {
        label: 'Travel/',
        path: '/category/travel',
      },
      {
        label: 'Contact me',
        path: '/contact',
      },
    ],
    author: {
      name: 'Ayush Sharma',
      photo: '/photo.jpg',
      bio: 'Professional, Web Developer, Blogger, Gamer, Traveler Batman and Linkin Park fan',
      contacts: {
        email: 'hey.ayush.sharma@gmail.com',
        twitter: 'heyayush',
        github: 'heyayush',
        rss: '/rss.xml',
        linkedin: 'hey-ayush',
        instagram: 'hey.ayush.sharma',
        facebook: '',
        codepen: '',
        telegram: '',
        youtube: '',
        soundcloud: '',
        medium: '',
      },
    },
    siteUrl: 'https://example.com',
    googleSheetsAPI: process.env.GOOGLE_SHEETS_API,
    contactFormSpreadsheetId: process.env.CONTACT_FORM_SPREADSHEET_ID,
    contactFormEmailAPI: process.env.CONTACT_FORM_EMAIL_API,
    contactToEmailAddress: process.env.CONTACT_TO_EMAIL_ADDRESS,
    contactFromEmailAddress: process.env.CONTACT_FROM_EMAIL_ADDRESS,
    emailSubSpreadsheetId: process.env.EMAIL_SUB_SPREADSHEET_ID,
  },
  siteManifest: {
    name: 'template-lumen',
    short_name: 'template-lumen',
    description: 'template-lumen',
    start_url: '/',
    background_color: '#372428',
    theme_color: '#372428',
    display: 'minimal-ui',
    lang: 'en',
    icon: 'static/logo.svg',
  },
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS,
}
