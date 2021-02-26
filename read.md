put src_folders: ["tests"] in nightwatch.conf.js
use the command to run test - node nightwatch -e chrome
remove "npm test" from package.json and keep like this "test": ""
node nightwatch -e chrome -a demo -use the command to run test case based on tags

Reporting:
npm install handlebars
create 2 files html-reporter.js and html-reporter.hbs and copy the contens in the 2 files
npm install fs
npm install path
node nightwatch -e chrome -a login --reporter html-reporter.js