#!/bin/bash

echo "Starting webhook.sh" > out.txt
git fetch
git checkout master
git pull > out.txt
fuser -k 9999/tcp
serve -s . -p 9999 &
