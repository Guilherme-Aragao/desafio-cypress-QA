const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    viewportWidth: 1280,
    viewportHeight: 800,
    env: {
      allure: true,
      allureResultsPath: 'allure-results',
      allureReuseAfterSpec: true,
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
