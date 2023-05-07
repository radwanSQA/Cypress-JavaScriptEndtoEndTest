# Cypress-JavaScriptEndtoEndTest

### Cypress Introduction

- FrontEnd web automation testing tool
- modern web application
- React Js,Angular js...

-Automation any application which run browser

#### points

     - use javascript
     - does not use any salenium
     - open sources
     - TestRunner
     - nodes js env and comes with npm

#### who use cypress - Dev & QA

- end to end test case
- automation integration test
- unit test case
- API testing

#### Difference Cypress & Selenium

Cypress and Selenium are both popular tools for automating web application testing. Here are some of the key differences between the two:

Architecture: Cypress is built on a completely different architecture compared to Selenium. While Selenium is based on the WebDriver protocol, Cypress is built on a JavaScript-based architecture that directly interacts with the browser using its APIs.

Test Runner: Cypress includes its own test runner, which is built into the framework, while Selenium requires a separate test runner to be installed and configured, such as TestNG, JUnit, or NUnit.

Execution Speed: Cypress is generally considered to be faster than Selenium because it executes tests directly in the browser, whereas Selenium relies on a remote driver to execute tests.

Debugging: Cypress has a built-in debugger that makes it easier to debug tests and identify issues, while debugging in Selenium can be more challenging, as it often requires inspecting log files and browser console output.

Cross-browser support: Selenium supports a wider range of browsers than Cypress, including Internet Explorer and Safari, whereas Cypress only supports the latest versions of Chrome, Firefox, and Edge.

Learning curve: Cypress has a smaller learning curve compared to Selenium because it uses a simpler API and has a more user-friendly interface, making it easier to write and maintain tests.

In summary, while both Cypress and Selenium are useful tools for automating web application testing, they differ in their architecture, test runner, execution speed, debugging capabilities, cross-browser support, and learning curve. The choice between the two depends on the specific requirements and goals of the project.

#### Enviroment Setup

- Download & install nodejs
- download & install visual studio code
- create a new folder for project & open in vscode
- open cmd/terminal then excute below command
  - npm -i init
- to install cypress
  - npm install cypress --save -dev
- start cypress
  - npm cypress open

=======================================================

### Locator

    - css selector
    - xpath

#### css selector

-

#### Cypress Assertion

- Implict Assertion
  - should
    -and
- Explct assertion
