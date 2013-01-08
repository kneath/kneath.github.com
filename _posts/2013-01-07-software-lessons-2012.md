---
layout: post
title: "What I learned about building software in 2012"
summary: In which the entire situation is just fucked. Let's make it better.
excerpt:
  In which the entire situation is just fucked. Let's make it better.
---

2012 was the year I started to discover a better way to build software.

I've worked with hundreds of organizations that build software over my life (yay fast paced agency work?). Generally speaking, they all work the same way — based in hierarchy, delegation, siloing, hours, and deadlines.

This is not a bad way to build software. But it's only one way.

## Open source

Open source works dramatically different than these organizations. Open source, which powers much of our world. Open source, which produces astonishingly high quality software. Open source, which produces software at a faster rate than any other organization on Earth.

Open source, which has no financial incentive to produce software at all.

## Structure

We model our internal structure after open source. All our code is visible to all employees, and we're accepting patches. Why complain when you can fork it and send a pull request?

Each major project has a group of core maintainers that have their own mailing lists, their own chat rooms, and their own conferences (we call them mini-summits). Smaller projects start off chaotically and build structure over time.

Employees gravitate to the projects that overlap their interests with their available time and skills. Some people work on 50 projects at once. Others just one.

Some people really sink their teeth into just one product. These people think about the vision and goals for what a project could be. They spend time selling these goals to the rest of the committers with words, code, design, and presentations.

Some people become enamored with the destruction of any and all friction. They extract libraries, build development toolchains, fire up servers, optimize our network, and spread their effort around hundreds of applications making sure it's all running smoothly.

In a lot of ways this was [inevitable](http://en.wikipedia.org/wiki/Conway's_law). Lucky for us, it's working great.

## Hiring

Hiring has long been one of our greatest assets at GitHub — we tend to take a rational approach in a world where purposeful ignorance remains dominant (pretty lucky for future generations).

I've been lucky enough to struggle through hiring with some of the smartest people I know, and I think I have a much better grip on how to hire well as a result.

### Hiring criteria

Much of our early hiring was done on gut instinct. That's actually a lie — most of our early hiring was done based off years of working with people through open source. But the hires we made past our friends were done almost solely on gut instinct. Now we have a solid criteria for determining whether someone might become a good GitHubber.

*  **Taste** is the style of code they write. The aesthetics of their design. The phrasing of their words. The way in which they work. The way in which people perceive support, development, design, documentation, and maintenance.

   We favor optimists, pragmatism, and above all, a relentless customer focus.

*  **Shipping** is their ability to technically do their job and produce meaningful work. Their skills in Ruby, HTML, or CSS (developers). Their skills in written English, and email (support). Their coordination and people skills (internal support). But also their inner drive and ability to *produce*. What have they accomplished in the past? Do they have a track record of shipping?

   We favor people who are self driven and do not need constant guidance. We like people who think big, but ship small.

*  **Culture** is how they'll interact with other Hubbers. Are you going to butt heads with them all day? Are they going to be your next best friend? How would you feel if you were forced to take a road trip with them? What are their attitudes toward other lifestyles?

Communicating these guidelines has seriously leveled up our hiring ability. Instead of gut-feeling discussion, we now have a  solid framework to discuss new hires.

### Effects of hiring on a team

When the founders first approached me about [seriously taking funding](https://github.com/blog/1189-investing-in-github) early in the year, my main concern was that too much money would result in too much hiring.

Lucky(?) for us, the pace of our hiring accelerated naturally to the point of feeling pain long before the funding took place. I feel pretty comfortable that I now have a rational way to explain how to manage the pace of hiring without resorting to fear, uncertainty, and doubt.

* Each human you add increases the communication overhead of the entire team. As your team grows, you must be ready to adapt your communication channels to absorb the load. A communication system that works for 3 people will not work for 20, and conversely a communication system that works for 20 people will not work for 3. This adaption never ends. Every team that starts new must adapt, every team that grows or shrinks must adapt — each time.

  This communication overhead is not a benefit of small teams — it's a benefit of static teams. More communication means more ideas. It means more progress. It's the very nature of creativity.

  This is a known consequence of hiring. Adding people will slow down the team in the short term and require a lot of non-product focused work on communication. Hire  too fast, and you risk full scale paralyzation of a team.

  This year we grew from 52 GitHubbers to 140 GitHubbers and the dotcom team grew from around 9 people to around 17 people. Much of my work this year was focused on communication: writing documentation, marketing ideas, discussing issues, documenting design philosophy, workflows, processes, and creating presentations to communicate my dreams.

* Hiring people that you can delegate problems you don't want to solve is ineffective. This is a broken philosophy of most software companies. Junior developers fix bugs. Senior developers create them.

  This creates a leisure class of developers who aren't involved in the actual building and maintenance of real applications. It's a system that appears completely functional to management (who value senior opinions and blame bugs on inexperience). But when viewed as a whole, the system is clearly dysfunctional and produces low quality software.

* Hiring should serve to level up your team. [Ryan Tomayko came up with a great analogy for this](http://youtu.be/mrONxcyQo4E?t=6m30s): managing a baseball club. We try and add people that have skills or traits the team is missing. And never forget the at creativity is born of diversity.

**Hire to increase the potential of your team.** The more potential a team has, the more problems it ends up solving.

### Domain driven design is the only pattern you need

Software can be complex. There is much talk of design patterns, methodologies, and benefits of specific technologies. None of this matters at all (for our object-oriented, dynamic organization).

Focus on your domain. Model your code after what it means. Fuck your SOA and MVC religion, write code that describes what it's doing and you'll go far.

### Technical wankery

Technical wankery is destroying our profession. Hundreds of thousands of developers spend most of their life changing frameworks, upgrading frameworks, changing design patterns, re-designing entire applications, and re-architecting applications.

And at the end of the day they're left with a net loss. In rare cases, with extraordinary engineers, a better solution is reached. This is the severe minority case.

I learned to ignore all of this. Instead, I focus on building product using technology that's already implemented. If NASA can put a man on the moon without changing test frameworks, I'm pretty sure that I can create some pretty amazing software with six month old technology.

Focus as little as possible to your code's structure, and as much time as possible on your customers.

### Caremad driven development

Producing high quality software is extremely difficult. Bugs are inevitable. Security must always be on the mind. Performance degrades. And the better job your software does, the harder it is to keep up with demand.

[Caremad](http://caremad.com) is the best remedy to maintaining high quality software I've ever found. The best example of caremad as a service at GitHub is KOD — King of Developers.

Every week, a new person volunteers to be the KOD. The KOD's primary job is to work closely with Support to dive into the confusing technical problems our users run into.

Almost every person who comes out of their week of KOD immediately spends the next week fixing the biggest problems in our code base. A week of sympathizing with customers does wonders to understand the truly broken pieces of software.

Get people mad enough to care enough to fix the problem.

## Thanks

Rick Bradley, Chris Wanstrath, Ryan Tomayko, Tom Preston-Werner, PJ Hyett, Scott Chacon, Melissa Severini, Brian Doll, John Barnette.