# Base application control class. Instantiated on pageload.
class Application
  constructor: ->
    @elements =
      tweets: $('.js-tweets')

    @twitterTimeline = new TwitterTimeline(@elements.tweets)

    # Figure out what params to send to the twitter API

    # Send API request
    @twitterTimeline.request

    # Render tweets on return

# Let's start this baby up
$ -> window.app = new Application