---
layout: post
title: MooTools Javascript Classes
excerpt:
  One of Javascript's major blunders when it comes to Object-Oriented design is the lack of true classes.  Lucky for us, we've had every library author out there have their whack at creating a class structure.
---
One of Javascript's major blunders when it comes to Object-Oriented design is the lack of true classes.  Lucky for us, we've had every library author out there have their whack at creating a class structure.

## What is a class?

A class is kind of a template.  One of the big concepts of OO is treating your code as real world objects.  Let's say you want to have three variables for different dogs: ollie, rowdy, and killer.  Each of these variables should be an *instance* of a *class*.  That class's name would be Dog. Each particular dog is an instance of the generic Dog class.  I won't go into much more detail here: there's plenty of reading to do on what classes really are, and how to use them best.

## MooTools = <3

Out of all the class systems I've used, I'd have to say MooTool's class system (spanwed from Dean Edward's Base) is the cleanest, most extensible system yet.  Creating and extending classes is ridiculously easy.

### Create a class

{% highlight javascript %}
var Animal = new Class({
	initialize: function(){
		this.text = "Animal Runs!";
	},
	run: function(){
		alert(this.text);
	}
});

var pet = new Animal();
pet.run();
// ==> "Animal Runs!"
{% endhighlight %}

(It's also fair to note that MooTools supports Prototype's `Class.create` method as well)

### Extend a class

{% highlight javascript %}
var Dog = Animal.extend({
	initialize: function(){
		this.parent();
	},
	bark: function(){
		this.run();
		alert("Woof! Woof!")
	}
});

var pet = new Dog();
pet.bark();
// ==> "Animal Runs!"
// ==> "Woof! Woof!"
{% endhighlight %}

You'll notice you still get access to parent methods (through `this.parent()`), as you can see where this.text gets initialized when a new instance of Dog is created.

The syntax is short, sweet, and to the point.  Furthermore it allows me all the flexibility I need... well, almost.  MooTools team gets bonus points for the next section.

## Javascript mixins... kinda

There are two common actions that many Javascript actions have: options, and callbacks.  MooTools have created a sort of ruby-style mixin for classes to handle these functions.  MooTools calls these mixins Utility Classes.  To enable these, add this line to the code above:

{% highlight javascript %}
Dog.implement(new Options, new Events);
{% endhighlight %}

## Options

What does this do?  First off, it allows for quick, easy, extendible options.  All you do is set your default options in an options property, and then call the `setOptions` method inside your class.  Here's an example:

{% highlight javascript %}
var Dog = new Class({
	options: {
		age: 5,
		type: "Jack Russel Terrier"
	},
	initialize: function(name, options){
		// Here's the magic!
		this.setOptions(options)

		this.name = name;
	},

	bark: function(){
		alert("My name is " + this.name + " and I am " + this.options.age + " years old");
		this.fireEvent('afterBark', this);
	}
});
Dog.implement(new Options, new Events);

var ollie = new Dog('Ollie');
ollie.bark();
// ==> "My name is Ollie and I am 5 years old"

var rowdy = new Dog('Rowdy', {age:15});
rowdy.bark();
// ==> "My name is Rowdy and I am 15 years old"
{% endhighlight %}

By mixing in the Options methods, you now have access to setOptions, which either uses user-defined options or class-based defaults (with one line of code).

### Events

You can also define custom events (usually called callbacks).  Notice the `this.fireEvent('afterBark')` bit in the Dog class above?  Check it out:

{% highlight javascript %}
var killer = new Dog('Killer');
killer.addEvent('afterBark', function(dog){
	alert(dog.name + ' just barked!');
});
killer.bark();
// ==> "My name is Killer and I am 5 years old"
// ==> "Killer just barked!"
{% endhighlight %}

It allows you to tie into the *same* event functionality used for the DOM, but with your own methods you create in your classes. I'm in love with this easy functionality -- sure there's been other ways to do this, but none so elegant as what the Moo team has come up with.

### Chain

The last utility class is the Chain class.  This allows for some nice chaining of classes: I'll leave it up to you to explore this one since I haven't used it in great detail yet.  In a nutshell: it allows for time-dependent chains (so that events fire after another one is complete).

## Conclusion

Every good Javascript developer knows that there's 50 ways to skin a cat when it comes to classes and Javascript.  But for me, one of the largest reasons MooTools is my framework of choice is the underlying class system.  No extending `Object`, and no overriding of parent methods.  The syntax is clean and easy to remember, giving it huge bonus points in my book.

Personally, I would like to thank the smarter developers who have taken the hard hits with Javascript to implement these nice OO techniques.  Without them, my Javascript would still be procedural-based with tons of global variables thrown about.  Yay for frameworks!