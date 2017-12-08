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
        // Hover on the organization text field, click on pen icon to edit
        // Enter text, click on check icon to submit
        browser.actions()
            .mouseMove(organisationTxt)
            .mouseDown(editPenIconOrg)
            .mouseUp(editPenIconOrg)
            .perform();
        organisationTxt.click().clear().sendKeys('HTEC');
        checkIcon.click();
        // Check if proper text is typed
        expect(organisationTxt.getAttribute('value')).toEqual('HTEC');
    };

    this.fillDepartmentTxt = function () {
        // Hover on the department text field, click on pen icon to edit
        // Enter text, click on check icon to submit
        browser.actions()
            .mouseMove(departmentTxt)
            .mouseDown(editPenIconDep)
            .mouseUp(editPenIconDep)
            .perform();
        departmentTxt.click().clear().sendKeys('Stena');
        checkIcon.click();
        // Check if proper text is typed
        expect(departmentTxt.getAttribute('value')).toEqual('Stena');
    };

    this.fillPositionTxt = function () {
        // Hover on the position text field, click on pen icon to edit
        // Enter text, click on check icon to submit
        browser.actions()
            .mouseMove(positionTxt)
            .mouseDown(editPenIconPos)
            .mouseUp(editPenIconPos)
            .perform();
        positionTxt.click().clear().sendKeys('QA Engineer');
        checkIcon.click();
        // Check if proper text is typed
        expect(positionTxt.getAttribute('value')).toEqual('QA Engineer');
    };
};
module.exports = new occupation_page();