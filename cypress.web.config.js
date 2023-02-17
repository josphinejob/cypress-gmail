const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    excludeSpecPattern: "cypress/e2e/api/*.cy.js",
    baseUrl: "https://demoqa.com/",
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
