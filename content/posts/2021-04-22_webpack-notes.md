---
template: post
title: Webpack notes
seoImage: webpack.png
draft: false
date: '2021-04-22T12:00:00.000Z'
description: >
  Summarized notes on webpack configuration
category: Developer Guides
tags:
  - Javascript
  - Node.js
---

> Some points notes while working on webpack configuration.

Here I am considering webpack version 5.
Bundling all the resources and getting the build ready to serve.
Helps in writing code in modular form and then bundle all of it into a one single file.

Babel transpiler because we want our code to run in older browsers as well.
Difference between compiling and transpiling is compiling is for converting code to different language however transpiling here is converting code to different version of same language so that there is backward compatibility.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader',
        },
      },
    ],
  },
}
```

`devtool: 'source-map'`
when in development mode we probably want source-maps so that along with main.js file there is also main.js.map which is a relationship to map between bundled code and individual modules. Thus helping devs to debug.

`webpack --watch` automatically watch files for update.

```js
devServer: {
  contentBase: './public' //where to look for your stuff
}
```

`webpack serve` for live reloading. It keeps in memory instead of writing to the output file.

`entry: './src/index.js',`

```js
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // requires an absolute path hence we are using path.resolve
},
```

Typescript example

```js
module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/, // dollar sign means ending with .ts
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'ts-loader',
        },
      },
    ],
  },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
```

For CSS, SCSS we have loaders like css-loader, style-loader, sass-loader, postcss-loader, MiniCssExtractPlugin.loader. We can add them in our webpack config.

Source map for production is debatable. it gives the ability to debug in detail on production bugs but is not the best for security because hackers can use those source maps to un-minify your code and look into individual functions.

Composing loaders together.

debatable whether to go with babel-loader or ts-loader
babel-loader does not do typechecking so need to plug in eslint for that. while ts-loader has typechecking included in it.
babel will make build faster and better tree shaking.

ts-loader uses tsc and depends on tsconfig file.
tsc compiles to a target such as ES5, ES6. However with babel we have @babel/preset-env with which we can specify list of environments we need to support.
babel is super configurable with plenty of plugins support.

As far as type checking is considered we can add 'tsc' compiling with --noEmit option along with our linting step. So it does type checking but do not output any files because babel is already doing that.

babel does not handle this case rightly inside class components of react
`<this.MyComponent />`
so the workaround is

```js
const MyComponent = this.MyComponent

return <MyComponent />
```

## Replacing ts-loader with babel-loader

Check <a href="/2021-04-30_switching-from-ts-loader-to-babel-loader" target="_blank" title="Switching from ts-loader to babel-loader">this article</a> for full details on replacing ts-loader with babel-loader.

\- Ayush 🙂
