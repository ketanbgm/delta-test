#!/bin/bash

for i in $(find . -type f -name "*.scss" | grep -Ev "_|bootstrap|bower_components|node_modules" | xargs)
	do echo $i
	stylefmt $i
done

for i in $(find . -type f -name "*.scss" | grep -E "elements|pages|tables" | grep -Ev "bootstrap|bower_components|node_modules|palettes" | xargs)
	do echo $i
	stylefmt $i
done
