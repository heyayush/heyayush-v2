1. Installing node lts version 18.12.1 and switching to it.
2. Creating a fresh branch.
3. Run `yarn upgrade-interactive` to first update packages to their latest version of that major release.
4. `yarn.lock` file got updated after this. that's it.
5. Run `gatsby build` to see if it still builds and no error or warnings.
6. Some error on classnames so installed it to fix `yarn add classnames -S`. Now it builds.
7. Let's move to npm now instead of yarn.
8. `npm install gatsby@latest --legacy-peer-deps`. This updates gatsby version in `package.json` and creates `package-lock.json`. Now, I don't need `yarn.lock`.
9. Update react version `npm install react@latest react-dom@latest --legacy-peer-deps`
10. Error while installing updated version of all the dependencies in package.json

```bash
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: heyayush@1.0.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!   peer react@"^18.0.0 || ^0.0.0" from gatsby-plugin-netlify-cms@7.2.0
npm ERR!   node_modules/gatsby-plugin-netlify-cms
npm ERR!     gatsby-plugin-netlify-cms@"^7.2.0" from the root project
npm ERR!   2 more (gatsby, react-dom)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.8.4 || ^17.0.0" from netlify-cms-app@2.15.72
npm ERR! node_modules/netlify-cms-app
npm ERR!   netlify-cms-app@"^2.15.72" from the root project
npm ERR!   peer netlify-cms-app@"^2.9.0" from gatsby-plugin-netlify-cms@7.2.0
npm ERR!   node_modules/gatsby-plugin-netlify-cms
npm ERR!     gatsby-plugin-netlify-cms@"^7.2.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\ayush\AppData\Local\npm-cache\eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\ayush\AppData\Local\npm-cache\_logs\2022-11-27T05_09_02_984Z-debug-0.log
```

11. Going for `npm i --legacy-peer-deps`
12. Graphql schema errors.
