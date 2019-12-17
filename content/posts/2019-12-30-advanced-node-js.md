---
template: post
title: Advanced Node.js
slug: advanced-node-js
draft: true
date: '2019-12-30T12:00:00.000Z'
description: >
  Summarized list of some good to know Node.js concepts.
category: Back-end
tags:
  - Javascript, Node.js
---

Advanced Node.js
Pluralsight, Samer Buna

Table of Contents-

Architecture and dependencies
Require module and its 5 major steps
Event Loop and its concurrency model
Event emitters, callbacks, and promises
TCP, UDP, HTTP and HTTPS
Common built-in libraries
Debugging options
Readable, Writable, and Transform
Child process and load balancing

## Node != JavaScript

- Alternate to V8 is Chakra.
- V8 is single thread.
- libuv for async operations.

### REPL

### Global Object, Process, and Buffer Object

- Process object is an instance of event emitter.
```js
process.env
process.on('exit', (code) => {
  // do one final synchronous operation
  // before the node process terminates
})
process.on('uncaughtException', (err) => {
  // something went unhandled.
  // Do any cleanup and exit anyway!

  process.exit() // Force exit the process
})
process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
})
```

#### Buffer
- Buffer to work with binary streams of data.
- Buffer is a chunk of memory allocated outside V8 and we can put some data in that memory.
- Once a buffer is allocated it cannot be resized.
- Buffer.allocUnsafe() has performance advantages.