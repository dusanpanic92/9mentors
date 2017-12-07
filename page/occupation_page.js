var occupation_page = function () {
    // Elements
    var organisationTxt = element(by.model('vm.userProfile.organisation'));
    var departmentTxt = element(by.model('vm.userProfile.department'));
    var positionTxt = element(by.model('vm.userProfile.position'));
    var editPenIcon = element.all(by.css('.icon-edit'));
    var checkIcon = element(by.css('.icon-check'));

    // Functions
    this.fillOrganisationTxt = function () {
        organisationTxt.click();
        browser.actions().mouseMove(organisationTxt).perform();
        editPenIcon.get(0).click();
        organisationTxt.sendKeys('HTEC');
        checkIcon.click();
    };

    this.fillDepartmentTxt = function() {
        browser.actions().mouseMove(departmentTxt).perform();
        editPenIcon.get(1).click();
        departmentTxt.sendKeys('Stena');
        checkIcon.click();
    };

    this.fillPositionTxt = function() {
        browser.actions().mouseMove(positionTxt).perform();
        editPenIcon.get(2).click();
        positionTxt.sendKeys('QA Engineer');
        checkIcon.click();
    };
};
module.exports = new occupation_page();