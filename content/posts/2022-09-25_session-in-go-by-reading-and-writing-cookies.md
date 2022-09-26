---
template: post
title: Creating a session in go by reading cookies and then using them in future http requests
seoImage: go.png
draft: false
date: '2022-09-25T12:00:00.000Z'
description: >-
  Getting 403 forbidden error as your http request is missing required cookies? Here is the solution...
category: DevOps
tags:
  - DevOps
  - cron
  - GO
---

> Getting 403 forbidden error as your http request is missing required cookies? Here is the solution...

## Concept

1. We need to first visit the page which is allowed without cookies, for this example let's say `https://example.com`
2. Now in response we will receive cookies that needs to be sent in headers of future requests to access the content protected by those cookies.
3. So after making first request we will save those cookies in a jar and then create a client with that jar and use it for future requests.

Here's the code

```GO
package main

import (
	"fmt"
	"log"

	"net/http"
	"net/http/cookiejar"
)
var URL_OPEN string = "https://example.com"
var URL_PROTECTED string = "https://example.com/hello"

var headers = http.Header{
	"user-agent":      {"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"},
	"accept-language": {"en-US,en,gu;q=0.5"},
	"accept-encoding": {"gzip, deflate, br"},
	"accept":          {"*/*"},
}

func setCookies() *http.Client {
	jar, err := cookiejar.New(nil)
	if err != nil {
		log.Fatal(err)
	}

	client := &http.Client{
		Jar: jar,
	}

	req, err := http.NewRequest("GET", URL_OPEN, nil)
	if err != nil {
		log.Fatal(err)
	}
	req.Header = headers

	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	if res.StatusCode == 200 {
		fmt.Println("Cookies received")
	}
	return client
}

func getSecuredData() {
	client := setCookies()
	req, err := http.NewRequest("GET", URL_PROTECTED, nil)
	if err != nil {
		log.Fatal(err)
	}
	req.Header = headers

	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Yey!!")
}

func main() {
	getSecuredData()
}
```

Thanks!!

\- Ayush 🙂
