---
template: post
title: Introduction with Next.js
draft: false
date: '2021-05-25T12:00:00.000Z'
description: >-
  Let's checkout what is the buzz around Next.js, what it offers and how is it different from its alternatives.
tags:
  - Tech Architecture
---

## Hello Next.js!

Another react framework in town and it is getting significant attraction. Offers a good boilerplate to start a react project, something similar to create-react-app and Gatsby.js. So we get a ready to use react hello world page along with all the build pipeline steps such as compiling and bundling, as well as dev server ready to work on. So no need to mess around with webpack,babel config or any other tool.

## What's different?

USP is server-side-rendering capabilities, flexibility and powers available to perform actions at build time or at run time as per your needs.
Like Gatsby.js, this is also built around the concept of pages, where each page is a React component. But the difference is that it offers both the static site generation capabilities where all pages are ready to serve after build as well as dynamic server side rendering after running a certain logic on server and then rendering the page based upon the result of that logic.
Thus for example if you have hundreds of pages and do not want to build all of them at build time then it offers the flexibility to pick which pages/routes to build at build time and which ones at run time.

It also offers serving your own api, just like an express/node application.
Under the hood, the api endpoints you are serving as well as all the dynamic pages which are created at run time are serverless functions. Hence we can put in our logic like fetching data from any DB, or any other API, or any such node.js script, play around with data and then pass on the result to a react component which will then be server-side-rendered and then HTML + JSON payload will be served to the browser.

### Another big difference is deployment

Here you got two choices.
1. Complete static site where all pages are generated at build time and dumped on a CDN, thus ready to serve instantly, which is blazing fast and that's what Gatsby does. Still there can be dynamic data fetching inside the page on event handlers.
2. Do not generate pages during build time. Keep the build small and then dynamically generate each page at run time.

So for the the first approach, deployment can be as simple as putting a dump of ready to serve server-side-rendered html. But for second approach you will need a continuously running node server to listen to requests and serve accordingly.

## Wanna give it a try?

Create a fresh app by running `npx create-next-app` or `npx create-next-app --typescript` if you want typescript instead of javascript.

That's all in a nutshell. Hope it was useful.

\- Ayush 🙂
