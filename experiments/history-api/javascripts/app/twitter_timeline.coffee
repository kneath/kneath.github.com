window.twitterTimelineCallback = (data) ->
  window.app.twitterTimeline.receivedData(data)

class window.TwitterTimeline
  # Distance from the bottom that we ask for more tweets, distance from the
  # top that we preload if getting an existing permalink.
  infiniteScrollThreshold: 300

  # How many pixels do we have to scroll before we permalink the page?
  permalinkScrollThreshold: 500

  # Are there tweets earlier than the ones we've shown?
  earlierTweetsPossible: false

  # Are there tweets later than the ones we've shown?
  laterTweetsPossible: true

  constructor: (wrapperElement) ->
    @elements =
      wrapper: wrapperElement
      lastTweet: wrapperElement.find('.tweet:last-child')
    @template = Handlebars.compile $('#tweet-template').html()

    @shouldCheckScroll = false
    @lastPermalinkPosition = $(document).scrollTop()
    $(window).scroll =>
      @shouldCheckScroll = true

    every 250, =>
      @didScroll()

    # Should we scroll down once the tweets are loaded? We should if we're
    # getting something other than the latest.
    @shouldScrollDown = false

    params = getUrlVars()
    url = @elements.wrapper.attr('data-url') + "&callback=?"
    if (params.max_id)
        url += "&max_id=" + params.max_id
        @shouldScrollDown = true
        @earlierTweetsPossible = true
    $.getJSON(url, twitterTimelineCallback)

  # Got some data back from the server, time to parse it!
  #
  # Returns nothing.
  receivedData: (tweets) ->
    rendered = for tweet in tweets
      context =
        id: tweet.id_str
        handle: tweet.user.screen_name
        name: tweet.user.name
        avatar: tweet.user.profile_image_url.replace('_normal', '_reasonably_small')
        body: tweet.text
        timestamp: tweet.created_at

      @elements.wrapper.append @template(context)

    @elements.lastTweet = @elements.wrapper.find('.tweet:last-child')

    if @shouldScrollDown
      # Where does 200 come from? Trial and error to restore tweets to where
      # you were before.
      $(window).scrollTop($(window).height() - @infiniteScrollThreshold - 200)
      @shouldScrollDown = false

  # So we've scrolled down the page, do we need to load more tweets? This
  # analyzes what tweets are visible and figures out if we need to load more
  # tweets (either earlier ones or later ones).
  #
  # Returns nothing.
  didScroll: ->
    return if !@shouldCheckScroll
    @shouldCheckScroll = false

    # Get more tweets for infinite scroll?

    visibleBottom = $(document).scrollTop() + $(window).height()
    bottomOfLastTweet = @elements.lastTweet.outerHeight() + @elements.lastTweet.offset().top

    if (bottomOfLastTweet - visibleBottom) < @infiniteScrollThreshold
      url = @elements.wrapper.attr('data-url') + "&callback=?&max_id=" + @elements.lastTweet.attr('data-id')
      $.getJSON(url, twitterTimelineCallback)


    # Permalink?
    if $(document).scrollTop() > (@lastPermalinkPosition + @permalinkScrollThreshold)
      @lastPermalinkPosition = $(document).scrollTop()
      for tweet in @elements.wrapper.find('.tweet')
        tweet = $(tweet)
        if tweet.offset().top >= (@lastPermalinkPosition - @infiniteScrollThreshold)
          @permalink(tweet)
          break

  permalink: (tweet) ->
    # Only give the good stuff to newer folks
    return if !window.history || !window.history.pushState

    # This is totally cheating and specific to my use, you'd probably have to
    # be smarter in the real world.
    url = window.location.pathname + "?max_id=" + tweet.attr('data-id')
    window.history.replaceState({}, document.title, url)
