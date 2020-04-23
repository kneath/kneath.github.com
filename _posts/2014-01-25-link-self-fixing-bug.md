---
layout: proxima/link
title: "The bug in Gmail that fixed itself"
type: link
link: http://googleblog.blogspot.com/2014/01/todays-outage-for-several-google.html
---

A couple of years ago I listened to [Werner Vogels](http://www.allthingsdistributed.com/) talk a bit about treating large computing systems like biological systems. We shouldn't try and stop the virus — the predator — instead, we should design systems that can provide self-correcting forces against contaminated systems. Preventing failures and bugs was futile. 

You may gather from my surprise that I'm not a distributed systems engineer — but the idea of accepting that you will purposefully allow bugs that will cause failure was kind of mind blowing. Before then, my mindset had always been to prevent bugs to prevent failure. I had a similar feeling when I first watched [Dietrich Featherston](https://twitter.com/d2fn) talk about [Radiology + Distributed Systems](http://vimeo.com/52398797) — a similarly alternate perspective on monitoring and measurement.

And so it made me incredibly happy to read this bit from Google's post-mortem of Gmail's outage:

> Engineers were still debugging 12 minutes later when the same system, having automatically cleared the original error, generated a new correct configuration at 11:14 a.m. and began sending it; errors subsided rapidly starting at this time.

The system was able to fix the bug faster than the engineers. This isn't anything revolutionary or mind blowing. But it's kind of awesome to see it *succeed* in the real world.
