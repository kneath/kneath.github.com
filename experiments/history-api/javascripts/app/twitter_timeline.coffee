class window.TwitterTimeline
  constructor: (wrapperElement) ->
    @elements =
      wrapper: wrapperElement
    @template = Handlebars.compile $('#tweet-template').html()

  # Got some data back from the server, time to parse it!
  #
  # Returns nothing.
  receivedData: (tweets) ->
    rendered = for tweet in tweets
      context =
        handle: tweet.user.screen_name
        name: tweet.user.name
        body: tweet.text
        timestamp: tweet.created_at

      @elements.wrapper.append @template(context)