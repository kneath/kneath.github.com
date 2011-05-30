# JSONP callback for tweets fetched later than current (max_id)
window.twitterTimelineLaterCallback = (data) ->
  window.app.twitterTimeline.receivedData(data, false)

# JSONP callback for tweets fetched earlier than current (since_id)
window.twitterTimelineEarlierCallback = (data) ->
  window.app.twitterTimeline.receivedData(data, true)

class window.TwitterTimeline
  # Distance from the bottom that we ask for more tweets, distance from the
  # top that we preload if getting an existing permalink.
  infiniteScrollThreshold: 375

  # How many pixels do we have to scroll before we permalink the page?
  permalinkScrollThreshold: 100

  # Are there tweets earlier than the ones we've shown?
  earlierTweetsPossible: false

  # Are there tweets later than the ones we've shown?
  laterTweetsPossible: true

  # Figures out what kind of request to make (is there a max_id present?),
  # makes the request to the API, and activates the scroll event handlers
  # that make infinite scrolling possible.
  #
  # wrapperElement - The HTML element to insert the tweets into. It should
  #                  have a data-url attribute pointing to the desired API
  #                  endpoint.
  #
  # Returns nothing.
  constructor: (wrapperElement) ->
    @elements =
      wrapper: wrapperElement
      firstTweet: wrapperElement.find('.tweet:first-child')
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
    $.getJSON(url, twitterTimelineLaterCallback)

  # Got some data back from the server, time to parse it!
  #
  #  tweets - Array of Tweet Objects returned from the Twitter API.
  #           http://dev.twitter.com/doc/get/statuses/user_timeline
  # prepend - Boolean indicating whether we should prepend the tweets to the
  #           timeline
  #
  # Returns nothing.
  receivedData: (tweets, prepend=false) ->
    # Since we're prepending data, we need to build from the bottom up
    tweets = tweets.reverse() if prepend

    rendered = for tweet in tweets
      created_at = new Date(tweet.created_at)
      context =
        id: tweet.id_str
        handle: tweet.user.screen_name
        name: tweet.user.name
        avatar: tweet.user.profile_image_url.replace('_normal', '_reasonably_small')
        body: twttr.txt.autoLink(tweet.text)
        timestamp: $.timeago created_at
        author_url: "https://twitter.com/" + tweet.user.screen_name
        permalink: "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str

      if prepend
        @elements.wrapper.prepend @template(context)
      else
        @elements.wrapper.append @template(context)

   # Preserve the scroll position if we're adding stuff above
    if prepend
      @earlierTweetsPossible = tweets.length > 0
      scrollOffset = $(window).scrollTop() + @elements.firstTweet.offset().top
      scrollOffset -= @elements.wrapper.find('.tweet:first-child').offset().top
      $(window).scrollTop(scrollOffset)

    @elements.lastTweet = @elements.wrapper.find('.tweet:last-child')
    @elements.firstTweet = @elements.wrapper.find('.tweet:first-child')

    if @shouldScrollDown
      $(window).scrollTop($(window).height() - @infiniteScrollThreshold)
      @shouldScrollDown = false

  # So we've scrolled down the page, do we need to load more tweets? This
  # analyzes what tweets are visible and figures out if we need to load more
  # tweets (either earlier ones or later ones).
  #
  # Returns nothing.
  didScroll: ->
    return if !@shouldCheckScroll
    @shouldCheckScroll = false

    # Get more tweets for infinite scroll
    visibleBottom = $(document).scrollTop() + $(window).height()
    topOfFirstTweet = @elements.firstTweet.offset().top
    bottomOfLastTweet = @elements.lastTweet.outerHeight() + @elements.lastTweet.offset().top

    url = @elements.wrapper.attr('data-url')

    # Get more tweets for infinite scroll downwards?
    if @laterTweetsPossible && ((bottomOfLastTweet - visibleBottom) < @infiniteScrollThreshold)
      url += "&callback=?&max_id=" + @elements.lastTweet.attr('data-id')
      $.getJSON(url, twitterTimelineLaterCallback)

    # Get more tweets for infinite scroll upwards?
    if (@earlierTweetsPossible && (topOfFirstTweet >= $(document).scrollTop()))
      url += "&callback=?&since_id=" + @elements.firstTweet.attr('data-id')
      $.getJSON(url, twitterTimelineEarlierCallback)


    # Permalink?
    scrolledDownEnough = $(document).scrollTop() > (@lastPermalinkPosition + @permalinkScrollThreshold)
    scrolledUpEnough = $(document).scrollTop() < (@lastPermalinkPosition - @permalinkScrollThreshold)
    if (scrolledDownEnough || scrolledUpEnough)
      @lastPermalinkPosition = $(document).scrollTop()
      for tweet in @elements.wrapper.find('.tweet')
        tweet = $(tweet)
        if tweet.offset().top >= (@lastPermalinkPosition - @infiniteScrollThreshold)
          if tweet.is(':first-child') && !@earlierTweetsPossible
            @permalink(false)
          else
            @permalink(tweet)
          break

  # Permalink the page.
  #
  # tweet - A <div.tweet> jQuery collection to permalink to. If false, the
  #         permalink is cleared.
  #
  # Returns nothing.
  permalink: (tweet) ->
    # Only give the good stuff to newer folks
    return if !window.history || !window.history.pushState

    # This is totally cheating and specific to my use, you'd probably have to
    # be smarter in the real world.
    url = window.location.pathname
    url += "?max_id=" + tweet.attr('data-id') if tweet
    window.history.replaceState({}, document.title, url)
