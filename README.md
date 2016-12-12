# APPUiO Website

[![Translated Widget](https://weblate.appuioapp.ch/widgets/appuio-website/-/svg-badge.svg)](#translate)

Uses middleman to generate static HTML

* Documentation: https://middlemanapp.com/

* Index is here: /localizable/index.html.erb

Optimize images before build:

    image_optim source/images/*.{jpg,png,gif,svg}

## Prerequisites

* Ruby v2.2.2
* Middleman

Once you have Ruby and RubyGems up and running, execute the following from the command line:

    $ gem install middleman
    $ gem install bundle

This will install Middleman, its dependencies and the command-line tools for using Middleman.

First of all, be sure to run under ```Ruby v2.2.2``` at least, then:

    $ bundle install

## Setup Development environment:
    
    $ middleman

## Build the static pages:

    $ bundle exec middleman build
    
    
## Deploy the Website with rsync

    $ rsync -a ./build/ user@example.com:~/path

## Translate

The majority of the website content can be comfortably translated using [Weblate](https://weblate.appuioapp.ch).
You can login using your GitHub account. User which have a `@puzzle.ch` or `@vshn.ch` mail address as their primary adress
with their GitHub account are automatically given access to the `appuio-website` project. Other users which
like to contribute translations please request access at 
[weblate@appuio.ch](mailto:weblate@appuio.ch?subject=Request%20Access%20to%20appuio-website%20project).

If you haven't configured languages you like to translate in your profile you won't see anything in 
the dashboard. To add the `appuio-website` project to the dashboard either click `Tools -> All projects`
then `appuio-website` and finally `Watch` on the top right corner of the page.  
Alternatively configure the languages you like to translate in your profile as documented
[here](https://docs.weblate.org/en/latest/user/profile.html).

Translations are automatically committed and pushed to this repository after 24 hours or when the
website is rebuilt. Your GitHub account is used for committing your translation so that you are properly
credited.

Please see the [Weblate Translators Guide](https://docs.weblate.org/en/latest/user/index.html) for
more information regarding translating with Weblate and direct any questions regarding the translation
of the APPUiO website to [weblate@appuio.ch](mailto:weblate@appuio.ch).

