const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    excludeSpecPattern: "cypress/e2e/samplespecs/**/*.cy.js",
    baseUrl: "https://demoqa.com/",
    apiUrl: "https://www.boredapi.com/api/activity",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "artifacts/reports",
      reportTitle: "E2E Test Report",
      reportPageTitle: "E2E Test Report",
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
