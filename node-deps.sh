#!/bin/sh

yarn install
DEST=tmp/price-calculator/javascripts
mkdir -p $DEST
cp node_modules/price-calculator/dist/price-calculator-1.0.0.min.js $DEST
