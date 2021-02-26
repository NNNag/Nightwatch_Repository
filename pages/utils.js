module.exports = function(browser){
    this.openBrowser = function () {
        browser
            .windowMaximize()
            .url('http://automationpractice.com/index.php')
            .waitForElementVisible('body', 1000);
        return browser;
    };
    this.signInButton = function () {
        browser
            .click('.login')
            .waitForElementVisible('body', 1000);
    };
    this.userLogin = function () {
        browser
            .setValue('#email', 'rajanaveen1@gmail.com')
            .setValue('#passwd', 'Welcome@123')
            .click('#SubmitLogin')
    };
    this.assertTheLogin = function () {
        browser
            .waitForElementVisible('body', 1000);
            browser.assert.containsText("#center_column", "MY ACCOUNT");
            browser.saveScreenshot('./tests_output/Screenshots/loginScreenshot.png');
    };
    
    return this;
}