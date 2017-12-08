var subtopicSendMsg_page = function() {
    var EC = protractor.ExpectedConditions;
    // Elements
    var groupViewBtn = element(by.css('.icon-group'));
    var groupBoxBtn = element(by.repeater('group in vm.groups'));
    var newTopicBtn = element(by.css('[ng-click="vm.openNewSubtopic($event)"]'));
    var topicNameTxt = element(by.model('vm.sharedData.topicName'));
    var addUserBtn = element(by.css('.create-topic-button'));
    var createTopicBtn = element(by.css('[ng-click="vm.postAction()"]'));
    var messageTxt = element(by.model('vm.messageText'));
    var sendMsgBtn = element(by.css('[ng-click="vm.sendMessage()"]'));
    var newMsgBtn = element(by.css('[ng-click="vm.goToUnseenTopic(group)"]'));
    var msgText = element(by.css('.message-text'));
    var openSubtopic = element(by.css('[ng-click="vm.goToTopic()"]'));

    // Functions
    this.subtopicMessage = function() {
        // Open group, send message in group. Create topic and send message in topic
        groupViewBtn.click();
        groupBoxBtn.click();
        messageTxt.click();
        messageTxt.sendKeys('First message 1');
        sendMsgBtn.click();
        
    };
};
module.exports = new subtopicSendMsg_page();