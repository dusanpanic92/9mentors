var util = require ('util');
var login_page = require('../page/login_page.js');
var uploadPic_page = require('../page/uploadPic_page.js');
var occupation_page = require('../page/occupation_page.js');

describe ('Login, upload profile pic, occupation', function() {

	it ('Go on the app site', function() {
		browser.get('https://tenant.staging-9mentors.com/#/login');	
	});

	it ('Login', function() {
		login_page.loginIntoPage('dusan.panic@mailinator.com', '123123');
	});	
	
	it ('Upload profile picture', function() {
		uploadPic_page.uploadProfilePic();
	});
	
	it('Fill occupation fields', function() {
		occupation_page.fillOrganisationTxt();
		occupation_page.fillDepartmentTxt();
		occupation_page.fillPositionTxt();
	});
		
	it ('Fake test', function() {
		console.log("The test is done!");
	});

});