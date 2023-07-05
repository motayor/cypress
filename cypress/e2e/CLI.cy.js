/*

1. CLI commands 

    - npx cypress run

    - npx cypress run --help  ...to find comds and methods

2. Run a cypress file from any folder auomatically 
    - npx cypress run -s ./cypress/e2e/assertion_Demo.cy.js -b chrome


3. RUN SCRIPTS{} from 'package.json' File
   - npm run <scriptname>  ...whatever the script name in the json file that you want to run.   Notice scripts uses npm not npx
   - use 'preTest' or 'postTest' top set order of precedence

4. Set "Config" file from command line
    - cypress run --config <config instruction> 
    - npx cypress run -s ./cypress/e2e/pomdemo.cy.js --config 
    - npx cypress run --config
    - npx cypress run -s ./cypress/e2e/pomdemo.cy.js, --config, watchForFileChanges=false, pageLoadTimeou=10000
    - npx cypress version
    - ... cypress verify
    - ... cypress open
    - ... cypress info  ...print information about cypress and current env


    */
