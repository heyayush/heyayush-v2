---
template: post
title: Google Certified Mobile Web Specialist
slug: google-certified-mobile-web-specialist
draft: true
date: '2019-11-06T12:00:00.000Z'
description: >-
  While preparing for google certification of mobile web specialist, here are the notes I made that helped a lot in understanding the concepts of modern web...
category: Front-end
tags:
  - Mobile Web
  - Developer Tools
---

## Accessibility

## Progressive Web App

### Service Worker

- Ability to intercept and handle network request. Programmatically managing a cache of responses. Programmable network proxy.
- Allows features like push notifications and background sync.
- It's similar to a shared Web Worker.
- Can't access DOM directly.
- Scope of service worker is by default `./` relative to the script URL.

#### Service Worker Lifecycle

1. Register the service worker from our app lifecycle.
2. This will trigger the install event of that service worker.
3. After install next states can be activated, error, idle, terminated.
4. `install` event is ideally used to cache all the static assets.
5. `activate` event is for cleaning up cache of previous installs.
6. `fetch` for intercepting network requests.

##### Registering the service worker

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(
      function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}
```

##### Install a service worker

```js
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = ['/', '/styles/main.css', '/script/main.js'];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});
```

- The event.waitUntil() method takes a promise and uses it to know how long installation takes, and whether it succeeded or not.

##### Cache and return requests

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
```

##### Updating a service worker

- Update the sw.js or whatever the servive worker javascript file we have. If there is even a byte's difference in the service worker file compared to what it currently has, it considers it new.
- New service worker will be installed but not activated. When the currently open pages of your site are closed, the old service worker will be killed and the new service worker will take control.
- To immediately activate the new service worker. use `self.skipWaiting()` in install step and `self.clients.claim()` in activation step.
- `skipWaiting()` will make the new service worker take control with the older cache version. This might break things so use with caution.

### Manifest

- Manifest is a simple json file containing metadata of our web app.
- `<link rel="manifest" href="/manifest.webmanifest">`
- Manifest should be served using the `application/manifest+json` MIME type.
- Manifest is required to show the `add to home screen prompt`.
- Key properties like short_name, name,icons, start_url, background_color, display, orientation, scope, theme_color.
- Having a registered service worker with fetch event handler is must for instaling a PWA.
- Deferring the app install banner by saving the `beforeinstallprompt` event and calling the `prompt()` method of that event when needed.

```js
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  ...
});

```

```js
// Show the prompt
deferredPrompt.prompt();
// Wait for the user to respond to the prompt
deferredPrompt.userChoice.then(choiceResult => {
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }
  deferredPrompt = null;
});
```

- To determine if pwa was successfully installed

```js
window.addEventListener('appinstalled', evt => {
  console.log('a2hs installed');
});
```

- Use of `display-mode:standalone` media query to detect if app is launched from home screen.

\- Ayush 🙂
