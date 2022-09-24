---
template: post
title: Creating a simple system-alert or desktop notification in go language
seoImage: system-alert.jpg
draft: false
date: '2022-09-20T12:00:00.000Z'
description: >-
  Need a alarm every 20 min to get up, relax your eyes and refocus? Or maybe a cron job schedule to run every 10 mins or so? Here's a easy solution...
category: DevOps
tags:
  - DevOps
  - cron
  - GO
---

> Need a alarm every 20 min to get up, relax your eyes and refocus? Or maybe a cron job schedule to run every 10 mins or so? Here's a easy solution...

We will create a simple system-alert by using pc speaker to beep for few seconds as a signal. We can also trigger desktop notification. Basically, this same concept can be used to trigger any cron job as per our requirement.

This is built with GO lang so that must be installed. Next, we will import couple of libraries-

1. "beeep" for cross platform beep sound from PC speaker and desktop notification.
2. "gocron" for running the above task in time scheduled way.

So let's begin-

1. Create project folder
2. cd into it and run following commands in terminal
3. `go mod init beep` // name of project is 'beep'
4. create `main.go` and start writing code
5. `go mod tidy` to add/remove all imported packages while writing code
6. `go run .` to run the code
7. `go build .` to save the program as an executable

Let's dive into the code of `main.go` file.

Firt we have all the packages imports.

```GO
package main

import (
	"fmt"
	"time"

	"github.com/gen2brain/beeep"
	"github.com/go-co-op/gocron"
)
```

Next we have the beep function which is our job that we want to run at scheduled times.

```GO
func beep() {
	err := beeep.Beep(beeep.DefaultFreq, DefaultDuration)
	if err != nil {
		panic(err)
	}
}
```

Next is the scheduler function. Here I want to run my job at every 15 min, starting from the next rounded 15 min as per the standard time.
So for example if you run this at 10:21 then next rounded 15 min is 10:30 so it will start from 10:30 and then trigger at every 15 min 10:45, 11:00, 11:15 and so on...

```GO
// Function to calculate start time at next 15 min
func getStartTime() time.Time {
	var startTime time.Time
  roundTo, _ := time.ParseDuration("15m")
  roundTime := time.Now().Round(roundTo)

	if roundTime.After(time.Now()) {
		startTime = roundTime
	} else {
		startTime = roundTime.Add(roundTo)
	}
  return startTime
}

// Function to run cron job every 15 min starting from the next rounded 15 min
func runCronJobs() {
	s := gocron.NewScheduler(time.Now().Location())
	s.Every(15).Minutes().StartAt(getStartTime()).Do(beep)
	s.StartBlocking()
}
```

Finally call this in main function

```GO
func main() {
	runCronJobs()
}
```

That's it!
Our scheduler, alarm system, system-alert is ready. Run this with command `go run .` from the project directory.
Instead of beep sound using system speakers we can trigger desktop notifications as well if that suits well. Look at the library docs of beeep and gocron for variations as needed.

Thanks!!

\- Ayush 🙂
