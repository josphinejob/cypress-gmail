const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    excludeSpecPattern: "cypress/e2e/demoqa/*.cy.js",
    baseUrl: null,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "artifacts/reports",
      html: false,
      json: true,
      overwrite: false
    }
  },
  env: {
    username: "EnvironmentUser"
  },
  screenshotsFolder: "artifacts/screenshots",
  videosFolder: "artifacts/videos"
});
