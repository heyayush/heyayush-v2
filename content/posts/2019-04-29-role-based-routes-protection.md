---
template: post
title: Role based routes protection in React + MobX app
slug: role-based-routes-protection-react-mobx
draft: true
date: '2019-04-29T12:00:00.000Z'
description: >-
  Almost all admin dashboard apps require some kind of role based access to enable disable access to the features of app based upon the user's role...
category: Front-end
tags:
  - React
  - Javascript
---

>It's quite common feature these days to have multiple user roles and based upon the user role we grant him access to different features of the application. Let's see how to create a similar feature in a React + MobX application along with react-router

Packages used are-

1. react-router
2. mobx
3. mobx-react
4. mobx-react-router

High level steps to follow-

1. Create a json config of all the routes of your application.
2. Create another config of roleAccess.
3. Create a mobx router store.
4. Call the updateAccess() @action of router store with user data. Thus, setting the required access based on the user role.

```javascript
export const allPages = {
home: {
component: lazy(() => import(/* webpackChunkName: "home" */ '../containers/home')),
path: '/',
exact: true,
},
about: {
component: lazy(() => import(/* webpackChunkName: "about" */ '../containers/about')),
path: '/about',
},
contact: {
component: lazy(() => import(/* webpackChunkName: "contact" */ '../containers/contact')),
path: '/contact',
},
}```


```javascript
const roleAccess = {
admin: {
page: [home, about, contact],
},
editor: {
page: [home, about],
},
contributor: {
page: [home],
},
}
```

```javascript
class RouterStore extends MobxRouterStore {
@observable pages = []
hasAccess = path => this.pages.includes(path)
@action
updateAccess = user => {
const role = (user.role || lastRole).toLowerCase()
this.pages = roleAccess[role].page
}
}
```

\- Ayush 🙂
