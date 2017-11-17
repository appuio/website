#!/bin/sh

yarn install
DEST=tmp/price-calculator/javascripts
rm -rf $DEST
mkdir -p $DEST
cp node_modules/price-calculator/dist/price-calculator-2.0.1.min.js $DEST
