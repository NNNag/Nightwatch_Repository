var utils = require('../../pages/utils');

module.exports = {
    '@tags': ['login'],
    before: function(browser){
        utils(browser).openBrowser();
    },
    after: function(browser){
        browser.pause(5000);
        browser.end();
    },
    'Click the login button': function(browser){
        utils(browser).signInButton();
    },
    'Login to the Application': function(browser){
        utils(browser).userLogin();
    },
    'Assert the login into application': function(browser){
        utils(browser).assertTheLogin();
    }
}