---
title: "Learning about Django: A simple potty tracking app"
layout: post
body_class: blog-post
description: "I wanted to learn more about Django and needed to keep track of my son's use of the potty so I made a simple web app."
---

We're using the web framework Django at work as a main development platform. I had played around with it before, once to make a database of local public schools and then to catalog my son't artwork. If you've ever tried to keep up with your child's artwork, you can imagine how that last project turned out. Recently, we've had to keep close track of how often my son is using the potty. It seemed like a good excuse to take another stab at using Django to make a simple web app. 

<!--more-->

## Planning and mockup

I wanted to be able for multiple people to use it. It had to be easy to use on mobile devices too. I also wanted it to be very simple to add a new "potty" with the app--no entering dates and times. Just press and button and get it done.

![mockup of my potty tracking web app]({{ site.baseurl }}{{ site.imgurl }}posts/potty-tracker-mockup.jpg)

I made a simple mockup with Keynote. I initially imagined that pressing the "+" button would increment the count for the current day. When I started building it, though I modified this a bit.

## What I ended up with

![home screen of potty tracking app]({{ site.baseurl }}{{ site.imgurl }}posts/potty-tracker-1.jpg)

The version that I ended up with changed quite a bit. I decided it would be more usable if the "add" button was always at the top left. The app's main view would also only track the current day's "pottys".

The next view is an overview of days with a count. The blue bar at the bottom is an area for adding up totals or displaying some other kind of information. Each day is a link to a detail view for that day as well.

![overview and detail screens of potty tracking app]({{ site.baseurl }}{{ site.imgurl }}posts/potty-tracker-2-3.jpg)

## Development and deployment

I wanted to follow best practices for developing a Django app as much as possible. I also decided to work with a Postgres database in development since that's what I would be using in production. I followed [this blog post](http://www.jeffknupp.com/blog/2012/02/09/starting-a-django-project-the-right-way/) to set up my project "the right way."

I have to be honest it took me about four tries to get this set up working properly, but once I did I could start building at the app. I riffed off of the [standard Django tutorial](https://docs.djangoproject.com/en/1.6/intro/tutorial01/) for building an app, and followed a few guides for handling Ajax requests with Django.

To host the app, I decided to use the free plan that [Heroku offers](https://www.heroku.com/). Since I was comfortable with Git and had followed the "best practices" steps for a Django app, deployment was fairly painless. I had a few problems with SSH keys and authentication, but resolved those eventually.

To have a free app, you can only run one "dyno." The main drawback is that the app goes into a pretty deep sleep after it hasn't been used for a while. There's a bit of a lag when you refresh the page. But you get what you pay for.

## Things to add

One of the features I plan to add is Facebook login. I want to experiement with this just to experiment, but also because I would like to be able to edit and delete entries from the app, and not have to go into the admin area to do it.

Otherwise, it's been a good learning experience and my son enjoys pressing the green button when he has used the potty.