---
template: post
title: Getting started with AWS Cognito
slug: getting -started-with-aws-cognito
draft: false
date: '2020-09-17T12:00:00.000Z'
description: >
  Serverless solution for managing user authentication by making use of aws Cognito
category: Serverless
tags:
  - AWS
  - Serverless
---

> Intro to AWS cognito and using it for app user authentication.

Basic goal of authentication is to give users an identity so its like introducing the participant before having a conversation. Thus enabling the security feature as we know who the user is and what info can be shared with him. And for that we need to have a memory of all the known people and ability to add more people in that list. This is called _User Pool_ in technical term. That is a collection of users that have interaction with our application.

## Cognito User Pools:

- Sign in functionality for app users.
- Integrate with API gateway and application load balancer.
- Create a serverless database of user for your web & mobile apps
- Simple login: Username password combination
- Password reset
- Email & Phone number verification
- Multi-factor authentication
- Federated Identities: users from Facebook, Google, SAML
- Feature: block users if their credentials are compromised elseware
- Login sends back a JSON Web Token (JWT)

## Cognito Identity Pools (Federated Identity):

- Provide AWS credentials to users so they can access AWS resources directly.
- Integrate with Cognito User Pools as an identity provider.

### Some useful terms

_Callback URL_- where to redirect user once he is authenticated.

_Sign out URL_- where to redirect after signout.

Authorization code grants.

Allowed OAuth Flows and Implicit grant.

_Hosted-ui_ provides a ready to use ui interface for authentication actions. For example login form, signup form, forget password feature is available to use and user is redirected to pages based on it.

### Notes

- There is also options to customize the built-in Sign-in and Sign-up webpages aka hosted-ui.

That's all folks! Let me know your feedback/suggestions in the comments.

\- Ayush 🙂
