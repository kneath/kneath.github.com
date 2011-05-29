(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.twitterTimelineCallback = function(data) {
    return window.app.twitterTimeline.receivedData(data);
  };
  window.TwitterTimeline = (function() {
    TwitterTimeline.prototype.infiniteScrollThreshold = 300;
    TwitterTimeline.prototype.permalinkScrollThreshold = 500;
    function TwitterTimeline(wrapperElement) {
      var url;
      this.elements = {
        wrapper: wrapperElement,
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
      url = this.elements.wrapper.attr('data-url') + "&callback=?";
      $.getJSON(url, twitterTimelineCallback);
    }
    TwitterTimeline.prototype.receivedData = function(tweets) {
      var context, rendered, tweet;
      rendered = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = tweets.length; _i < _len; _i++) {
          tweet = tweets[_i];
          context = {
            id: tweet.id_str,
            handle: tweet.user.screen_name,
            name: tweet.user.name,
            avatar: tweet.user.profile_image_url.replace('_normal', '_reasonably_small'),
            body: tweet.text,
            timestamp: tweet.created_at
          };
          _results.push(this.elements.wrapper.append(this.template(context)));
        }
        return _results;
      }).call(this);
      return this.elements.lastTweet = this.elements.wrapper.find('.tweet:last-child');
    };
    TwitterTimeline.prototype.didScroll = function() {
      var bottomOfLastTweet, tweet, url, visibleBottom, _i, _len, _ref, _results;
      if (!this.shouldCheckScroll) {
        return;
      }
      this.shouldCheckScroll = false;
      visibleBottom = $(document).scrollTop() + $(window).height();
      bottomOfLastTweet = this.elements.lastTweet.outerHeight() + this.elements.lastTweet.offset().top;
      if ((bottomOfLastTweet - visibleBottom) < this.infiniteScrollThreshold) {
        url = this.elements.wrapper.attr('data-url') + "&callback=?&max_id=" + this.elements.lastTweet.attr('data-id');
        $.getJSON(url, twitterTimelineCallback);
      }
      if ($(document).scrollTop() > (this.lastPermalinkPosition + this.permalinkScrollThreshold)) {
        this.lastPermalinkPosition = $(document).scrollTop();
        _ref = this.elements.wrapper.find('.tweet');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tweet = _ref[_i];
          tweet = $(tweet);
          if (tweet.offset().top >= this.lastPermalinkPosition - this.infiniteScrollThreshold) {
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
