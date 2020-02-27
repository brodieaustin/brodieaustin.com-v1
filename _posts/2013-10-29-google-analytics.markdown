---
layout: post
body_class: blog-post
title:  "Google Analytics"
date:   2013-10-29 17:34:00
---

I started testing out event tracking with Google Analytics recently. There are two main ways that I’ve tried using it so far:

- Dynamically with Javascript/jQuery
- Click event added to link

The tracking event requires the following components:

+ A category
+ An action
+ A label

In all three cases, each component can be arbitrary text. So really anything goes. The only warning, particularly regarding categories, is that you have to be consistent about the names you give things. In other words “Database” and “Databases” will be tracked as separate categories.Here is more information about the setup, so far:

<!--more-->

## Dynamically with Javascript

On the website it is easy to dynamically add the event tracking to specific links with jQuery and javascript. The script looks for a specific class then constructs the tracking event from the date, a data element, and the current page.An event tracking link should look like:

{% highlight html %}
    <a href="http://example.com" class="track" data-ga-category="the-category">Link Text</a>
{% endhighlight %}

The two main features to note are the class name “track” and the “data-ga-category.” The Data element was introduced in HTML5. It can be used to store application/page specific information. In this case, it stores a category name for the tracking event.

The script looks for every link with the “track” class then adds an click event to it that looks like:

{% highlight javascript %}
    _gaq.push(['_trackEvent', category, action, label])
{% endhighlight %}

It also adds a “tracking” class to the link, so that a tracked link could be styled differently, if desired.

## The Script

This is the jquery function I created to actually attach the event to the links:
{% highlight javascript %}
$(function(){
    if (_gaq){
        //set category
        //var c= 'Database-Promotions';
        //set action from date
        var d = new Date();
        var y = d.getFullYear();
        var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var m = month_names[d.getMonth()];
        var a = y + '-' + m;
        //set label from location path
        var l = window.location.pathname;
        //find each link with "track" class and add tracking event
        $('.track').each(function(){
            var c = $(this).attr('data-ga-category');
            $(this).click(function(){
            _gaq.push(['_trackEvent', c, a, l]);
        }).addClass('tracking');
    });
    }
});
{% endhighlight %}

## Click Event added to link

On the blogs and other locations where the full script to add the tracking code can’t be used, it is necessary to attach a “click” event directly to the link. Generally hard coding Javascript into HTML is considered a VERY BAD IDEA , but Google suggests it and sometimes you don’t have a choice.

An event tracking link in this case should look like:

    <a href="http://example.com" onClick="_gaq.push(['_trackEvent', 'category', 'action', 'label'])">Link Text</a>

Note here that the link has an “onClick” event instead of a class and data attribute. The event is baked right in. Also, notice that category, action, and label have single quotes around them. These will have to be typed right into the code, since there’s no way to dynamically create these (well, there could be a way, but I digress…)
