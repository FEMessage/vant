#!/usr/bin/env sh
set -e
#rm -rf docs/dist

yarn build:site

#superman-cdn /vant ./docs/dist/*.js
#
#rm -rf docs/dist/*.js
#
#gh-pages -d docs/dist --add
