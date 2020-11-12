#!/bin/sh

if [ ! -d build ]; then
    echo "création du répertoire build"
    mkdir build
fi

npx tsc
# curl -X POST -s --data-urlencode 'input@build/main.js' https://javascript-minifier.com/raw > build/main.min.js
# rm build/main.js

echo "compilation terminer"