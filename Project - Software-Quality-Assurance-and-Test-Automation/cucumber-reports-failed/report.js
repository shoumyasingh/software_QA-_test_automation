$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/target.feature");
formatter.feature({
  "name": "As a customer, I want to search multiple products",
  "description": "  and apply the required filters and add them to the cart.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add first product to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "Open the Chrome and go to Target website",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.open_the_chrome_and_go_to_target_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select a category and subcategory",
  "keyword": "When "
});
formatter.match({
  "location": "Target_E2E_Automation.select_a_category_and_subcategory()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Christmas Lights111\"}\n  (Session info: chrome\u003d108.0.5359.124)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.5.0\u0027, revision: \u0027fe167b119a\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.4\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [72eb193fae04eca826830fa91a8cd049, findElement {using\u003dlink text, value\u003dChristmas Lights111}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qb/lrmhzs7x2mx...}, goog:chromeOptions: {debuggerAddress: localhost:49581}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:49581/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 72eb193fae04eca826830fa91a8cd049\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\n\tat StepDefinition.Target_E2E_Automation.select_a_category_and_subcategory(Target_E2E_Automation.java:69)\n\tat ✽.Select a category and subcategory(file:Feature/target.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "Apply filters",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.apply_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select product",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.take_screenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Add product to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.add_product_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Add more products to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "Go to home page",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the product to be searched \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Apply filters to \u003cproduct\u003e \u003cprice1\u003e \u003cprice2\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.step({
  "name": "Select and add to cart",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "price1",
        "price2"
      ]
    },
    {
      "cells": [
        "\"TV\"",
        "\"1000\"",
        "\"1500\""
      ]
    },
    {
      "cells": [
        "\"iPad\"",
        "\"500\"",
        "\"1000\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add more products to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "Go to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.go_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the product to be searched \"TV\"",
  "keyword": "When "
});
formatter.match({
  "location": "Target_E2E_Automation.enter_the_product_to_be_searched(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Apply filters to \"TV\" \"1000\" \"1500\"",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.apply_filters_to(String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" aria-label\u003d\"...\" data-test\u003d\"pillButton\" class\u003d\"BaseButton-sc-j0jbcc-0 styles__PillStyledButton-sc-1mpm9rk-2 dIJYmd hZpkQU\"\u003ePopular TV Screen Sizes\u003c/button\u003e is not clickable at point (1234, 22). Other element would receive the click: \u003cdiv class\u003d\"styles__LinkContainer-sc-u2k6h-2 dnhWpM\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d108.0.5359.124)\nBuild info: version: \u00274.5.0\u0027, revision: \u0027fe167b119a\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.4\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [72eb193fae04eca826830fa91a8cd049, clickElement {id\u003ddada6e18-ea54-4aa8-bdd3-cf87c075327d}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qb/lrmhzs7x2mx...}, goog:chromeOptions: {debuggerAddress: localhost:49581}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:49581/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on MAC (72eb193fae04eca826830fa91a8cd049)] -\u003e xpath: //button[text()\u003d\u0027Popular TV Screen Sizes\u0027]]\nSession ID: 72eb193fae04eca826830fa91a8cd049\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\n\tat StepDefinition.Target_E2E_Automation.apply_filters_to(Target_E2E_Automation.java:144)\n\tat ✽.Apply filters to \"TV\" \"1000\" \"1500\"(file:Feature/target.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.take_screenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select and add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.select_and_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add more products to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "Go to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.go_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the product to be searched \"iPad\"",
  "keyword": "When "
});
formatter.match({
  "location": "Target_E2E_Automation.enter_the_product_to_be_searched(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Apply filters to \"iPad\" \"500\" \"1000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.apply_filters_to(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select and add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.select_and_add_to_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" aria-label\u003d\"... for Apple iPad Air 10.9-inch Wi-Fi Only 256GB (2022, 5th Generation) - Space Gray\" data-test\u003d\"orderPickupButton\" id\u003d\"addToCartButtonOrTextIdFor77616342\" class\u003d\"BaseButton-sc-j0jbcc-0 ButtonPrimary-sc-1qgspc1-0 fdaZTm eitQue\"\u003eAdd to cart\u003c/button\u003e is not clickable at point (1237, 22). Other element would receive the click: \u003cdiv class\u003d\"styles__StyledCol-sc-fw90uk-0 cqPkcs styles__StyledPriceAndAddToCartCol-sc-1thkghn-1 imcmqh h-padding-l-tight\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d108.0.5359.124)\nBuild info: version: \u00274.5.0\u0027, revision: \u0027fe167b119a\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.4\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [72eb193fae04eca826830fa91a8cd049, clickElement {id\u003df94160fc-bc47-446b-83de-4c9de9582632}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qb/lrmhzs7x2mx...}, goog:chromeOptions: {debuggerAddress: localhost:49581}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:49581/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on MAC (72eb193fae04eca826830fa91a8cd049)] -\u003e xpath: //button[text()\u003d\u0027Add to cart\u0027]]\nSession ID: 72eb193fae04eca826830fa91a8cd049\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\n\tat StepDefinition.Target_E2E_Automation.select_and_add_to_cart(Target_E2E_Automation.java:179)\n\tat ✽.Select and add to cart(file:Feature/target.feature:19)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigate to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "Go to cart",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.go_to_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View cart \u0026 check out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.124)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.5.0\u0027, revision: \u0027fe167b119a\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.4\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [72eb193fae04eca826830fa91a8cd049, findElement {using\u003dxpath, value\u003d//a[text()\u003d\u0027View cart \u0026 check out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qb/lrmhzs7x2mx...}, goog:chromeOptions: {debuggerAddress: localhost:49581}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:49581/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 72eb193fae04eca826830fa91a8cd049\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\n\tat StepDefinition.Target_E2E_Automation.go_to_cart(Target_E2E_Automation.java:188)\n\tat ✽.Go to cart(file:Feature/target.feature:27)\n",
  "status": "failed"
});
formatter.step({
  "name": "Take Screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.take_screenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify cart total",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "name": "Cart is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.checkIfCartLoaded()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for number of elements found by By.cssSelector: div[data-test\u003d\"cartItem\"] to be more than \"0\". Current number: \"0\" (tried for 8 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.5.0\u0027, revision: \u0027fe167b119a\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.4\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qb/lrmhzs7x2mx...}, goog:chromeOptions: {debuggerAddress: localhost:49581}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:49581/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 72eb193fae04eca826830fa91a8cd049\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:87)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat StepDefinition.Target_E2E_Automation.waitsForElement(Target_E2E_Automation.java:209)\n\tat StepDefinition.Target_E2E_Automation.checkIfCartLoaded(Target_E2E_Automation.java:225)\n\tat ✽.Cart is loaded(file:Feature/target.feature:32)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verifies Cart Amount",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesCartTotalAmount()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify delivery",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "Cart is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.checkIfCartLoaded()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for number of elements found by By.cssSelector: div[data-test\u003d\"cartItem\"] to be more than \"0\". Current number: \"0\" (tried for 8 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.5.0\u0027, revision: \u0027fe167b119a\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.4\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qb/lrmhzs7x2mx...}, goog:chromeOptions: {debuggerAddress: localhost:49581}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:49581/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 72eb193fae04eca826830fa91a8cd049\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:87)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat StepDefinition.Target_E2E_Automation.waitsForElement(Target_E2E_Automation.java:209)\n\tat StepDefinition.Target_E2E_Automation.checkIfCartLoaded(Target_E2E_Automation.java:225)\n\tat ✽.Cart is loaded(file:Feature/target.feature:37)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verifies Delivery Fee",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesDeliveryInfo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verifies Checkout Button",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesCheckoutBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify Checkout For Non-Auth Customers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "name": "Cart is loaded",
  "keyword": "Given "
});
formatter.match({
  "location": "Target_E2E_Automation.checkIfCartLoaded()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for number of elements found by By.cssSelector: div[data-test\u003d\"cartItem\"] to be more than \"0\". Current number: \"0\" (tried for 8 second(s) with 500 milliseconds interval)\nBuild info: version: \u00274.5.0\u0027, revision: \u0027fe167b119a\u0027\nSystem info: os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.4\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.124, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/qb/lrmhzs7x2mx...}, goog:chromeOptions: {debuggerAddress: localhost:49581}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:49581/devtoo..., se:cdpVersion: 108.0.5359.124, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 72eb193fae04eca826830fa91a8cd049\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:87)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat StepDefinition.Target_E2E_Automation.waitsForElement(Target_E2E_Automation.java:209)\n\tat StepDefinition.Target_E2E_Automation.checkIfCartLoaded(Target_E2E_Automation.java:225)\n\tat ✽.Cart is loaded(file:Feature/target.feature:43)\n",
  "status": "failed"
});
formatter.step({
  "name": "Goes to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesSignInModalForNonAuth()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validates Sign In Modal",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.validatesSignInForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close and quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.close_and_quit()"
});
formatter.result({
  "status": "skipped"
});
});