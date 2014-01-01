
COMPONENT = node_modules/.bin/component
CTEST     = node_modules/.bin/component-test
MOCHA     = node_modules/.bin/mocha
BROWSER  ?= chrome

all: BROWSER=phantom
all: test test-component

build: components index.js
	@$(COMPONENT) build --dev

components: node_modules component.json
	@$(COMPONENT) install --dev

node_modules:
	@npm install

test: node_modules
	@$(MOCHA) --reporter spec

test-component: build node_modules
	@$(CTEST) $(BROWSER)

clean:
	rm -rf node_modules components build

.PHONY: test test-component clean all
