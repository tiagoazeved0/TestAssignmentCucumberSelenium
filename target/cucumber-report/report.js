$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UI_Playground/AjaxData.feature");
formatter.feature({
  "name": "UI Testing Playground - Feature 5 - AJAX Data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UIFeatures"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature5"
    },
    {
      "name": "@teste"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "we press the option \u003coption\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "we press the button triggering the AJAX Request",
  "keyword": "And "
});
formatter.step({
  "name": "we wait until seeing the text \"Data loaded with AJAX get request\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "option"
      ]
    },
    {
      "cells": [
        "\"http://www.uitestingplayground.com/home\"",
        "\"AJAX Data\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UIFeatures"
    },
    {
      "name": "@Feature5"
    },
    {
      "name": "@teste"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \"http://www.uitestingplayground.com/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.thatIOpenTheBrowserWithTheUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we press the option \"AJAX Data\"",
  "keyword": "When "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.wePressTheOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we press the button triggering the AJAX Request",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.wePressTheButtonTriggeringTheAJAXRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we wait until seeing the text \"Data loaded with AJAX get request\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.weWaitUntilSeeingTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UI_Playground/ClassAttribute.feature");
formatter.feature({
  "name": "UI Testing Playground - Feature 2 - Class Attribute",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@UIFeatures"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Clicking the blue button between 3 buttons that have same class",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "that I open the browser with the url \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "we press the option \u003coption\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "we click the button that contains the value \"btn-primary\" in the attribute \"class\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "option"
      ]
    },
    {
      "cells": [
        "\"http://www.uitestingplayground.com/home\"",
        "\"Class Attribute\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Clicking the blue button between 3 buttons that have same class",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@UIFeatures"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \"http://www.uitestingplayground.com/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.thatIOpenTheBrowserWithTheUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we press the option \"Class Attribute\"",
  "keyword": "When "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.wePressTheOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we click the button that contains the value \"btn-primary\" in the attribute \"class\"",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.weClickTheButtonThatContainsTheValueInTheAttribute(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UI_Playground/DynamicID.feature");
formatter.feature({
  "name": "UI Testing Playground - Feature 1 - Dynamic ID",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Clicking a button without recording its element by the Dynamic ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@UIFeatures"
    },
    {
      "name": "@teste2"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "we press the option \u003coption\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "we click the button with the Dynamic ID with success",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "option"
      ]
    },
    {
      "cells": [
        "\"http://www.uitestingplayground.com/home\"",
        "\"Dynamic ID\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Clicking a button without recording its element by the Dynamic ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@UIFeatures"
    },
    {
      "name": "@teste2"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \"http://www.uitestingplayground.com/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.thatIOpenTheBrowserWithTheUrl(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Primary button pressed}\n  (Session info: chrome\u003d105.0.5195.127): Primary button pressed\nBuild info: version: \u00274.1.1\u0027, revision: \u0027e8fcc2cecf\u0027\nSystem info: host: \u0027L-5CD112RXXB\u0027, ip: \u0027192.168.1.89\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a68ce3493370c16a26f4ac749094f1d1, get {url\u003dhttp://www.uitestingplayground.com/home}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\TIAGO~1.MIN\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:64778}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64778/devtoo..., se:cdpVersion: 105.0.5195.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a68ce3493370c16a26f4ac749094f1d1\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:131)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:312)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:196)\r\n\tat UI_Playground.steps.StepDefinitions.thatIOpenTheBrowserWithTheUrl(StepDefinitions.java:24)\r\n\tat ✽.that I open the browser with the url \"http://www.uitestingplayground.com/home\"(file:///C:/Users/tiago.mina-azevedo/Documents/UIandAPIProject/TestAssignment/src/test/resources/features/UI_Playground/DynamicID.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "we press the option \"Dynamic ID\"",
  "keyword": "When "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.wePressTheOption(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "we click the button with the Dynamic ID with success",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.weClickTheButtonWithTheDynamicIDWithSuccess()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/UI_Playground/HiddenLayers.feature");
formatter.feature({
  "name": "UI Testing Playground - Feature 3 - HiddenLayers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UIFeatures"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Avoiding clicking the Green Button twice",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature3"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "we press the option \u003coption\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "we click the Hidden Layers button",
  "keyword": "And "
});
formatter.step({
  "name": "we click the Hidden Layers button",
  "keyword": "And "
});
formatter.step({
  "name": "we confirm if the green button wasn\u0027t pressed twice",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "option"
      ]
    },
    {
      "cells": [
        "\"http://www.uitestingplayground.com/home\"",
        "\"Hidden Layers\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Avoiding clicking the Green Button twice",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UIFeatures"
    },
    {
      "name": "@Feature3"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \"http://www.uitestingplayground.com/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.thatIOpenTheBrowserWithTheUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we press the option \"Hidden Layers\"",
  "keyword": "When "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.wePressTheOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we click the Hidden Layers button",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.weClickTheHiddenLayersButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we click the Hidden Layers button",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.weClickTheHiddenLayersButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we confirm if the green button wasn\u0027t pressed twice",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.weConfirmIfTheGreenButtonWasnTPressedTwice()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UI_Playground/LoadDelay.feature");
formatter.feature({
  "name": "UI Testing Playground - Feature 4 - LoadDelay",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UIFeatures"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Waiting for the Load Delay to find desired button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature4"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "we press the option \u003coption\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "we wait until the end of the load spinner and click the button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "option"
      ]
    },
    {
      "cells": [
        "\"http://www.uitestingplayground.com/home\"",
        "\"Load Delay\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Waiting for the Load Delay to find desired button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UIFeatures"
    },
    {
      "name": "@Feature4"
    }
  ]
});
formatter.step({
  "name": "that I open the browser with the url \"http://www.uitestingplayground.com/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.thatIOpenTheBrowserWithTheUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we press the option \"Load Delay\"",
  "keyword": "When "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.wePressTheOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we wait until the end of the load spinner and click the button",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Playground.steps.StepDefinitions.weWaitUntilTheEndOfTheLoadSpinner()"
});
formatter.result({
  "status": "passed"
});
});