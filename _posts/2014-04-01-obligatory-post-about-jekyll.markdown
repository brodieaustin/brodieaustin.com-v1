---
title: Obligatory post about Jekyll
layout: post
body_class: blog-post
description: So, I redid my personal site using Jekyll and Github pages and got a memo that I had to write a blog post about it.
---

So, I redid my personal site using [Jekyll](http://jekyllrb.com/) and [Github pages](https://pages.github.com/) and got a memo that I had to write a blog post about how I used Jeklyll and Github to do it. And here it is!

I'm (sort of) kidding about the memo, but not the other stuff. It really does seem that any time someone *makes the switch* that person then has to write a post about *the setup.* Well, here's my entry in that genre.

## Origin story

I started experimenting with Github pages two years ago during NaNoWriMo. I would write my daily word goals, commit them to git, then publish them with Github pages. I loved how fluid the whole experience felt.

At first, I used a most basic setup, just created a template, a page, and `_config.yml` file. That was it. The next thing I did was to create a simple page for a staff podcast I was working on at my last job.

## All in

That work culminating in using the Jekyll + Github combo extensively in the website redesign at my last job. I used *the setup* for [staging content](http://dpplweb.github.io/dppl-content/) and for creating [documentation](http://dpplweb.github.io/dppl-docs/) for the project.

For the content creation process, I also used something called [Prose.io](http://prose.io/), that provides a very simple editing interface for Github content. It's all [Backbone.js](http://backbonejs.org/) magic stuff. Again, the environment felt really clean and easy to work in (despite some harrowing hours spent trying to get everything set up just so).

## This time it's personal (sort of)

I had a realization recently that I wasn't using my hosting account that often. A few years ago when I signed up for it, it filled a need. But now I understand how to use a local environment for development and I'm surrounded (virtually at least) by servers every day. So, maintaining a personal hosting account didn't seem all that necessary anymore. 

Since Github basically hosts static sites for free, I figured it was worth making the change. In the process, I decided to not migrate any of my old content. I archived it (of course) locally. But I wanted to keep this space for things that relate a bit more to my work and professional life. 

This time around, the setup was pretty straightforward, especially compared to some of the stuff I did with the content and documentation sites. What ended up being the most difficult (for me) was getting the DNS set up to point my domain name to Github. It's not that this is hard, but my brain goes all fuzzy whenever I try to sort out A records and CNAMEs and all that.

## Should you do it too?

What I love about using Jekyll + Github pages, is that I can basically work with most elemental and fundamental tools on a computer--the command line and a text editor (Sublime Text right now, but I do have a copy of [Atom](https://atom.io/) I keep meaning to fire up).

If you aren't comfortable typing in things like:

    jekyll build

or 

    git push origin gh-pages

Or if you have no idea what that means, then the learning curve will be steeper than if you have some passing familiarity with these things.

That said, I find myself repeating *start small, start small* every day. It's really the only way to learn anything. Can you go from zero to having a full blown Jekyll site right away? 

> I find myself repeating *start small, start small* every day. 

Probably not, but you can start small by getting up and running with Git and Github. I would suggest starting off with Github's own ["getting started page"](https://help.github.com/articles/set-up-git) and then:

1. Create a repository
2. Make some changes
3. Add and commit the changes
4. Make a branch
5. Merge it

Rinse and repeat until the basics of Git sink in. Then Google `jekyll starter templates` and you'll find a few good starter templates (kind of wished I had done this myself). Here's one that looks pretty nice and simple:

    git clone https://github.com/liamzebedee/jekyll-html5-template.git

Have fun!