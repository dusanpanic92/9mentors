# 9mentors
Protractor tests for login, upload picture, and sending message. 

# Introduction
Testing of application is done using Node.js and AngularJS testing framework Protractor. Used syntax is JavaScript and Jasmine.

# Prerequisite
For T001, when uploading profile picture. For better test experience, new profile picture should be uploaded manually after test is ran.
For T002, because main (parent) topics can't be removed. New topic need to be created manually after test is ran.

# Installation
Required tools for test running:
* JAVA JDK 8 - install it in usual way
* Node.js 8.9.2 - install it in usual way
* Protractor 5.2.1 - `npm install -g protractor@5.2.1`
* package.json tools - `./conf/npm install`

# Test running
To run test. Open CMD in root project, then *conf* folder and execute command:

`protractor conf.js`

By the current settings in *conf.js* both test will be ran.
In the *conf.js* 9th line of code, under the *specs* command it can be changed.
When test ran is finished *./conf/reports/screenshots/testReport.html* , you can see test report.
