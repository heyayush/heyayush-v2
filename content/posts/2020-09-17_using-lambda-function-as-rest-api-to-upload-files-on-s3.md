---
template: post
title: Using lambda function as REST api to upload files on s3
draft: false
date: '2020-09-17T12:00:00.000Z'
description: >
  Serverless solution for uploading files on s3 using lambda function as api for getting pre-signed urls with write access to upload files directly on s3.
category: Serverless
tags:
  - Function as a service
  - AWS
  - Serverless
  - Node.js
---

> Serverless solution for uploading files on s3 using lambda function as api for getting pre-signed urls with write access to upload files directly on s3.

Of various ways of uploading images or any files on s3, here we are focussed on providing front-end a way to directly upload file on s3.
This approach saves back-end server processing, network bandwidth and provides easy yet secure way to directly upload files on s3.

## Summary of what we are doing

1. Front-end makes a request to get pre-signed urls which can be used to upload file on s3.
2. A lambda function is connected with api gateway, thus get's invoked when front-end makes a request to get pre-signed urls.
3. Lambda function connects with s3 to get pre-signed urls and pass these urls to the front-end in response.
4. Front-end after receiving the pre-signed urls makes a PUT request to this url along with the file to upload.

Alright let's see the code of lambda function that gets the pre-signed urls and pass it on to front-end.
It is written in typescript.

```ts
import AWS from 'aws-sdk'
import { APIGatewayEvent, Context, Callback } from 'aws-lambda'

// Setting AWS authentication
const myAWSConfig = new AWS.Config()
myAWSConfig.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

// Create a S3 service object
const s3Client = new AWS.S3(myAWSConfig)

export const handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  const params = {
    Bucket: 'bucket-name', // Name of your S3 bucket
    Key: 'some-file-name or unique id', // Filename
    Expires: 300, // Time to expire in seconds
  }
  try {
    // Generating a preSignedUrl for a putObject
    const data = await s3Client.getSignedUrlPromise('putObject', params) // 'putObject' for writing and 'getObject' for reading
    const response = {
      statusCode: 200,
      body: JSON.stringify(data),
    }
    return response
  } catch (e) {
    return {
      statusCode: 500,
    }
  }
}
```

That's all!
Now the front-end can make a `PUT` request on the received url along with file that needs to be uploaded and that will be uploaded on the s3 bucket.

Let me know your feedback/suggestions in the comments.

\- Ayush 🙂
