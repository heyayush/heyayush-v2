---
template: post
title: Advanced React.js
slug: advanced-react-js
draft: true
date: '2019-12-20T12:00:00.000Z'
description: >
  Summarized list of some good to know React.js concepts.
category: Front-end
tags:
  - Javascript, React
---

Prop-types vs typescript

Context API - global object associated with each <App /> instance.
Since it is a global object hence use it carefully.

```js
static childContextTypes = {
  store: PropTypes.object,
};
getChildContext() {
  return {
    store: this.props.store
  }
}
```
Context API made unit testing harder hence the concept of -
Tree rendering vs Shallow rendering and the use of Enzyme for shallow rendering

Benefits of shallow rendering-
It is faster to shallow render a component than to fully render it. When a React project contains a large number of components, this performance difference can have a significant impact on the total time taken for unit tests to execute.
Shallow rendering prevents testing outside the boundaries of the component being tested—a best practice of unit testing.


displayName property of React

yarn upgrade-interactive

Portals in react is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

PropTypes - When running in development mode then react will automatically check all props and generate warning messages in the console if props are of incorrect type.

Static type checking of typescript is better than using PropTypes library.

Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

Avoid using index as keys rather go for some unique id for that list. This will allow react to reorder elements without needing to reevaluate them.

Avoid async initializations in componentWllMount()

Adding a decorator to a component is similar to passing the component into a function.

Implementing Server side rendering using *ReactDOMServer.renderToString(<App />)*

static getDerivedStateFromProps() lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or null to indicate that the new props do not require any state updates.

getSnapshotBeforeUpdate() lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to componentDidUpdate().
