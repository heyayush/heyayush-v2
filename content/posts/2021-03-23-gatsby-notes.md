---
template: post
title: Gatsby Notes
slug: gatsby-notes
draft: true
date: '2021-03-23T12:00:00.000Z'
description: >
  Summary of learnings while working on projects involving gatsby js
category: Developer Guides
tags:
  - Tech Architecture
---

## Static vs Normal AKA Page Queries

Static queries are used using `<StaticQuery />` component or `useStaticQuery` hook.
Page queries can have variables while static cannot.
Page queries can only be made in top-level page components.
Static can be inside specific components any any level in component tree.

## Adding Pagination
`pageContext` is added while creating pages in `gatsby-node`.
Here we need to add `skip` and `limit` values which can be used to query those specific items.
Next we need a template page where the pagination items are to be displayed along with options to go to next previous page or directly jump to specific page as desired.
This needs to be a top-level page template which can have `skip` and `limit` variables in their page query because variables are not allowed in the static query.
GraphQL queries makes it really easy with the skip and limit style of pagination.

Here is a detailed guide https://www.gatsbyjs.com/docs/adding-pagination/

## Migrating from gatsby-image to gatsby-plugin-image
https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/
1. Import change from 
```import Img from "gatsby-image"```
to ```import { GatsbyImage } from "gatsby-plugin-image"```

2. Change the graphql import
```js
childImageSharp {
  fluid(maxWidth: 600, quality: 100) {
    ...GatsbyImageSharpFluid_withWebp_noBase64
  }
}
```
to 
```js
childImageSharp {
  gatsbyImageData(width: 600, quality: 80, placeholder: BLURRED)
}
```

3. Update the component where this image is used.
```js
<Img fluid={props.image.fluid} />
```
to
```js
<GatsbyImage image={props.image.gatsbyImageData} alt={props.title}  />
```
\- Ayush 🙂
