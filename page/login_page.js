var login_page = function () {
    var EC = protractor.ExpectedConditions;
    // Elements
    var emailTxt = element(by.model('vm.user.email'));
    var passTxt = element(by.model('vm.user.password'));
    var loginBtn = element(by.name('login'));
    var menuArrowBtn = element(by.css('.icon-chevron-down'));
    var logoutBtn = element(by.uiSref('logout'));

    // Functions
    this.loginIntoPage = function (mail, pass) {
        // Enter mail and password, click login button
        emailTxt.sendKeys(mail);
        passTxt.sendKeys(pass);
        browser.wait(EC.elementToBeClickable(loginBtn), 5000);
        loginBtn.click();
        // Check if link is proper after login
        browser.wait(EC.urlContains('home'), 5000);
    };

    this.logOut = function() {
        // Log out from app
        menuArrowBtn.click();
        browser.wait(EC.elementToBeClickable(logoutBtn), 5000);
        logoutBtn.click();
        // Check if link is proper after logout
        browser.wait(EC.urlContains('login'), 5000);
    };
};
module.exports = new login_page();