Build Status: [![Build Status](https://circleci.com/gh/heyayush/heyayush-v2/tree/master.svg?style=svg)](https://circleci.com/gh/heyayush/heyayush-v2/tree/master) [![Netlify Status](https://api.netlify.com/api/v1/badges/549112de-29df-44fe-b5a7-04649b48ce25/deploy-status)](https://app.netlify.com/sites/ayush-sharma/deploys)

My personal website which provides details about me, my social contacts and my blog where I keep on posting my thoughts, ideas, travel experiences, developer tutorials and some random shit.

[https://heyayush.com](https://heyayush.com)

Feel free to provide feedback, suggest enhancements, report issues, or contribute with some pull requests.

## Features-

1. Ready to use Landing page and blogging platform.
2. Admin interface of netlify cms to take control over all published content.
3. Simple and minimal UI to provide more focus on content.
4. Responsive layout for various screen sizes.
5. Offline support using service worker.
6. Progressive Web App.
7. Clean and professional Typography.
8. Syntax highlighting of code snippets present in posts.
9. Optimized images for quick loading.
10. Easy to control content using markdown.
11. Allows adding React components inside markdown post using MDX.
12. Continuous Integration using CircleCI which performs sanity checks like lint and unit tests.
13. Google Analytics.
14. Disqus comments.

## Dev Notes-

1. Reordering contact items in useSiteMetadata reorders the icons in sidebar.
2. yarn start is sometimes not responding.

### Environment variables

```js
NODE_VERSION=14.16.0
NODE_ENV=development || production
GOOGLE_ANALYTICS=id of google analytics
GOOGLE_SHEETS_API=google sheets api
CONTACT_FORM_SPREADSHEET_ID=google sheet id of contact form responses
CONTACT_FORM_EMAIL_API=sending email notifications api
CONTACT_TO_EMAIL_ADDRESS=send email notification to this address
CONTACT_FROM_EMAIL_ADDRESS=send email notification from this email id
EMAIL_SUB_SPREADSHEET_ID=google sheet id of email subscribtions sheet
```
