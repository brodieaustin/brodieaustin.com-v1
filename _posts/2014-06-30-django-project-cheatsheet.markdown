---
layout: post
body_class: blog-post
title:  Setting up a Django project cheatsheet
date:   2014-06-30 21:30:00
---

I wrote this as an abbreviated guide to Jeff Knupps' ["Starting a Django 1.6 Project the Right Way"](http://www.jeffknupp.com/blog/2013/12/18/starting-a-django-16-project-the-right-way/). I left a few things out like deploying with Fabric and unit testing because I haven't learned how to integrate those into my Django development yet (baby steps, baby steps).

<!--more-->

## Setup a virtual environment

    $ mkvirtualenv project_name

Be sure to active the virtual environment. `virtualenvwrapper` does it for you when you create a new environment.

## Install Django

    $ pip install django

Remember you're installing django into the virtual environment not to your system. It gets installed each time you start a new environment.

## Setup project

    $ django-admin.py startproject project_name
    $ cd project_name
    $ git init
    $ touch .gitignore
    $ open .gitignore

Add the following to the `.gitignore` file:

    *.pyc
    .*swp

Save and close

    $ git add .
    $ git commit -m "first commit"

## Add South

    $ pip install south
    $ open project_name/settings.py

Jeff Knupp recommends creating the following containers for your apps: `DEFAULT_APPS`, `THIRD_PARTY_APPS`, `LOCAL_APPS`. *Because these are tuples, you need trailing commas.* Then concatenate them with:

    INSTALLED_APPS = DEFAULT_APPS + THIRD_PARTY_APPS + LOCAL_APPS

Add `south` to `LOCAL_APPS`.

    ./manage.py syncdb
    pip freeze > requirements.txt
    git add requirements project_name/settings.py
    git commit -m "added South"

## Create an app

    $ ./manage.py startapp app_name
    $ ./manage.py schemamigration myapp --initial
    $ ./manage.py migrate myapp

## Wrap-up

From here you start building out your models, urls, views, etc. In other words, the hard part really starts. As I mentioned above, the original article goes into setting up a development clone, testing, and deploying. Hopefully once I feel more comfortable with the process above, I can revist these topics. It's worth mentioning too that the first time I followed these instructions, I had to repeat them 5 or 6 times before I really understood what I was trying to accomplish and what was happening.