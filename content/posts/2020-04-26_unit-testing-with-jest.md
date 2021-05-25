---
template: post
title: Unit testing with jest
draft: false
date: '2020-04-26T12:00:00.000Z'
description: >-
  Summarized notes on various types of tests developer should write and focus on unit testing with jest.
category: Front-end
tags:
  - Unit testing
---

> Summarized notes on various types of tests developer should write and focus on unit testing with jest.

## Various types of test and their purpose

### Unit tests

- Verifies the functionality of a class or method.
- Test correctness of application logic.
- Tests can be written prior to application. (TDD)

### Component Test

- Something more then just input and output test.
- Verifies the correct appearance and functioning of a component.
- Highly sensitive to small changes to underlying components and services.
- Provides a strong defense against regression.
- Verifies changes to component output in response to change in application state.
- Does not verify interactions between two components.

### Snapshot Test

- Subtype of a component test.
- Verifies output matches a past record.
- Tends to fail if even the slightest change occurs.
- Good for regression.

### Performance Test

- Measure how long a block of code takes to execute.
- Can ideltify bottlenecks in application performance.
- Can provide insight into performance differences on different devices and cloud hosts.

### Coverage Tests

- A test for your tests.
- Measures application code which is visited (but not necessarily verified) during tests.
- Does not indicate whether application works or not, but it is nice to have.

### End-to-end test

- Measures the functionality of the whole application.
- Often executed in a virtual or "headless" browser.
- Creates a scenario to test by simulating user actions.
- Different in nature and more difficult to write than other tests.
- Provide the best assurance that the application works.

## Some important unit testing concepts

### What is Mocking?

- A convicing duplicate of an object with no internal workings.
- Can be automatically or manually created.
- Has same API as original, but no side-effects.
- Spies and other mock features simplify testing.

### Why Mocking?

- Reduce dependencies required by tests (faster execution).
- Prevent side-effects during testing.
- Build custom mocks to facilitate desired testing procedures.

### Snapshot Testing

> A good snapshot stops a moment from running away.

- JSON based record of a component's output.
- Compared to component's actual output during testing process.
- These snapshots are committed along with other modules and tests to the application repo

#### Advantages-

- Fast and automatic
- Catches regressions humans may miss
- Works nicely with libraries that take in state and output HTML components
- Adds some protections against regression when no time is available for manually writing tests
- Requires little training or knowledge of testing to use.

#### Disadvantages-

- Easy to ignore and suppress.
- Protects only against regression.
- If a component is working incorrectly and then fixed, a snapshot test will say it is now broken.
- Adds extra files to an already crowded repo.
- Sensitive to incidental changes.
- A waste of resources, if component is certain to be modified in near future.

## Enzyme vs React Test Renderer

> Neglecting to broaden their view has kept some people doing one thing all their lives. - Napolean Hill

| React Test Renderer                                                    | Enzyme                                                                                 |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Takes a React component and outputs the resulting HTML without a DOM   | Takes a React component and outputs the resulting HTML without a DOM                   |
| From the React team                                                    | From an unrelated, but respected team (AirBnB)                                         |
| Useful for getting the output HTML of a component for snapshot testing | Useful for testing a variety of interactions including click, keyboard input, and more |
| Recommended by the Jest Team                                           | Has a variety of open bugs which make using it a challenge                             |
