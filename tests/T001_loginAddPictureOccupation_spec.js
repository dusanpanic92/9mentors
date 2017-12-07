var util = require ('util');
var EC = protractor.ExpectedConditions;
var login_page = require('../page/login_page.js');
var uploadPic_page = require('../page/uploadPic_page.js');

describe ('Login, upload profile pic, occupation', function() {

	it ('Go on the app site', function() {
		browser.get('https://tenant.staging-9mentors.com/#/login');	
	});

	it ('Login', function() {
		login_page.loginIntoPage();
		browser.wait(EC.urlContains('home'), 5000);
	});	
	
	it ('Upload profile picture', function() {
		uploadPic_page.uploadProfilePic();
	});

	it ('Fake test', function() {
		console.log("The test is done!")
	});

});