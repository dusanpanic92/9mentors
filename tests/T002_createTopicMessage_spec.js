var util = require('util');
var EC = protractor.ExpectedConditions;
var login_page = require('../page/login_page.js');

describe('Login, upload profile pic, occupation', function () {

    it('Login', function () {
        login_page.loginIntoPage();
        browser.wait(EC.urlContains('home'), 5000);
    });

    it('Fake test', function () {
        console.log("The test is done!");
    });

});