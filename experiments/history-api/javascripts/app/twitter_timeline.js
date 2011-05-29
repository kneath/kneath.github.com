(function() {
  window.TwitterTimeline = (function() {
    function TwitterTimeline(wrapperElement) {
      this.elements = {
        wrapper: wrapperElement
      };
      this.template = Handlebars.compile($('#tweet-template').html());
    }
    TwitterTimeline.prototype.receivedData = function(tweets) {
      var context, rendered, tweet;
      return rendered = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = tweets.length; _i < _len; _i++) {
          tweet = tweets[_i];
          context = {
            handle: tweet.user.screen_name,
            name: tweet.user.name,
            body: tweet.text,
            timestamp: tweet.created_at
          };
          _results.push(this.elements.wrapper.append(this.template(context)));
        }
        return _results;
      }).call(this);
    };
    return TwitterTimeline;
  })();
}).call(this);
