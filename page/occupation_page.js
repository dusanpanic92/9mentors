var occupation_page = function () {
    // Elements
    var organisationTxt = element(by.model('vm.userProfile.organisation'));
    var departmentTxt = element(by.model('vm.userProfile.department'));
    var positionTxt = element(by.model('vm.userProfile.position'));
    var editPenIconOrg = element(by.css('[ng-click="vm.toggleEdit(0)"]'));
    var editPenIconDep = element(by.css('[ng-click="vm.toggleEdit(1)"]'));
    var editPenIconPos = element(by.css('[ng-click="vm.toggleEdit(2)"]'));
    var checkIcon = element(by.css('.icon-check[role="button"]'));

    // Functions
    this.fillOrganisationTxt = function () {
        browser.actions()
            .mouseMove(organisationTxt)
            .mouseDown(editPenIconOrg)
            .mouseUp(editPenIconOrg)
            .perform();
        organisationTxt.click().sendKeys('HTEC');
        checkIcon.click();
        expect(organisationTxt.getAttribute('value')).toEqual('HTEC');
    };

    this.fillDepartmentTxt = function () {
        browser.actions()
            .mouseMove(departmentTxt)
            .mouseDown(editPenIconDep)
            .mouseUp(editPenIconDep)
            .perform();
        departmentTxt.click().sendKeys('Stena');
        checkIcon.click();
        expect(departmentTxt.getAttribute('value')).toEqual('Stena');
    };

    this.fillPositionTxt = function () {
        browser.actions()
            .mouseMove(positionTxt)
            .mouseDown(editPenIconPos)
            .mouseUp(editPenIconPos)
            .perform();
        positionTxt.click().sendKeys('QA Engineer');
        checkIcon.click();
        expect(positionTxt.getAttribute('value')).toEqual('QA Engineer');
    };
};
module.exports = new occupation_page();