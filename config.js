'use strict';
let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: `.env.${activeEnv}`
});

module.exports = {
  url: 'https://heyayush.com',
  title: 'Ayush Sharma | Web developer freelancer',
  subtitle: 'Portfolio and Personal blog of Ayush Sharma | Web developer, front-end specialist, freelancer, web consultant, travel blogger',
  categoryMeta: 'articles written by the author Ayush Sharma',
  copyright: '© All rights reserved.',
  disqusShortname: 'heyayush',
  postsPerPage: 6,
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    },
    {
      label: 'Tech Stack',
      path: '/tech-stack'
    }
  ],
  author: {
    name: 'Ayush Sharma',
    photo: '/photo.jpg',
    bio: 'Web developer, front-end specialist, Batman fan',
    contacts: {
      email: 'ayush.sharma1505@gmail.com',
      twitter: 'heyayush',
      github: 'ayu15',
      rss: '#',
      linkedin: 'ayu15',
      instagram: 'ayush.sharma15',
      facebook: 'ayush.sharma.5015',
      codepen: 'ayu15',
      stackoverflow: '4337809/ayush-sharma'
    }
  }
};
