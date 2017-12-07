var uploadPic_page = function () {
    var EC = protractor.ExpectedConditions;
    // Elements
    var smallCircleIcon = element(by.css('.topbar-profile-image'));
    var openMenu = element(by.css('[ng-click="$mdOpenMenu($event)"]'));
    var userProf = element(by.buttonText('User profile'));
    var profilePic = element(by.css('.profile-image'));
    var profileDlg = element(by.css('#profile-image-modal'));
    var openUploadPic = element.all(by.model('vm.file')).get(0);
    var uploadBtn = element(by.css('[ng-click="vm.uploadImage()"]'));
    // File upload elements
    var path = require('path');
    var absolutePath = path.resolve(__dirname, "../conf/temp/pic.png");
    var feFilePath = element(by.css('input[type="file"]'));
    var feUploadBtn = element(by.css('#uploadButton'));

    // Functions
    this.uploadProfilePic = function () {
        smallCircleIcon.click();
        browser.sleep(100);
        profilePic.click();
        profileDlg.click();
        feFilePath.sendKeys(absolutePath);
        uploadBtn.click();
    };

};
module.exports = new uploadPic_page();