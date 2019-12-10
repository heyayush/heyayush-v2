---
template: post
title: Javascript Rapid Fire
slug: javascript-rapid-fire
draft: true
date: '2019-11-27T12:00:00.000Z'
description: >
  Here is a collection of some core javascript question answers which can be used a rapid fire round in an interview...
category: CSS-Tricks
tags:
  - Javascript
---

false.toString(); // 'false'
2.toString(); // raises SyntaxError

typeof NaN; // “number”
NaN == “number”; // false
NaN == number; // false
NaN === NaN; // false

Number(); // returns 0
Number(undefined); // returns NaN

[1, 2, 3] + [4, 5, 6]; //  "1,2,34,5,6"

null < 0  // false
null == 0 // false
null <= 0 // true