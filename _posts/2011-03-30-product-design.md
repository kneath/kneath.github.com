---
layout: post
title: Product design at GitHub
excerpt:
  Product design is easily the hardest aspect of building software today. I happen to think we do a pretty good job of this at GitHub, and I'd like to give you a bit of an insight into our process and hopefully shed some light why it works so well.
---

Product design is easily the hardest aspect of building software today. Technology, hiring, funding, aesthetic design, and press are all minuscule in comparison. When I talk about product design I'm referring to the process by which you decide what your product does and does not do. I happen to think we do a pretty good job of this at GitHub, and I'd like to give you a bit of an insight into our process and hopefully shed some light why it works so well.

I should warn you that I am not a "Product Designer." We don't have titles at GitHub — we let employees pick their own.  I like to call myself **~deisgner** since I mostly focus on the look & feel of our product. But then again, I spent the past weekend building an application to track & distribute binaries and updating some of our map/reduce functions to support a newer version of MongoDB. So, yeah. I'm ~designer. But maybe that leads me to my next point…

## Everyone is a product designer

Every employee at GitHub is a product designer. We only hire the smartest people we know and we trust them to make our product better. We don't have managers dictating what to work on. We don't require executive signoff to ship features. Executives, system administrators, developers, and designers concieve, ship, and remove features alike.

Having the role of "Product Designer" or having a CEO who says they're going to "focus on product design now" never made much sense to me. Aren't you hiring smart people who use your product? Don't you trust your employees? Doesn't everyone at your company want to make your product better?

Along these lines, my two favorite questions to ask in an interview (or to people who don't know they're interviewing) are:

1. What would you like to see in GitHub?
2. What feature do you think we messed up / should remove?

It brings out the passion in people and instantly highlights problems you might have with their decisions. Some people just don't have the same vision for your product as you do.

## Write down ideas like crazy

Our internal wiki is filled with ideas. Old ideas. Bad ideas. Good ideas. Half-baked ideas. The point is that we have a place to share our crazy with each other. [This wiki page](https://gist.github.com/ad66d382a04c063b6861) discussing compare view eventually became [Pull Requests 2.0](https://github.com/blog/712-pull-requests-2-0) — arguably the best code review tool I've ever used.

Most of the time when someone adds an idea it's nothing original. It's something we've discussed in person, seen in another product, or maybe thought about ourselves. But that's really half the point — seeing someone else write down the same idea you've had makes you twice as excited about the idea. As others chime in saying they'd love to see the feature, excitement about it grows and grows. Eventually you've got 4 developers hacking on something at 11:30pm because they want to see it happen so badly.

## Constantly experiment

Right now our main repository has 65 branches. This doesn't count the dozen or so other repositories that collectively represent what is <https://github.com> or the 139 repositories under our organization. Needless to say, there are a ton of features, anti-features and half ideas in these branches. Sometimes they're really pretty features that aren't functional and sometimes they're really ugly features that are completely functional.

We're constantly sending pull requests, shipping them to staging and asking others what they think. Talking about a feature in a meeting and crafting a spec is one thing, but coding up a working prototype is way more effective. We're always running experimental features in production to staff only. No better way to see if a feature is going to fit than to actually use it.

## Abandon features

You can't run a product and pretend that every one of your ideas is perfect. You're going to have bad features, features that don't fit, and features that become abandoned. Don't be afraid to abandon ideas. The amount of time you spend on a feature is meaningless. You're not losing anything by throwing work away — you're choosing not to make your product worse.

The first version of <http://jobs.github.com> that we built didn't share a single piece of functionality with what shipped on day one. It wasn't an iteration — we straight up threw away a few months of work because we realized it was a bad idea. We started using our creation and realized we couldn't figure out how to make money without pissing off our customers. So we abandoned that idea and started anew — even though we could have shipped it and started making money immediately.

Shipping features because you spent time or money on them is a coward's excuse. It takes balls to abandon features — grow some.

## Argue all the time

We do not have a quiet workplace. We argue in bars, in Campfire and in email. New hires and CEOs alike. But it's not personal — it's about making our product better. If you're not forced to rationalize your product  choices, who's to say you're making good decisions?

Arguing with your co-workers isn't a bad thing. It's not creating a negative work enviornment — it's a tool to help you make good decisions. Being an empty cheerleader and telling everyone that their idea is great is harmful and short-sighted. Argue and make good decisions.

## Talk to your customers

I spend a good portion of my day reading through our [support site](http://support.github.com), mailing lists, twitter feeds, and blog posts written about git and GitHub. Listening to your customers is supremely important — they're full of great ideas. They're also full of bad ideas. As [Tom](http://tom.preston-werner.com/2011/03/29/ten-lessons-from-githubs-first-year.html) puts it:

> Don’t give your customers what they ask for; give them what they want.

We also spend a lot of *physical* time with our customers. We have monthly meetups here in San Francisco, and you can pretty much guarantee that anyone who's traveling will host a meetup in whatever city they're in.  People can get crazy online. It's a lot harder to spout out that crazy when you're talking to someone face to face. It forces people to really think about what they're going to say and reminds them that there's a living, breathing human being behind that product.

## Product design is in the eye of the beholder

We know that product design isn't just adding and removing features. It's how our customers perceive the features as well. Having a great blog post explaining new features is absolutely killer. It allows us to frame features in a certain light and explain our thinking.

We make sure to constantly ship. If you redesign your entire product once every two years like Twitter does, it's a *big deal*. If your users don't like 100% of it, they're going to be pissed. But if you ship something every two months and they don't like 10% of it — their overall perception is still positive.

But we know that what we *don't* do is just as important as what we are doing. We don't publish roadmaps or promise features within a timeframe — we [under promise and over deliver](http://ozmm.org/posts/managing_expectations.html).