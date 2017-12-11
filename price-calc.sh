#!/bin/sh

VERSION=3.0.2
DEST_DIR=tmp/price-calculator/javascripts
DEST=$DEST_DIR/price-calculator.min.js

rm -rf $DEST_DIR
mkdir -p $DEST_DIR
curl -s -L https://raw.githubusercontent.com/appuio/price-calculator/v$VERSION/dist/price-calculator-$VERSION.min.js > $DEST
