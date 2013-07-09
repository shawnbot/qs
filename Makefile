all: qs.min.js

test:
	mocha tests.js

qs.min.js: qs.js
	uglifyjs $< > $@

clean:
	rm -f qs.min.js
