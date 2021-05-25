---
template: post
title: Hosting Multiple Apps
draft: true
date: '2021-05-04T12:00:00.000Z'
description: >
  Architecture discussion on approaches to hosting various apps
category: Developer Guides
tags:
  - Tech Architecture
---

## Routes or subdomains for multiple apps?

Differnt subdomains like this

```
example.com -> app1
app2.example.com -> app2
app3.example.com -> app3
```

or different routes like this

```
example.com/ -> app1
example.com/app2/ -> app2
example.com/app3/ -> app3
```

For subdomains approach it is simple. Go to your DNS configuration and keep on adding CNAME for each of your app

For routing approach

1. I am creating a monolith repo
2. Each app is cloned into a folder of its own.
3. Installing node_modules for each of them. This is tricky as different apps will depend on different node versions.
