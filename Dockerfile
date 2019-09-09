FROM ruby:2-alpine

RUN apk add --no-cache --update build-base bash ruby-dev libxml2-dev libxslt-dev && \
    gem install middleman --no-document

# Use libxml2, libxslt a packages from alpine for building nokogiri
RUN bundle config build.nokogiri --use-system-libraries

# Prepare application working environment
ENV app /app
RUN mkdir $app
WORKDIR $app

ENV BUNDLE_PATH /bundle

ADD . $app
