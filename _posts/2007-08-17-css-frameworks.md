---
layout: proxima/post
title: Why I don't use CSS Frameworks
excerpt:
  CSS Frameworks seem like an awesome advancement at first glance: speed up your development, normalize your code base, and eliminate those nasty browser bugs!  Hot damn, where do I sign up?  Unfortunately there's some pretty strong caveats that go with those statements.  Here I outline the reasons that I don't use them -- and why you should think about the same.
---
CSS Frameworks seem like an awesome advancement at first glance: speed up your development, normalize your code base, and eliminate those nasty browser bugs!  Hot damn, where do I sign up?  Unfortunately there's some pretty strong caveats that go with those statements.

## The frameworks themselves are very good

I'd like to start this off by saying there's nothing inheritly wrong with any of the CSS, HTML, or ideas put into these frameworks.  I also think it's an absolutely fabulous idea that people are writing them -- it gives newcomers an easy way out to create professional looking designs using semantic XHTML and CSS.

## Advantages of Frameworks

Most CSS frameworks offer three primary selling points:

* Speed up your develoment (don't have to write all that HTML/CSS)
* Don't worry about those nasty IE bugs!
* Normalize your code/class base

### Speeding up your development

For those who have intimate knowledge of the framework, I do believe the frameworks will speed up development.  But for the average user, I think that the time required to understand the architecture of the framework far outweighs the menial task of coding it from scratch.

Over the past three years, I've built unknown dozens of layouts, with most of them being extremely visually complex.  On average, it takes me about 8 hours to build out a Master design into a functioning bug-free template.  Of that time, I would have to say that doing the basic layout & typography (framework material) takes less than 20 minutes.  That's **less than 5% of development time.**

You may save time, but the question quickly becomes how much time, and at what cost?  We'll cover that later.  My point being that frameworks do not solve the hard problems in CSS -- the ones that pop up when you're knee-deep in HTML and suddenly the goddamn box doesn't show up in IE6.  These are the problems that take the majority of time when developing a website.

### Don't worry about  IE bugs

Well, gee that sure would be a wonderful thing if that were the case, wouldn't it?  The truth is the frameworks do eliminate some bugs -- but they're the easy ones to pick off.  The ones solved by a quick `display:inline` or `height:1%`.

The frameworks don't solve bugs where none of the public hacks work.  Or where IE inexplicably adds a 30px top margin to your element, but then dissolves in when you hover over your main navigation.  It doesn't solve the problems when IE displays the same HTML and CSS differently on two different computers.

It doesn't solve the hard problems.

### Normalize your code base

This is one area I think frameworks are great at: getting a large team of people all using the same code structure.  But then again, I think this can be solved by an internal styleguide just the same.

## Disadvantages of frameworks

There are a few pretty severe disadvantages of frameworks in my eyes:

* Familiarity with your code's architecture
* Inheriting someone else's bugs
* Not learning

### Familiarity with your code's architecture

This is the largest reason I've never built or used a CSS framework.  By building a site from the ground up, you gain a knowledge of your site's architecture that can't be learned through any study or documentation.  When a programmer asks you a question about restructuring the HTML, you can answer right away.  You know where the CSS styles are (hopefully) and you know *how* the layout works.

This is increasingly relevant in today's Javascript-out-the-ass world.  Once you start manipulating the XHTML/CSS of your site through dynamic scripting: you better know how it's laid out.  Javascript-based effects are tied very closely to the CSS structure of the site.  You'll have to know when you can use `float` and when you can use `position` to lay out elements.  Should you use `line-height`, `margin`, `padding`, or `height` to get that container to extend?  It's a very important decision: and laying out the architecture helps you achieve this.

### Inheriting someone else's bugs

At the end of the day, no framework is perfect. No design is perfect.  But instead of fixing your bugs, you're fixing someone else's bugs.  Do you know how much it sucks fixing your own bugs?  It sucks 10,000x worse fixing someone else's bugs.

### Not learning

Again, on my mantra of why I wouldn't recommend frameworks comes the lack of knowledge gained by fixing those problems frameworks solve.  I've [advocated before](/tipsresources/web-production/most-amazing-css-tip-youll-ever-read-in-your-life/) how important it is to build websites.  I can guarantee you that if you keep building sites from the ground-up, you'll learn new things each time.  You'll learn not only how to fix and avoid browser bugs, but how to make your markup more elegant.  You'll transform the act of building websites from a job into an art.

## Conclusion

Hopefully this clears up a bit of why I don't like CSS frameworks.  It's not that they're bad -- it's just that I don't think they offer enough value for the drawbacks.  It all comes down to intelligently analyzing your situation before you jump head-first into someone else's code.

### The one "framework" I do use

On that note, there is one framework I do use.  It's the CSS reset -- not that I'd even call it a framework.  Here it is in all its glory:

{% highlight css %}
/*------------------------------------------------------------------------------------
  Global Styles
------------------------------------------------------------------------------------*/
* {
	padding:0;
	margin:0;
}
h1, h2, h3, h4, h5, h6, p, pre, blockquote, label, ul, ol, dl, fieldset, address { margin:1em 0; }
li, dd { margin-left:5%; }
fieldset { padding: .5em; }
select option{ padding:0 5px; }

.hide, .print-logo, .close-button{ display:none; }
.left{ float:left; }
.right{ float:right; }
.clear{ clear:both; height:1px; font-size:1px; line-height:1px; }
a img{ border:none; }
{% endhighlight %}

What's your take on frameworks? Do you use them? If so, what other benefits have you gained from using them?
