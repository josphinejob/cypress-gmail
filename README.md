# cypress-js-mocha

Cypress is a NodeJS based automation tool, available as an npm package.
Cypress framework is a JavaScript-based end-to-end testing framework built on Mocha.

Pre-requisites on Mac:

1.Install NodeJS
2.Download and install Visual Studio Code for IDE
3.Install yarn for dependency management

Local test repository:

* Navigate into the cloned directory, run nvm install. This will install the current version of node the project requires.
* Run yarn in the project to install your dependencies.

To run the test suite, there are 2 options.

1. yarn test - Opens the Cypress Test Runner with open command which is useful for development and debugging.
2. yarn open - Run tests headless using test command
3. generate-report - Generates a combined report in HTML format
To see the definitions of all commands, see "scripts" property in package.json.
