This application shows how to setup a node.js application serve static files and connecting up to New Relic

Pushing the app
* cf push --no-start
* cf set-env nodejs_newrelic NEW_RELIC_API_KEY my-newrelic-api-key
* cf start nodejs_newrelic
