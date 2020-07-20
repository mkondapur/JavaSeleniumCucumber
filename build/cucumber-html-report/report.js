$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SampleTest.feature");
formatter.feature({
  "line": 2,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Perfrom google search by keyword",
  "description": "",
  "id": "google-search;perfrom-google-search-by-keyword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u003cURL\u003e website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I perform search using \u003cKeyword\u003e keyword",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I get search result \u003cKeyword\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "google-search;perfrom-google-search-by-keyword;",
  "rows": [
    {
      "cells": [
        "URL",
        "Keyword"
      ],
      "line": 11,
      "id": "google-search;perfrom-google-search-by-keyword;;1"
    },
    {
      "cells": [
        "https://www.google.com/",
        "Test Automation"
      ],
      "line": 12,
      "id": "google-search;perfrom-google-search-by-keyword;;2"
    },
    {
      "cells": [
        "https://www.google.com/",
        "Corona news"
      ],
      "line": 13,
      "id": "google-search;perfrom-google-search-by-keyword;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7271093556,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Perfrom google search by keyword",
  "description": "",
  "id": "google-search;perfrom-google-search-by-keyword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to https://www.google.com/ website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I perform search using Test Automation keyword",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I get search result Test Automation",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 14
    }
  ],
  "location": "SampleSteps.i_navigate_to_https_www_google_com_website(String)"
});
formatter.result({
  "duration": 6258103186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Automation",
      "offset": 23
    }
  ],
  "location": "SampleSteps.i_perform_search_using_Test_Automation_keyword(String)"
});
formatter.result({
  "duration": 653122587,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d80.0.3987.122)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 47 milliseconds\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027SKPSP94080001P\u0027, ip: \u0027180.89.28.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\C0255092\\AppData\\Local\\Temp\\scoped_dir23372_11061}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d80.0.3987.122, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ca697f4549a3f12b0218fcfcb28c1f30\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:41)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat com.test.Page.SamplePage.performGoogleSearch(SamplePage.java:27)\r\n\tat com.test.Steps.SampleSteps.i_perform_search_using_Test_Automation_keyword(SampleSteps.java:26)\r\n\tat ✽.When I perform search using Test Automation keyword(features/SampleTest.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Automation",
      "offset": 20
    }
  ],
  "location": "SampleSteps.i_get_search_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 5785283926,
  "status": "passed"
});
formatter.before({
  "duration": 4184266818,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Perfrom google search by keyword",
  "description": "",
  "id": "google-search;perfrom-google-search-by-keyword;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to https://www.google.com/ website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I perform search using Corona news keyword",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I get search result Corona news",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 14
    }
  ],
  "location": "SampleSteps.i_navigate_to_https_www_google_com_website(String)"
});
formatter.result({
  "duration": 5679069276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Corona news",
      "offset": 23
    }
  ],
  "location": "SampleSteps.i_perform_search_using_Test_Automation_keyword(String)"
});
formatter.result({
  "duration": 3549733374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Corona news",
      "offset": 20
    }
  ],
  "location": "SampleSteps.i_get_search_result(String)"
});
formatter.result({
  "duration": 127174258,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 4955779246,
  "status": "passed"
});
});