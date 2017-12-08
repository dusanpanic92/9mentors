var util = require('util');
var EC = protractor.ExpectedConditions;
var login_page = require('../page/login_page.js');
var subtopicSendMsg_page = require('../page/subtopicSendMsg_page.js');

describe('Login, upload profile pic, occupation', function () {
    
    it('Login', function () {
        login_page.loginIntoPage('dusan.panic@mailinator.com', '123123');
        browser.wait(EC.urlContains('home'), 5000);
    });


    it('Login with user 2', function () {
        login_page.loginIntoPage('dusan.panic2@mailinator.com', '123123');
        browser.wait(EC.urlContains('home'), 5000);
    });

    it('Fake test', function () {
        console.log("The test is done!");
    });

});