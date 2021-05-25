---
template: post
title: Using Google Sheets to save form submissions
draft: false
date: '2020-12-15T12:00:00.000Z'
description: >-
  Spreadsheets have served as databases and google sheets providing easy to use api can help us in saving any form submission data in it...
category: Serverless
tags:
  - Developer Tools
  - Function as a service
  - Serverless
---

Data in Google Sheets can be read and written using REST api thus we can store form submissions or any such simple data model in form of rows of a google sheet.
This is a serverless and cost effective solution for simple features such as storing contact form submissions or list of email ids of newsletter subscription.

## Architecture Explaination

1. **Front-end** which captures the form data and sends it to backend.
2. **Backend** which is simply a lambda function combined with api gateway which accepts form data coming from front-end and saves it in database.
3. **Database** which is simply a google sheet that stores the form data as rows.

```js
const { GoogleSpreadsheet } = require('google-spreadsheet')

exports.handler = async (event, context, callback) => {
  try {
    const data = JSON.parse(event.body)
    const doc = new GoogleSpreadsheet(spreadsheetId) //spreadsheet id where to save form submission data
    await doc.useServiceAccountAuth(JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS)) // Google sheets credentials to enable read/write to that spreadsheet
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const addedRow = await sheet.addRow(data.formData)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: `row added`,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString(),
    }
  }
}
```

**Important Note-**

On your google sheet you must have first row with the name of form field values you are expecting.

For eg. If your form is expecting "name", "email" and "message" then after creating the google sheet and providing necessary access to service account user. You need to create a first row of "name", "email" and "message" as corresponding column headers.

That's all folks. I hope it was helpful.

\- Ayush 🙂
