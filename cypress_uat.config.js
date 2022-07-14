const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder: 'cypress/fixtures/uat',
    env: {
      name: 'SIT ENV',
      db: {
        'user': 'postgres',
        'host': "localhost",
        'database': 'test_global',
        'password': '95679',
        'port': 5432
      }

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { pgDB: (query) => require('cypress-postgres')(query.query, query.connection) })
    },
  },
});
