---
template: post
title: Eleventy for Static Sites
seoImage: 11ty.jpg
draft: false
date: '2021-03-12T12:00:00.000Z'
description: >
  All we need to know about Eleventy and getting started
category: Front-end
tags:
  - Tech Architecture
---

Benefits of static site generation along with CMS driven content.

## Getting started

Create a new project folder and do `npm init` and `git init`
Install dev dependency of 11ty `npm i @11ty/eleventy --save-dev`
Copy the html or any template available.
Add `.eleventy.js` and config it as required.
Run build and/or serve commands as needed.
Watch and fix for paths of src and href as assets and other html files.

## What is Eleventy

Alternate to jekyll.

Assuming local project installation
Searches the current directory, outputs to ./\_site `npx @11ty/eleventy`
It is same as `npx @11ty/eleventy --input=. --output=_site`
If we want to use only few specific templates `npx @11ty/eleventy --formats=md,html,ejs`
For serving `npx @11ty/eleventy --serve`
For changing port `npx @11ty/eleventy --serve --port=8081`

To configure eleventy just put a `.eleventy.js` file and configure it.

Find theme/template and then run 11ty over them
config file where we can specify what static assets we want to copy from src to publish dir
Utility is that we can use template available in any format and use 11ty to compile a static site from it.

## Template Languages

html, markdown, javascript, liquid, nunjucks .njk, handlebars .hbs, mustache .mustache, EJS, Haml, Pug

Overriding template engines
for a .liquid file we can include this to parse it as a njk.

```js
templateEngineOverride: njk
```

As far as data transformation from a CMS or any source to template is concerned we can keep on using gatsby as it offers the graphql api with data sources. So 11ty is useful in case if ready to use good ui templates are available in liquid or njk or handlebars or any other format.

Plugins are availbale if you want to do some build time transformation of say images.

\- Ayush 🙂
