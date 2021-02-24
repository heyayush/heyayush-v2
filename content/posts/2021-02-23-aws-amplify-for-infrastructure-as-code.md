---
template: post
title: Getting started with AWS amplify
slug: getting -started-with-aws-amplify
draft: false
date: '2021-02-23T12:00:00.000Z'
description: >
  Simplify provisioning of required resources in aws cloud by using aws-amplify framework
category: Serverless
tags:
  - AWS
  - Serverless
  - Tech Architecture
---

> Intro to AWS amplify and using it to simplify provisioning of required resources by using cloudformation and infrastructure as code.

# AWS Amplify
It is a framework (Libraries, CLI, UI, Components) to simplify use of underlying aws services. There are no additional charges for using the amplify framework.
So we can consider it as a utility to simplify creation of resources in the cloud using aws cloudformation and integrating them with our application.

1. we will have to first install amplify cli
`npm i -g @aws-amplify/cli`

2. Configure it with `amplify configure`
3. Now go to project and run `amplify init`
4. Now you can start adding the required features for eg auth `amplify add auth`
5. Once you answer all the questions of cli, it will create local backend resources.
6. So the next step will be to push this to cloud and provision aws resources in the cloud for our project by running `amplify push`
7. If their is a build step involved to release next version of app then run `amplify publish`


For a react application we can go with the following steps

1. `yarn add aws-amplify @aws-amplify/ui-react -S`
2. In the app root which gets loaded first we need to import and initiate aws amplify service.
```js
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../aws-exports'
```


Let me know your feedback/suggestions in the comments.

\- Ayush 🙂