#!/bin/bash -e
git add .
git commit -m "update articles"
GIT_USER=v1ll4n yarn deploy
