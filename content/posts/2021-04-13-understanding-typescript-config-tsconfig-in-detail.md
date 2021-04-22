---
template: post
title: Understanding Typescript configuration tsconfig in detail
slug: understanding-typescript-config-tsconfig-in-detail
draft: true
date: '2021-04-13T12:00:00.000Z'
description: >
  Summarized list of some good to know Node.js concepts.
category: Developer Guides
tags:
  - Javascript
  - Node.js
---

declaration true to allow other people to use our types. Basically it creates a .d.ts file so that others can refer to it.

Here's a good read up on typescript project references.
https://stackoverflow.com/a/55000497/4337809

basic goal here is to allow separate parts of project as separate typescript modules.

Need to understand the role of each tool in the build process.
ts-loader is used to transpile the TypeScript code to JavaScript and Webpack to bundle that js code.