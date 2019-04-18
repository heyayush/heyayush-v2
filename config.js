'use strict';

module.exports = {
  url: 'https://heyayush.com',
  title: 'Ayush Sharma | Web developer',
  subtitle: 'Web developer, front-end specialist',
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
    photo: '/photo.png',
    bio: 'Web developer, front-end specialist',
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
