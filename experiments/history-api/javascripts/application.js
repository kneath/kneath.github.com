(function() {
  var Application;
  Application = (function() {
    function Application() {
      this.elements = {
        tweets: $('.js-tweets')
      };
      this.twitterTimeline = new TwitterTimeline(this.elements.tweets);
      this.twitterTimeline.request;
    }
    return Application;
  })();
  $(function() {
    return window.app = new Application;
  });
}).call(this);
