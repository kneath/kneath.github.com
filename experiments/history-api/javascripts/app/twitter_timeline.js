(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.twitterTimelineLaterCallback = function(data) {
    return window.app.twitterTimeline.receivedData(data, false);
  };
  window.twitterTimelineEarlierCallback = function(data) {
    return window.app.twitterTimeline.receivedData(data, true);
  };
  window.TwitterTimeline = (function() {
    TwitterTimeline.prototype.infiniteScrollThreshold = 375;
    TwitterTimeline.prototype.permalinkScrollThreshold = 100;
    TwitterTimeline.prototype.earlierTweetsPossible = false;
    TwitterTimeline.prototype.laterTweetsPossible = true;
    function TwitterTimeline(wrapperElement) {
      var params, url;
      this.elements = {
        wrapper: wrapperElement,
        firstTweet: wrapperElement.find('.tweet:first-child'),
        lastTweet: wrapperElement.find('.tweet:last-child')
      };
      this.template = Handlebars.compile($('#tweet-template').html());
      this.shouldCheckScroll = false;
      this.lastPermalinkPosition = $(document).scrollTop();
      $(window).scroll(__bind(function() {
        return this.shouldCheckScroll = true;
      }, this));
      every(250, __bind(function() {
        return this.didScroll();
      }, this));
      this.shouldScrollDown = false;
      params = getUrlVars();
      url = this.elements.wrapper.attr('data-url') + "&callback=?";
      if (params.max_id) {
        url += "&max_id=" + params.max_id;
        this.shouldScrollDown = true;
        this.earlierTweetsPossible = true;
      }
      $.getJSON(url, twitterTimelineLaterCallback);
    }
    TwitterTimeline.prototype.receivedData = function(tweets, prepend) {
      var context, created_at, rendered, scrollOffset, tweet;
      if (prepend) {
        tweets = tweets.reverse();
      }
      rendered = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = tweets.length; _i < _len; _i++) {
          tweet = tweets[_i];
          created_at = new Date(tweet.created_at);
          context = {
            id: tweet.id_str,
            handle: tweet.user.screen_name,
            name: tweet.user.name,
            avatar: tweet.user.profile_image_url.replace('_normal', '_reasonably_small'),
            body: twttr.txt.autoLink(tweet.text),
            timestamp: $.timeago(created_at),
            author_url: "https://twitter.com/" + tweet.user.screen_name,
            permalink: "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str
          };
          _results.push(prepend ? this.elements.wrapper.prepend(this.template(context)) : this.elements.wrapper.append(this.template(context)));
        }
        return _results;
      }).call(this);
      if (prepend) {
        scrollOffset = $(window).scrollTop() + this.elements.firstTweet.offset().top - this.elements.wrapper.find('.tweet:first-child').offset().top;
        $(window).scrollTop(scrollOffset);
      }
      this.elements.lastTweet = this.elements.wrapper.find('.tweet:last-child');
      this.elements.firstTweet = this.elements.wrapper.find('.tweet:first-child');
      if (this.shouldScrollDown) {
        $(window).scrollTop($(window).height() - this.infiniteScrollThreshold);
        return this.shouldScrollDown = false;
      }
    };
    TwitterTimeline.prototype.didScroll = function() {
      var bottomOfLastTweet, topOfFirstTweet, tweet, url, visibleBottom, _i, _len, _ref, _results;
      if (!this.shouldCheckScroll) {
        return;
      }
      this.shouldCheckScroll = false;
      visibleBottom = $(document).scrollTop() + $(window).height();
      topOfFirstTweet = this.elements.firstTweet.offset().top;
      bottomOfLastTweet = this.elements.lastTweet.outerHeight() + this.elements.lastTweet.offset().top;
      if (this.laterTweetsPossible && ((bottomOfLastTweet - visibleBottom) < this.infiniteScrollThreshold)) {
        url = this.elements.wrapper.attr('data-url') + "&callback=?&max_id=" + this.elements.lastTweet.attr('data-id');
        $.getJSON(url, twitterTimelineLaterCallback);
      }
      if (this.earlierTweetsPossible && (topOfFirstTweet >= $(document).scrollTop())) {
        url = this.elements.wrapper.attr('data-url') + "&callback=?&since_id=" + this.elements.firstTweet.attr('data-id');
        $.getJSON(url, twitterTimelineEarlierCallback);
      }
      if (($(document).scrollTop() > (this.lastPermalinkPosition + this.permalinkScrollThreshold)) || ($(document).scrollTop() < (this.lastPermalinkPosition - this.permalinkScrollThreshold))) {
        this.lastPermalinkPosition = $(document).scrollTop();
        _ref = this.elements.wrapper.find('.tweet');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tweet = _ref[_i];
          tweet = $(tweet);
          if (tweet.offset().top >= (this.lastPermalinkPosition - this.infiniteScrollThreshold)) {
            this.permalink(tweet);
            break;
          }
        }
        return _results;
      }
    };
    TwitterTimeline.prototype.permalink = function(tweet) {
      var url;
      if (!window.history || !window.history.pushState) {
        return;
      }
      url = window.location.pathname + "?max_id=" + tweet.attr('data-id');
      return window.history.replaceState({}, document.title, url);
    };
    return TwitterTimeline;
  })();
}).call(this);
