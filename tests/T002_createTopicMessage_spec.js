var util = require('util');
var EC = protractor.ExpectedConditions;
var login_page = require('../page/login_page.js');
var subtopicSendMsg_page = require('../page/subtopicSendMsg_page.js');

describe('Login, upload profile pic, occupation', function () {

    it ('Go on the app site', function() {
		browser.get('https://tenant.staging-9mentors.com/#/login');	
    });
    
    it('Login', function () {
        login_page.loginIntoPage('dusan.panic@mailinator.com', '123123');
        browser.wait(EC.urlContains('home'), 5000);
    });

    it('Open group and send message', function () {
        subtopicSendMsg_page.sendGroupMsg();
    });

    it('Create new topic and send message', function () {
        subtopicSendMsg_page.createNewTopicSendMsg();
    });

    it('Logout as user 1', function () {
        login_page.logOut();
    });

    it('Login with user 2', function () {
        login_page.loginIntoPage('dusan.panic2@mailinator.com', '123123');
        browser.wait(EC.urlContains('home'), 5000);
    });
    
    it('Check group message', function() {
        subtopicSendMsg_page.checkMsgGroup();
    });
    
    it('Check topic message', function() {
        subtopicSendMsg_page.checkMsgTopic();
    });
        
    it('Fake test', function () {
        console.log("The test is done!");
    });

});