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

To create a pure object with no prototype, we have to write:
let obj = Object.create(null);

void operator always returns undefined
void 0 // undefined
void ('abc') // undefined
void {} // undefined

We can change a new value to undefined
undefined = "not-defined"

+ Plus operator to quickly convert a string to a number.
+'-4' // returns -4
+'0xFF' // returns 255
+true // returns 1
+false //returns 0
+'1,234' //returns NaN
