(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.twitterTimelineCallback = function(data) {
    return window.app.twitterTimeline.receivedData(data);
  };
  window.TwitterTimeline = (function() {
    TwitterTimeline.prototype.infiniteScrollThreshold = 300;
    function TwitterTimeline(wrapperElement) {
      this.elements = {
        wrapper: wrapperElement,
        lastTweet: wrapperElement.find('.tweet:last-child')
      };
      this.template = Handlebars.compile($('#tweet-template').html());
      this.shouldCheckScroll = false;
      $(window).scroll(__bind(function() {
        return this.shouldCheckScroll = true;
      }, this));
      every(250, __bind(function() {
        return this.didScroll();
      }, this));
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
      var bottomOfLastTweet, url, visibleBottom;
      if (!this.shouldCheckScroll) {
        return;
      }
      this.shouldCheckScroll = false;
      visibleBottom = $(document).scrollTop() + $(window).height();
      bottomOfLastTweet = this.elements.lastTweet.outerHeight() + this.elements.lastTweet.offset().top;
      if ((bottomOfLastTweet - visibleBottom) < this.infiniteScrollThreshold) {
        url = this.elements.wrapper.attr('data-url') + "&callback=?&max_id=" + this.elements.lastTweet.attr('data-id');
        return $.getJSON(url, twitterTimelineCallback);
      }
    };
    return TwitterTimeline;
  })();
}).call(this);
