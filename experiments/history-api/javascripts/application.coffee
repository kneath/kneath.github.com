# Base application control class. Instantiated on pageload.
class Application
  constructor: ->
    @elements =
      tweets: $('.js-tweets')

    @twitterTimeline = new TwitterTimeline(@elements.tweets)

# Let's start this baby up
$ -> window.app = new Application