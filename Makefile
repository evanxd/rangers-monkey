.PHONY: default
default: jshint

jshint:
	./node_modules/.bin/jshint .
