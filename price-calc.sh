#!/bin/sh

VERSION=2.0.1
DEST=tmp/price-calculator/javascripts/price-calculator-$VERSION.min.js

curl -s -L https://raw.githubusercontent.com/appuio/price-calculator/v$VERSION/dist/price-calculator-$VERSION.min.js > $DEST
