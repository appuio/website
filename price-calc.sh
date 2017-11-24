#!/bin/sh

VERSION=3.0.0-alpha.0
DEST=tmp/price-calculator/javascripts/price-calculator-$VERSION.min.js

curl -s -L https://raw.githubusercontent.com/appuio/price-calculator/v$VERSION/dist/price-calculator-$VERSION.min.js > $DEST
