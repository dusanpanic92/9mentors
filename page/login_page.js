var login_page = function () {
    var EC = protractor.ExpectedConditions;
    // Elements
    var emailTxt = element(by.model('vm.user.email'));
    var passTxt = element(by.model('vm.user.password'));
    var loginBtn = element(by.name('login'));

    // Functions
    this.loginIntoPage = function (mail, pass) {
        emailTxt.sendKeys(mail);
        passTxt.sendKeys(pass);
        browser.wait(EC.elementToBeClickable(loginBtn), 5000);
        loginBtn.click();
        browser.wait(EC.urlContains('home'), 5000);
    };
};
module.exports = new login_page();