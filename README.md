**This repo contains demo codes from the Automated UI Internationalization Testing presentation**

Each folders contain brief demo of what each packages do. Please refer to below comments on how to execute them.

Before all, following must be executed: 
1. Clone the repo. 
2. Navigate into each folders (3) and run 'npm install'.
---

## franc

franc is a tool to detect langauge on provided texts. Please refer to package.json for latest 'scripts'. 

1. From the /franc folder, execute 'npm run test'.

to run franc-cli
1. from the /franc folder, execute 'npm run franc' followed by any strings in quotes or --help. 
2. e.g. npm run franc "Is this English?" 
3. e.g. npm run franc --help

---

## jasmine-data-provider

jasmine-data-provider enables user to provide data sets.

1. from the /jasmine-data-provider folder, execute 'npm run init'
2. execute 'npm run test'

---

## webdriver.io

webdriver.io uses webdriver to run e2e tests.

1. install Firefox.
2. Install latest JDK (this is needed for Selenium Standalone service package.)
3. execute 'npm run test'

browser configuration files can be tweaked from wdio.conf.js file.
1. e.g. to remove 'headless' feature, uncomment the line: args: ['-headless']
2. To use Chrome, set browserName: chrome, and moz:firefoxOptions to goog:chromeOptions
