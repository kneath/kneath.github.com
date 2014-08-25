---
layout: post
title: Tweet Tweet
category: opinion
summary: As I sit in my apartment right now, I'm assuming what is effectively the entirety of the technology industry is managing the task rabbits packing their art cars, private chefs, fusion reactors, and backup iPads into their U-Hauls for the long journey to the Black Rock Desert. Oh — and drugs — lots, and lots of drugs.
---

As I sit in my apartment right now, I'm assuming what is effectively the entirety of the technology industry is managing the task rabbits packing their art cars, private chefs, fusion reactors, and backup iPads into their U-Hauls for the long journey to the Black Rock Desert. Oh — and drugs — lots, and lots of drugs. I mean, do you even *know* of Steve Jobs?

* * * *

<blockquote class="twitter-tweet tw-align-center" lang="en"><p>*Scene: It&#39;s Second Breakfast time at Twitter HQ. A 23y.o. lies on the innovation hammock, is hand-fed scallops wrapped in larger scallops.*</p>&mdash; Tom Gara (@tomgara) <a href="https://twitter.com/tomgara/statuses/501189840994828288">August 18, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

* * * *

In the industry, we have this phrase — *ship early, ship often* — it's a great little hack we've developed to avoid taking any real responsibility for our decisions. If we're doing it fast, we're trying to fuck up. Get it? We're *trying* to do a bad job. No? Well, normal people won't ever understand tech, and like I said the important part is drugs. Quite frankly, that DMT isn't going to trip itself, and it's important to make sure you're not rolling up to the desert with a bag of duds. *Ship early, ship often.*

* * * *

<blockquote class="twitter-tweet tw-align-center" data-conversation="none" lang="en"><p>Suddenly he sits upright, slaps away the feeding hand. &quot;What if favorites *were* retweets?&quot;, he mutters.</p>&mdash; Tom Gara (@tomgara) <a href="https://twitter.com/tomgara/statuses/501190140153569280">August 18, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

* * * *

So anyways, I got this call from my product manager at 8pm last night, and all I can hear is some dog screaming in the background and what sounds like The Sopranos playing on an iPad. This shit is a little too deep for me right now, so I hang up and get back to work. But the dude won't stop, and somehow he's rigged his phone to send a picture of this goat to me every 15 seconds.

Which is why I'm pretty fucking surprised that somehow *I'm in a goddamn Google Hangout with him at 3am on a Tuesday night*. He's sitting there, and I swear the fucker is *glowing* — but it's not like a supernatural light — I think he painted himself in glow in the dark paint or something because it just looks really bad and it's all over his dog too (who does _not_ seem very chill about this whole situation). While I'm sitting here watching this performance art, I start to wonder if this shit really is for me, and suddenly all I hear is screaming.

Dude is _not_ happy. Guess he's angry that I sorta zoned out after the first twenty minutes and fired up another LoL match. Dude just keeps getting louder and louder, "It's all just a comment. A COMMENT. I SEE IT NOW. EVERYTHING IS A COMMENT." We don't even have comments on our site, what the fuck dude? Right around the time he pulls out a box of matches, I decide this shit is *not* for me and close my laptop. Most people just don't get how hard this job is. *Fuck*, dude.

* * * *

<blockquote class="twitter-tweet tw-align-center" data-conversation="none" lang="en"><p>The in-house studio audience paid to give emotional affirmation to Twitter employees breaks into rapturous applause. They stand, some cry.</p>&mdash; Tom Gara (@tomgara) <a href="https://twitter.com/tomgara/statuses/501190317673291778">August 18, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

* * * *

This whole thing kinda fucked me up, so I took a few Ambien to knock me out. Apparently, product manager dude did not.

> From: Dude  
> To: All  
> Cc: Kyle  
> Subject: Important All-Hands Meeting
>
> Fellow Employioneers,
>
> I have some news. Kyle and I have figured it out. 3pm at the food trucks. You won't want to miss this.

Cool. Except I have no idea what we've figured out at all. All I can remember is something about comments. Suuuuuper unclear. So when we get to the food trucks, he just walks up and give me the biggest bear hug ever (and I think he smells like burned plastic?). No idea how, but I am *definitely* on his good side. This isn't going to go like last month's all-hands when we turned the site blue.

"Comments."

That's all he says. He just sits down, smiles at me, and snaps a piece of pork belly off his truffle fries. I'm so nervous I go through eight eel tacos and some BBQ'd snow leopard just so I don't have to say anything. Meanwhile, dude just grins at me the whole meal. Real uncomfortable. We all start walking back to the office, and I'm pretty sure cute-co-worker-in-the-corner is about to puke from the anxiety. Product manager dude looks over at me and breaks what can only be described as the most uncomfortable silence I've ever experienced, "Profound, right?" Fuck. What do I say? Do I ask him if he's still high? "Totally," I respond. Play it cool. Play it cool. "Damn right!" he exclaims and slaps my back.

When we get back to the office, he breaks the silence agian, "Thank you all for coming. Kyle's got this — follow his lead. Let's see where we are by tomorrow morning." *Motherfucker!* I'm freaking out, so I tell everyone I need ten minutes to pull together my thoughts. I open up my email and start furiously scanning the messages he sent me last night. Thankfully, there's eighteen emails labeled 'COMMENT' so I'm starting to think there's hope. The first twelve are doge pictures, but the thirteenth finally bears some fruit.

{% highlight ruby %}
class Post < Comment
end
{% endhighlight %}

I keep going through these emails and I'm starting to get it.

{% highlight ruby %}
class Photo < Comment
end

class Friend < Comment
end

class User < Comment
end
{% endhighlight %}

The seventeenth email is when it finally hits me like a ton of bricks.

{% highlight ruby %}
class CommentComment < Comment
end
{% endhighlight %}

Fuck. I've just agreed to replace everything in our site with comments. I mean, we joked about this, but *he cannot be real*. Just one polymorphic inheritable database table of comments, all pointing to each other and joining through each other.

Just then I realize that's what *I* want us to do. *Kyle's got this*, that's what he said.

* * * *

<blockquote class="twitter-tweet tw-align-center" data-conversation="none" lang="en"><p>A trapdoor in the ceiling opens, drenching him with cash and stock. An enormous dubstep bass line drops, the entire office parties for days.</p>&mdash; Tom Gara (@tomgara) <a href="https://twitter.com/tomgara/statuses/501190598398070784">August 18, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

* * * *

Well, as they say — *so it goes*. Comments, here we come baby! That eighteenth email, by the way?

> From: Dude  
> To: Kyle  
> Subject: COMMENT
>
> But only SOMETIMES

Not quite sure what to do with that one, but cute-co-worker-in-the-corner just rolled up to my desk so I'm just gonna go with what I have for now.

* * * *

*This post is full of satire and absurdity (sometimes I just like to write because it's fun — also that tweet series was hilarious), but I do kind of miss when Twitter was deterministic and didn't take psychedelic drugs to explain what the difference between a Favorite and a Retweet was. Chalk it up to another piece of software I have to explain with "you're not dumb, this shit is just confusing, even to me."*

*And shoutout to [@court3nay](https://twitter.com/court3nay) and [@technoweenie](https://twitter.com/technoweenie) for the CommentComment joke. STI, it's one hell of a drug.*
