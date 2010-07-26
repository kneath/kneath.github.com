---
layout: post
title: Installable apps
excerpt:
  I'm getting kind of tired of all these *web* developers complaining about the time it takes to get updates to their apps up on the iTunes App Store.  The truth is this complaining has some merit.  But you have to realize that these people are not making *web* applications, they're making *installable* applications.  The problem is not Apple. The problem is lack of QA testing.
---

I'm getting kind of tired of all these *web* developers complaining about the time it takes to get updates to their apps up on the iTunes App Store.  The truth is this complaining has some merit.  But you have to realize that these people are not making *web* applications, they're making *installable* applications.  The problem is not Apple. The problem is lack of QA testing.

## Your application will have many bugs

The first rule of development: your code is going to have a lot of bugs. I don't care if you've got 3 days experience or 30 years experience in the industry. **Your code will have bugs.** This isn't a pride issue, it's a fact of life. Good developers know this and rely on testing (code, user-acceptance, performance) to expose bugs so they can fix them.

## Bugs will appear after your code is deployed

Whether it's the Y2k bug, deprecation of a technology, or your application getting blacklisted from a web service -- some bugs are going to show up after your code is deployed.  This is something you should expect.  Again, this is not negotiable. It is going to happen.

## The web makes us lazy

The truth is, developing web applications makes us lazy.  I can fix a bug, deploy, and it's fixed in about 15 seconds.  This is why I *love* working on hosted web applications.  You've got such immense power over the deployment process.  Some things that rock about web apps:

* You can be *really lazy* with UAT (User Acceptance Testing).  Users will do your UAT for your and you can fix it on the fly.
* You can be *really lazy* with bugs that will appear after deploy.  If a web service changes, you fix it and redeploy. Done.
* You only need *one computer* to test your application.  No need to purchase multiple hardware platforms, video cards, or install multiple operating systems!

## You can't be lazy with installable applications

I once worked on a desktop application that was being sent out on millions of machines.  This application was going to be the first thing that started up when the user booted the machine.  It also meant we didn't have the option to issue updates for the application after deployment.  We spent *tons* of time doing user testing on dozens of machines.  And then the client did user testing.  And then the client's QA department did even more testing.  And then the client's QA department did more testing throughout the whole time they were writing hard drives.

Remember the days when you updated applications with *CDs* or *floppy disks*?  My god, for a while there it just *wasn't feasible* to update installable applications over the internet.  The end result? Software development firms spent a lot of time and money on QA.  Same goes for game development companies.

My point is: if you know that one of your restraints is updating can be slow or impossible, you *spend more time testing the application.*

## The App Store is slow

It's true the App Store is slow when it comes to delivering updates.  To me, this is just a known variable.  Wouldn't it be awesome if they had 24 hour turnaround? Sure would be.  But it's one of those tradeoffs you get with a closed system.  If you want to trade it for an open system -- build a web application.  It's not that hard.

I know it sucks testing your application.  I know as a lone developer you don't have the money to hire testers.

But think of the rewards.  The App Store is something of a gold rush right now.  A small group of people have made obnoxious profits off very little effort.  There's almost no overhead ($100 application fee? psh) -- and anyone can submit apps.  It's a shitty closed ecosystem controlled by Apple. But it's a shitty closed ecosystem of chocolate-filled pools lined with gold and supermodels dressed in nothing but $100 bills if you strike it rich.