window.twitterTimelineCallback = (data) ->
  window.app.twitterTimeline.receivedData(data)

class window.TwitterTimeline
  infiniteScrollThreshold: 300

  constructor: (wrapperElement) ->
    @elements =
      wrapper: wrapperElement
      lastTweet: wrapperElement.find('.tweet:last-child')
    @template = Handlebars.compile $('#tweet-template').html()

    @shouldCheckScroll = false
    $(window).scroll =>
      @shouldCheckScroll = true

    every 250, =>
      @didScroll()

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

  # So we've scrolled down the page, do we need to load more tweets? This
  # analyzes what tweets are visible and figures out if we need to load more
  # tweets (either earlier ones or later ones).
  #
  # Returns nothing.
  didScroll: ->
    return if !@shouldCheckScroll
    @shouldCheckScroll = false

    visibleBottom = $(document).scrollTop() + $(window).height()
    bottomOfLastTweet = @elements.lastTweet.outerHeight() + @elements.lastTweet.offset().top

    if (bottomOfLastTweet - visibleBottom) < @infiniteScrollThreshold
      url = @elements.wrapper.attr('data-url') + "&callback=?&max_id=" + @elements.lastTweet.attr('data-id')
      $.getJSON(url, twitterTimelineCallback)