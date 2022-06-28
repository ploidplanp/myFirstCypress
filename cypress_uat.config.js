const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder: 'cypress/fixtures/uat',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
