const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    viewportWidth: 1280,
    viewportHeight: 800,

    setupNodeEvents(on, config) {
      // Ativa o Allure Plugin (gera allure-results)
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },

    // 👇 Adicione esta linha também
    env: {
      allure: true
    }
  },
});
