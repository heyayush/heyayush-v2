---
template: post
title: Serverless
slug: serverless
draft: true
date: '2020-01-10T12:00:00.000Z'
description: >
  All about serverless
category: Backend
tags:
  - Backend, Serverless
---

## Benefits

1. Pay-per-execution pricing.
2. Scalability

## Possible use cases

- Processing payments
- Building Backend API
- Send transactional emails/SMS

### gereric signature of all AWS Lambda functions:

exports.handler = (event, context, callback) => {
  // "event" has information about the path, body, headers, etc. of the request
  console.log('event', event)
  // "context" has information about the lambda environment and user details
  console.log('context', context)
  // The "callback" ends the execution of the function and returns a response back to the caller
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: '⊂◉‿◉つ'
    })
  })
}

#### netlify-lambda

Netlify-lambda is a tool for locally emulating the serverless function for development and for bundling our serverless function with third party npm modules.

### AWS CloudFormation

Infrastructure as a code.
CloudFormation Template.

### Serverless Resources

- AWS LAmbda Functions
- AWS API Gateway APIs
- AWS DynamoDB Tables

### Serverless Application Model

- Simplifies Resource provisioning and configuration.
- Check out sam-cli for details.

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: 'AWS::Serverless-2016-10-31'
Resources:
  MyLambdaFunction:
    Type: 'AWS::Serverless::Function'
    Properties:
      Runtime: nodejs8.10
      Handler: index.handler
      CodeUri:
        Bucket: artifacts-for-lambda
        Key: my-lambda-package.zip
      Events:
        MySchedule:
          Type: Schedule
          Properties:
            Schedule: rate(1 minute)
        MyS3Upload:
          Type: S3
          Properties:
            Bucket: upload-something-here
            Events: s3:ObjectCreated:*
        MyApiResource:
          Type: Api
          Properties:
            Path: /my-resource
            Method: get
  MyS3Bucket:
    Type: "AWS::S3:Bucket"
    Properties:
    BucketName: upload-something-here
```

IAM also needed to allow Lambda functions to read and write into DB.
Access to API Gateway to invoke Lambda functions.

#### Triggering Lambda Function

Events Property

- CloudWatch Schedule
- S3 Upload
- API Gateway HTTP Request

```
aws cloudformation package
aws cloudformation deploy
```

### AWS Lambda

Lambda proxy integration or Lambda non-proxy integration

Choosing a region for Lambda function.
API Gateway configures the integration request and integration response for you.

Proxy integration-
Entire client request is sent to the backend Lambda function as is, except that the order of the request parameters isn't preserved. API Gateway maps the entire client request to the input event parameter of the backend Lambda function. The Lambda function's output, including status code, headers, and body, is returned to the client as is. This is preferred integration type.
With proxy integration you can change the Lambda function implementation at any time without needing to redeploy your API.

Non-proxy integration-
Aka custom integration. Here you configure the way the parameters, headers, and body of the client's request are translated into the format that your backend Lambda function requires. And you configure the way the Lambda function output is translated back to the format that's required by the client.
