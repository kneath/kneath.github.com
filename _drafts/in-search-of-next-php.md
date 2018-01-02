# In search of the next PHP

The first programming language I really learned was [ASP 3.0](https://github.com/kneath/nightfire). It was all kinds of a mess to learn. I didn't (really) understand what a database was, hadn't the slightest understanding of HTTP, and no previous programming experience outside of HTML and 2001-era CSS. I had no mentors. I knew no one who knew this language. Just me, a couple of books, AltaVista, and a lot of trial and error. But I managed.

Practically speaking, ASP 3.0 is very similar to PHP with raw HTML interspersed with bits of VBScript:

```
<%
If RSM.EOF = FALSE Then
RSM.MoveFirst
If RSM.EOF = FALSE Then
	Dim strTime, Message
	Do While Not RSM.EOF
		strTime = RSM("Time")
		Message = RSM("Message")
%>
			<tr>
				<td bgcolor = "#000066"><%=strTime%></td>
				<td bgcolor = "#000033"><%=Message%></td>
			</tr>
<%
		RSM.MoveNext
	Loop
End If
End If
RSM.Close
Conn.Close
%>
```

There's a simple beauty in this type of programming. An entire program can be contained in a single file. Everything is visible: the backend logic, the view, everything that ends up in the browser is in exactly one file. There are no pre-processors or post-processors. No hidden dependencies. What you see is what you get. That is not to say this style of architecture of flawless. It has a tendency toward needless repetition, drifting coding styles, and a spaghetti of code holding your app together.

Reflecting back on my experiences with ASP 3.0 and PHP, I think there was something special there — specifically something in the way it taught me web-based product-focused programming (let's just call it web programming). Teasing it apart, I can identify some important pieces:

* Everything I built was easily shareable. Every thing I built, I could upload to a free hosting provider and instantly share it with anyone I wanted. This helped build my excitement for programming and push through the more difficult challenges to come.

* Because there was no framework or packaging framework, it allowed me to freely experiment with coding styles and structures _inside the same app_. I could try new architectural styles in piecemeal without having to rewrite the entire application or start a new project to experiment.

* Additionally, the lack of a framework forced me to learn integral pieces of the web one pice at a time through implementation. I had to struggle through how cookies worked, how headers worked, and what the difference between a GET and POST variables meant.

* Most importantly, this style of software architecture built a natural frustration. Frustration over repetition (by experiencing the downsides of such). Frustration over boilerplate code I shared between projects. Frustration over implementing a redesign with logic and view code mixed together.

I don't think this is how people learn anymore, and I think it's showing. I've had limited experience teaching people how to do this job throughout my career, and it's always felt like Russian Roulette as to whether they'd become successful programmers. There are the people that get it, and the people who don't. For those who don't get it, it's difficult to provide guidance.