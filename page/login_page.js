var login_page = function() {
    // Elements
    var emailTxt = element(by.model('vm.user.email'));
    var passTxt = element(by.model('vm.user.password'));
    var loginBtn = element(by.name('login'));
    
    // Functions
    this.loginIntoPage = function() {
        emailTxt.sendKeys('dusan.panic@mailinator.com');
        passTxt.sendKeys('123123');
        loginBtn.click();
    };
};
module.exports = new login_page();