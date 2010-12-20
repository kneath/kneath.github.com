---
layout: post
title: URL Design
excerpt:
  Blah
---

**You should take time to design your URL structure.** I don't care if you're a designer, a developer, or a street performer — take time to design  your URLs.

I tried for a long time to make this post cohesive, but I think after much editing it was simply meant to be a collection of ideas centered around designing URLs. After much editing, I've realized why this is: designing URLs is a complex subject. It's just as complex as designing a command line client or even a website.

## What makes a great URL

Any regular semi-technical user of your site should be able to navigate 90% of your app based off memory of the URL structure. In order to achieve this, your URLs will need to be *pragmatic.* Almost like they were a math equation — many simple rules combined in a strategic fashion to get to the page they want.

### Top level directories are golden

### Use namespaces to re-use numbers

### Querystrings are great for filters and sorts

## URLs are for humans — not for search engines

I grew up in this industry learning how to game search engines (well, Google) to make money off my affiliate sales, so I'm no stranger to the practice of keyword stuffing your URLs. It was fairly common to end up with a URL like this:

    http://guitars.example.com/best-guitars/cheap-guitars/popular-guitar

That kind of URL used to be great for SEO purposes. Luckily Google's hurricane updates of 2003 eliminated any ranking benefit of these URLs. Unfortunately the professional SEO industry is centered around extortion and might advise you still stuff your URLs with as many keywords as you can think of. They're wrong — ignore them.

Some things to keep in mind:

* Underscores are just bad. Stick to dashes.
* Use short, full, and commonly known words. If a directory has a dash or special character in it, the word is probably too long.

URLs are for humans. **Design them for humans** (and remember humans tend to use things like iPhones and post-its to write down URLs).

## A URL is an agreement

A URL is an agreement to serve something from a predictable string for as long as possible. Once your first visitor hits a URL you've implicitly entered into an agreement that if they bookmark the page or hit refresh, they'll see the same thing.

**Don't change your URLs after they've been publicly launched.** If you absolutely must change your URLs, add redirects — it's not that scary.

## Everything should have a URL

In an ideal world, every single screen on your site should result in a URL that can be copy & pasted to reproduce the same screen in another tab/browser. In fairness, this wasn't completely possible until very recently with some of the new HTML5 browser history Javascript APIs. Notably, there are two new methods:

* **`onReplaceState`** — This method replaces the current URL in the browser history, leaving the back button unaffected.
* **`onPushState`** - This method pushes a new URL onto the browser's history, replacing the URL in the URL bar *and* adding it to the browser's history stack (affecting the back button).

### When to use `onReplaceState` and when to use `onPushState`

These new methods allow us to change the *entire* path in the URL bar, not just the anchor element. With this new power, comes a new design responsibility — we need to craft the back button experience.

To determine which to use, ask yourself this question: ***Does this action produce new content, or a different display of the same content?***

1. **Produces new content** — you should use `onPushState` (this includes actions such as pagination links)
2. **Produces a different display of the same content** — you should use `onReplaceState` (this includes actions like sorting and filtering)

Of course you should use your own judgement, but these two rules should get you 80% there. Think about what you want to see when you click the back button and make it happen.

## A link should behave like a link

There's a lot of awesome functionality built into linking elements like `<a>` and `<button>`.  For example if you middle click or command-click on them, they'll open in new windows. When you hover over an `<a>`, your browser tells you the URL in the status bar.  Don't break this behavior.

* Embed the location of AJAX requests in the `href` attributes of anchor elements.
* `return true` from Javascript click handlers when people middle or command click.

## Post-specific URLs need to die

There is a horrible movement in the development community to create URLs which can never be re-used. I like to call them POST-specific URLs — they're the URLs you see in your address bar after you submit a form, but when you try to copy & pasting the url into a new tab, you get an error.

There's no excuse for these URLs at all. Post-specific URLs are for redirects and APIs — not end-users.

## Wrapping it up

I hope that as usage of the new Javascript APIs, developers and designers take time to design their URLs.  It's an important part of any web site's usability and too often I see people ignore the idea completely. Worse yet — while it's easy to redesign the look & feel of a site, it's *much* more difficult to redesign the URL structure.

But personally, I'm excited. I've watched URL design ebb and flow over the past few years — at times hard-linking was sacraficed at the altar of AJAX, while other times performance was sacrificed to generate real URLs for users. We're finally at a point in time where we can have the performance and usability benefits of client-side rendering and design a coherent and refined URL experience at the same time.