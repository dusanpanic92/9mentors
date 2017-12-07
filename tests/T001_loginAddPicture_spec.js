var util = require ('util');
var examplePage_page = require('../page/examplePage_page.js');

describe ("This is example test", function() {

	it ("Go on the app site", function() {
		browser.get('https://tenant.staging-9mentors.com/#/login');	
	});

	it ("Put text in the text field and check on", function() {
		examplePage_page.typeTextInTextField();
		examplePage_page.checkTypedText();
		//Invoking functions from page object.
	});



	it ("Fake test", function() {
		console.log("The test is done!")
	});

});