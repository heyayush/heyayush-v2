---
template: post
title: Deploying Apps from Monorepo to Different Routes
draft: true
date: '2021-05-09T12:00:00.000Z'
description: >-
  I have various templates as individual repositories. Here I merge them into a monorepo and then deploy to various routes.
category: Developer Tools
tags:
  - CLI
  - Developer Tools
---

1. git pull each of the template
2. yarn install
3. yarn run build
4. copy public folder to t/{name}/

use of gatsby prefixPaths
need to copy all the respective media/ files into /media of root

Faced various issues while copying the public/ of each templates into public of root app such as

```
copyfiles public/** ../../public/t/${d:12}/ -u 1 will copy all files and folders in public
copyfiles public/* ../../public/t/${d:12}/ -u 1 will only copy files present in public
copyfiles public/**/* ../../public/t/${d:12}/ -u 1 will only copy all folders in public
copyfiles "public/**/*" ../../public/t/${d:12}/ -u 1 finally did the trick by copying all files and folders recursively
```

Challenges-

1. Do not want to install copyfiles or do not want to add any special npm script to each template.
2. do not want to go for cp and stick with copyfiles as it is cross platform.
3. Do not want to install copyfiles globally.
4.
