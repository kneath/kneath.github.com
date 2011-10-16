---
layout: post
title: "Mustache, ERB and the future of templating"
excerpt:
  A little story about why I love Mustache, and how to bring that awesomeness to a legacy ERB app.
---
There are days that I feel like I've spent the better part of my life inside templating languages. I've rocked hundreds of different styles of templates over the past 8 years. Smarty,  vBulletin templates, generations of Wordpress, J2EE, XSLT, CFML, ERB, HAML, Mustache and every form of in-house bastardized template language that exists.

So when I say that [\{\{ mustache \}\}](http://mustache.github.com) is my favorite templating language I've ever worked with, I mean it with a great deal of sincerity and experience. It's syntactically elegant, focused on output (HTML), encourages documentation, and discourages unmaintainable magic. I want to use it everywhere.

## I mustache you, why mustache?

<div class="figure"><img src="http://assets.warpspire.com/images/mustache-erb/mustache.png" alt=-"Mustache - Logic-less template" /></div>

Mustache is more than a syntax. It's a different approach to traditional templating — mustache templates have no logic. The template files themselves are HTML and mustaches:

<div class="highlight"><pre><code class="html"><div class='line' id='LC1'><span class="nt">&lt;table</span> <span class="na">class=</span><span class="s">&quot;devlist&quot;</span><span class="nt">&gt;</span></div><div class='line' id='LC2'>&nbsp;&nbsp;<span class="cp">{{"{{"}}</span><span class="cp">#</span><span class="nv">developers</span><span class="cp">}}</span></div><div class='line' id='LC3'>&nbsp;&nbsp;<span class="nt">&lt;tr&gt;</span></div><div class='line' id='LC4'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">&quot;name&quot;</span><span class="nt">&gt;</span></div><div class='line' id='LC5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nt">&lt;h4&gt;&lt;a</span> <span class="na">href=</span><span class="s">&quot;</span><span class="cp">{{"{{"}}</span> <span class="nv">show_url</span> <span class="cp">}}</span><span class="s">&quot;</span><span class="nt">&gt;</span><span class="cp">{{"{{"}}</span> <span class="nv">name</span> <span class="cp">}}</span><span class="nt">&lt;/a&gt;</span> <span class="nt">&lt;em&gt;</span>(<span class="cp">{{"{{"}}</span> <span class="nv">github_username</span> <span class="cp">}}</span>)<span class="nt">&lt;/em&gt;&lt;/h4&gt;</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">&quot;languages&quot;</span><span class="nt">&gt;</span><span class="cp">{{"{{"}}</span> <span class="nv">languages</span> <span class="cp">}}</span><span class="nt">&lt;/p&gt;</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nt">&lt;/td&gt;</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nt">&lt;td</span> <span class="na">class=</span><span class="s">&quot;location&quot;</span><span class="nt">&gt;</span><span class="cp">{{"{{"}}</span> <span class="nv">location</span> <span class="cp">}}</span><span class="nt">&lt;/td&gt;</span></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="nt">&lt;/tr&gt;</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="cp">{{"{{"}}</span><span class="o">/</span><span class="nv">developers</span><span class="cp">}}</span></div><div class='line' id='LC11'><span class="nt">&lt;/table&gt;</span></div></code></pre></div>

You cannot modify variables. You cannot apply filters. You can only output variables or a collection of variables. Everything else happens inside of a *view*. A view can be written in any language of your choosing: C, Objective-C, Ruby, Python, Javascript, etc. I'll use Ruby since that's what we use:

{% highlight ruby %}
module Jobs
  module Views
    class Developers < Layout

      def developers
        @results.entries.map do |hit|
          name = hit["fullname"].empty? ? hit["username"].capitalize : hit["fullname"]
          {
            :name => name,
            :github_username => hit["username"],
            :location => hit["location"],
            :show_url => '/developers/' + hit["username"],
            :languages => hit["language"]
          }
        end
      end

      def developers_count
        @results.total_hits rescue 0
      end

    end
  end
end
{% endhighlight %}

It's just a good old Ruby class. Oh the wonder you can do with a class! Include modules, extend classes (such as that Layout class), and define any method you so desire. With any documentation your heart desires (something that's missing from every templating strategy I've ever used).

I thought I loved Mustache a year ago, but over time I've learned just how revolutionary separating templates from views is toward maintainability and collaboration. Anyone who knows HTML can edit Mustache templates. And all the magic that happens on the whole **V** side of MVC can be fully documented and separated into re-usable Ruby classes and modules.

## You want me to switch templating languages on my legacy app?

For all this talk, the application I spend most of my time working on is still ERB. In fact, the rails app that powers [GitHub](https://github.com) has over **500 erb templates**. We have dozens of people throwing hundreds of commits a day at the codebase in over **150 branches**. Switching to Mustache would be a disaster requiring everyone to stop development, switch patterns, and introduce an unknown number of bugs to our customers. A shitty trade.

I don't want to stop new feature development, but I do want better templates. And I know that Mustache is the direction I'd like to go. Luckily for me, I work with the smartest people in the world. A little while ago [Simon](https://github.com/sr) introduced a new templating strategy that I realy like.

## Mustache-style ERB templates

We've started using the mustache style but completely within ERB — we haven't modified the template rendering chain at all. Inside of a new helper, we'll create a view class:

{% highlight ruby %}
module NavigationHelper
  class RepositoryNavigationView
    include ActionView::Helpers::NumberHelper

    attr_reader :current_user, :current_repository

    def initialize(user, repo)
      @current_user = user
      @current_repository = repo
    end

    # What symbols should we trigger highlighting for various tabs?
    #
    # Returns an array of symbols.
    def highlights_for_code
      [:repo_source, :repo_downloads, :repo_commits, :repo_tags, :repo_branches]
    end

    def highlights_for_pulls
      [:repo_pulls]
    end

    def highlights_for_issues
      [:repo_issues]
    end

    # Should we show the wiki tab? We try and show it when it's useful to
    # someone using these rules:
    #
    # - Never show it if the wiki is disabled under the admin section.
    # - Show it if you have admin access to the repository
    # - Show it if there is content
    #
    # Returns true to show the tab.
    def show_wiki?
      return false unless current_repository.has_wiki?
      return true if logged_in? && current_repository.pushable_by?(current_user)
      current_repository.wiki.page_count > 0
    end

  end
end
{% endhighlight %}

Nicely documented, isolated from application-wide helpers and easy to find. Inside of the `html.erb`, create a new instance of this view object:

{% highlight erb %}
<% view = NavigationHelper::RepositoryNavigationView.new(current_user, current_repository) %>

<% unless @omit_repository_toolbar %>
  <ul class="tabs">
    <li><%= selected_link_to "Code", code_path, :highlight => view.highlights_for_code %></li>
    <li><%= selected_link_to "Network", network_path, :highlight => view.highlights_for_network %>
    <li><%= selected_link_to "Pull Requests", pull_requests_path, :highlight => view.highlights_for_pulls %></li>

    <% if view.show_issues? %>
      <li><%= selected_link_to "Issues", issues_path, :highlight => view.highlights_for_issues %></li>
    <% end %>

    <% if view.show_wiki? %>
      <li><%= selected_link_to "Wiki", wikis_path, :highlight => view.highlights_for_wiki %></li>
    <% end %>

    <li><%= selected_link_to "Stats &amp; Graphs", graphs_path, :highlight => view.highlights_for_graphs %></li>
  </ul>

  <%= render_subnav 'repositories/code',        view.highlights_for_code %>
  <%= render_subnav 'repositories/network',     view.highlights_for_network %>
  <%= render_subnav 'repositories/graphs',      view.highlights_for_graphs %>
  <%= render_subnav 'repositories/wiki',        view.highlights_for_wiki %>
<% end %>
{% endhighlight %}

If you're used to regular ERB templates it's immediately obvious where this data comes from — it's right at the top of the file! Ack the project for `RepositoryNavigationView` and you've found your view class. No magic.

One huge advantage of this tactic is that you can still use all the same Rails/ERB shortcuts for quick prototyping. If someone doesn't want to learn the new template strategy right away, they can use the same methods they've been using for years.

## Graceful upgrade path

Switching templating languages is something that needs to be done gracefully when you're working with others. Ripping out everyone's foundation is a recipe for unhappy developers. Rails is all about patterns, and sticking to those patterns is really important.

This strategy allows us to slowly convert the codebase to a better documented, view/template separation that anyone who's worked with ERB can understand. And if we choose to switch to true-and-blue Mustache some day, our code will be 80% there already.