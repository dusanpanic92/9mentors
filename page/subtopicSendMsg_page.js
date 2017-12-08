var subtopicSendMsg_page = function() {
    var EC = protractor.ExpectedConditions;
    // Elements
    var groupViewBtn = element(by.uiSref('app.group'));
    var groupBoxBtn = element(by.repeater('group in vm.groups'));
    var newTopicBtn = element(by.css('[ng-click="vm.openNewSubtopic($event)"]'));
    var topicNameTxt = element(by.model('vm.sharedData.topicName'));
    var addUserBtn = element(by.css('.create-topic-button'));
    var createTopicBtn = element(by.css('[ng-click="vm.postAction()"]'));
    var messageTxt = element(by.model('vm.messageText'));
    var sendMsgBtn = element(by.css('[ng-click="vm.sendMessage()"]'));
    var newMsgBtn = element(by.css('[ng-click="vm.goToUnseenTopic(group)"]'));
    var topicMenu = element(by.css('[ng-click="vm.onItemClick(topic)"]'));
    var msgText = element(by.css('.message-text'));
    var openSubtopic = element(by.css('[ng-click="vm.goToTopic()"]'));

    // Functions
    this.sendGroupMsg = function() {
        // Open group, send message in group - user1
        groupViewBtn.click();
        groupBoxBtn.click();
        messageTxt.click().sendKeys('First message 1');
        sendMsgBtn.click();        
    };

    this.createNewTopicSendMsg = function() {
        // Create topic, send message in topic - user1
        newTopicBtn.click();
        topicNameTxt.click().sendKeys('New topic 1');
        addUserBtn.click();
        createTopicBtn.click();
        messageTxt.click().sendKeys('Topic message 1');
        sendMsgBtn.click();
    };

    this.checkMsgGroup = function() {
        // Open group, check message - user2
        groupViewBtn.click();
        newMsgBtn.click();
        topicMenu.click();
        expect(msgText.getText()).toEqual('First message 1');
    };

    this.checkMsgTopic = function() {
        // Open topic, check message - user2
        openSubtopic.click();
        expect(msgText.getText()).toEqual('Topic message 1');
    };
};
module.exports = new subtopicSendMsg_page();