---
template: post
title: Using Google Sheets to save form submissions
draft: true
date: '2021-03-19T12:00:00.000Z'
description: >-
  Spreadsheets have served as databases and google sheets providing easy to use api can help us in saving any form submission data in it...
category: Serverless
tags:
  - Developer Tools
  - Function as a service
  - Serverless
---

1. Create a new spreadsheet or clone from a similar existing one and share it same people so that it is shared with the google service account which has the access to edit sheet.
2. Add .env files with all these env variables and also on netlify build env variables.

```js
  SPREADSHEET_ID=****
  CONTACT_FORM_SHEETS_API=****
  CONTACT_FORM_EMAIL_API=****
  CONTACT_FROM_EMAIL_ADDRESS=****
  CONTACT_TO_EMAIL_ADDRESS=****
```

3. Add site domain in the allowed origins on google-sheets-service project and email-service project.
4. Push the changes so that automatically new functions are deployed.
5. Get the front-end work done.

That's all folks. I hope it was helpful.

\- Ayush 🙂
