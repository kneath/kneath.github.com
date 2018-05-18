---
layout: post
title: Xcode window management sucks
excerpt:
  I posted some thoughts to twitter last night about how much the Xcode window management drives me insane.  What I got back was a huge reaction of "it's perfect" and "this is how OSX works"  Suddenly I was wondering, am I just insane for thinking the window management is absolutely horrible?
---

<div class="infobox">
<p><strong>Hi, did you come here to tell me that Xcode offers "all-in-one" editing?</strong> Please, don't send me an email. This is addressed in this article if you take time to read it.</p>
</div>

I posted some thoughts to twitter last night about how much the Xcode window management drives me insane.  What I got back was a huge reaction of "it's perfect" and "this is how OSX works"  Suddenly I was wondering, am I just insane for thinking the window management is absolutely horrible?

No, no. I'm not. It's horrible.  Just because Apple built it, does not make it perfect.

##  Tabs are the future (actually it's been the standard for years)

Tabs have clearly proven themselves to be a superior method for editing multiple code files.  Why? Because the most recognizable thing about code file is it's *filename*.  Not the look of the text.  Let's look at this through some examples.

### Case #1: Window-based management FTW, Photoshop

<div class="figure">
  <a href="https://assets.warpspire.com/images/xcode-windows/photoshop_full.jpg"><img src="https://assets.warpspire.com/images/xcode-windows/photoshop.jpg" /></a>
  <small>Example of window management in Photoshop</small>
</div>

Window management in OSX defaults to a new window for each document. This works wonderfully for most applications when you can see the differences visually.  Photoshop is a great example.  Using Exposé, I can see which document I mean to be working on at a glance  The *visual representation* of the document is the unique identifier.

Some more points on why this works so well:

* Image documents are the *only windows* you will ever see in Photoshop. Everything else is a panel. This functionality is the same for all five-star document-based apps. iWork, iLife, etc.  There is a really good reason Apple chose to hide panels when activating Exposé.
* Photoshop is a document immersive program. It's unlikely you'll be working on more than one PSD at a time.  The document is all that matters. Conversely with code, the project is all that matters (not one code file).

### Case #2: Tab-based management FTW, Texmtate

<div class="figure">
  <a href="https://assets.warpspire.com/images/xcode-windows/textmate_full.jpg"><img src="https://assets.warpspire.com/images/xcode-windows/textmate.jpg" /></a>
  <small>Example of window management in Texmate</small>
</div>

Window management for Textmate is handled via tabs and a persistent sidebar.  At a glance, you can see all files you're currently working on.  In the case of Cocoa, you are often switching between interface & implementation files, but this is easily handled via cmd-opt-up, so long as you have the name of the class right, you've got the right file.

Some points on why this works so well:

* Windows provide a way to group files in a meaningful manner. Each window is a unique project. Remember, the project is the important thing -- when coding in Cocoa, you'll need to edit multiple files at once to make them work with one another.
* I can quickly move between individual files via the keyboard. Considering coding is almost purely typing, keeping my hands on the keyboard is *killer*.

### Case #3: WTF-based management FTL, Xcode

<div class="figure">
  <a href="https://assets.warpspire.com/images/xcode-windows/xcode_full.jpg"><img src="https://assets.warpspire.com/images/xcode-windows/xcode.jpg" /></a>
  <small>Example of window management in Xcode</small>
</div>

Window management for Xcode is handled via a combination of this thing called a Project window, which morphs depending on it's toolbar state, windows for each document, and windows for ancillary programs (like the model editor).  Please note I have the same number of windows open in this screenshot as I did in Textmate (7).  It's actually a pretty small program,  but completely overwhelming.

Some points on why this doesn't work so well:

* Windows mean different things.  Some mean code documents, some mean visual aid, some mean a kind of "project" that groups all things.
* The project window continually morphs it's state as you enter and exit debugging. It's appearance is different, not upon your application's state, but rather the toolbar button in the upper left, that automatically changes (one-way).
* All the code looks the same. There is no unique identifier in Exposé mode. I must selectively hover over each file and read it's filename. Or, I can exposé to try and find the project window (which can look much like a code window too), and then open a new document.
* If I accidentally Cmd-W the Project window, I have to start from scratch, opening the whole project and each document again. This often happens as you accidentally open windows and want to immediately close them.

Some may counter, telling me that Xcode offers editing inside the project window. Sure, this works, but offers just as many frustrations.

* You *must* single click on files to open them. Double-clicking them still opens them in a new document.
* Because of the above, and the last bullet on the previous list, I constantly find myself accidentally closing the project because I was trying to close an accidentally opened window.
* Unless I choose not to run my program, I constantly have to switch out of debug mode and back into editing mode via the toolbar.
* Every single time I open Xcode I have to force it into editor mode.
* There is a delay in single clicking a document.  You click the file on the sidebar, the sidebar highlights, but the new document doesn't open in the editing window for a second or two. When trying to scan documents for some code, this results in endless confusion.
* There's no idea of "open files" in this mode. No context for which I'm working. I can't say, work on the View Controllers by opening each of them. Each time I must select the unique view controller in the sidebar, ordered alphabetically.

## It's a shame

It's a shame, because other than the window management, Xcode is really an awesome IDE. The actual text editing is great as is debugging, scriptability, and file management. It really helps solve all the problems that Cocoa apps force upon mere text editors (long method names, class names, files being in one directory, different types of files in the same directory, etc).

It's the program's fatal flaw in my mind.  It isn't that it's sub-par, or not good enough -- it's downright infuriating to use. I want to do mean things to cute kittens whenever I use it.  So I don't. I use TextMate. Which actually is very good at Cocoa & Objective-C. But it means much more typing (especially with the shift key) since TextMate favors tab-triggers rather than tab-completion.

At the end of the day, this is the kind of stuff I hope Mac developers care about.  It's about making the user experience the #1 priority in software development.  And it's something that I'm confident Apple knows about and intends to fix in future versions of Xcode. Because they care about the user experience.