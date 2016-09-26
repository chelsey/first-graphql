.PHONY: serve migrate

# Run a local development server
serve:
		nodemon --exec babel-node --presets es2015,stage-0 -- index.js

migrate:
		node_modules/.bin/knex migrate:latest