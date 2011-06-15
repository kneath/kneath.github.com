---
layout: link
title: "Excellent embedding markup"
type: link
link: https://twitter.com/about/resources/followbutton
---

I was playing around with Twitter's new Follow Button and I couldn't help but notice that the embedding markup is some of the best I've ever seen.

    <a href="http://twitter.com/kneath" class="twitter-follow-button" data-show-count="false">Follow @kneath</a>
    <script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>

I love the idea of using regular HTML with feature-flags in `data` attributes combined with a common script. Can't wait to play around with this style on [Gist](https://gist.github.com).