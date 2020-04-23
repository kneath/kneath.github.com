---
layout: proxima/post
title: Using TextMate's TODO bundle
excerpt:
  If you use TextMate, you should really think about using the TODO bundle more often.  It's a simple, low-maintenance bundle that adds tremendous value to your code.
---
If you use TextMate, you should really think about using the TODO bundle more often.  It's a simple, low-maintenance bundle that adds tremendous value to your code.

## Setting TODO, FIXME, and CHANGELOG

Using the bundle is pretty easy.  In any language, just type in a quick comment with the prefix TODO, FIXME or CHANGED like so:

{% highlight ruby %}
def view
  # TODO: different display for different types of clips: active, processing, etc
  @clip = Clip.find(params[:id])
  # TODO: Make a real related clips dealieo
  @related_clips = Clip.find(:all, :limit => 6, :conditions => ["clips.status = 'processed'"])
end
{% endhighlight %}

Using this syntax lets you keep pushing ahead at full steam and leave the hard stuff for later.  For example, in the above example I wanted to get a quick functional prototype out the door.  It wasn't mandatory that the Related Clips *actually* be related: it was only mandatory that there was content present.

You can also use the keywords FIXME or CHANGED throughout your code, like so:

{% highlight ruby %}
def view
  # FIXME: This totally breaks if an invalid ID is given
  @clip = Clip.find(params[:id])
  # CHANGED: @related_clips now uses a model method related_clips
  @related_clips = Clip.related_clips(params[:id])
end
{% endhighlight %}

This lets others working on the code let you know that you *know* something is broken and/or changed, but you just don't have time to get to it.

## Getting the information back

Well, that's all fine and well.. but how do you know what needs to be fixed/changed/done ?  Just hit Ctr+Shift+T  and TextMate will pop up with a pretty little list, hyperlinked and all

<div class="figure">
  <img src="https://assets.warpspire.com/images/textmate-todo-bundle/list.gif" alt="Screenshot of the TODO list" />
  <small><em>Ctrl + Shift + T</em> brings up a list of all your todo's</small>
</div>

I use this bundle practically every time I open up Textmate.  It allows me to keep on a focused track of development, while still keeping a lot of "ooh, I need to do that sometime" kind of tasks on the radar.