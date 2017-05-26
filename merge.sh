#!/bin/bash

CURRENT_BRANCH=$(git branch | grep -E "\*" | cut -f2 -d" ")
echo $CURRENT_BRANCH

git checkout development
git merge $CURRENT_BRANCH

git checkout master
git merge development

git push origin master
git checkout development
git checkout $CURRENT_BRANCH

git status
