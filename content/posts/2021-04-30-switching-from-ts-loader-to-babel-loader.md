---
template: post
title: Switching from ts-loader to babel-loader
slug: switching-from-ts-loader-to-babel-loader
draft: false
date: '2021-04-30T12:00:00.000Z'
description: >
  How to switch from ts-loader to babel-loader for your webpack typescript build process and why does it makes sense to do so.
category: Developer Guides
tags:
  - Javascript
  - Tech Architecture
---

## Why to switch?

- Babel's ecosystem has evolved for supporting typescript. Now its no more just a javascript transpiler for various targets.
- Babel is comparitively faster than tsc. Because it ignores types and works as if it is a javascript code.
- Downside of this is that it ignores type-checking.
- Often people chain ts-loader and babel-loader thus unnecessary increasing the build time.
- ts-loader use to convert typescript to javascript and then babel-loader for converting that javascript to target browsers friendly javascript as per our requirement.
- Better tree-shaking resulting in smaller bundle size.

## What are we doing?

1. We will convert typescript directly to target environment javascript bundle using babel-loader and its supporting presets and plugins.
2. For the missing type-checking we will use eslint and tsc with --noEmit option, so that it does type-checking but do not output any files because babel is already doing that.

## Alright, how to do it?

1. `npm install -D babel-loader @babel/core @babel/preset-react @babel/preset-typescript`
2. Change your webpack configuration.

```js
module.exports = {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
  ...
}
```

```js
module.exports = {
    module: {
      rules: [
          {
            test: /\.(ts|tsx)$/,
            loader: 'babel-loader',
            options: {
              // without additional settings, this will reference .babelrc
              presets: ['@babel/preset-react', '@babel/preset-typescript']
            },
            exclude: /node_modules/,
          }
        ]
    },
  ...
}
```

3. For detailed babel configuration and various presets and plugins you may add a .babelrc file.
4. For specifying target environments you want your javascript to be transpiled for, you can add @babel/preset-env.

And that's it.

For the missing type-checking we can add a npm script in package.json say `"check-types": "tsc --project src/tsconfig.json --noEmit`.

Hope you enjoyed reading this. Feel free to drop feedback in comments.

\- Ayush 🙂
