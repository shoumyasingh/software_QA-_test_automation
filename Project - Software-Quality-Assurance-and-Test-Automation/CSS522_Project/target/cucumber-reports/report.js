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
  "status": "passed"
});
formatter.step({
  "name": "Apply filters",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.apply_filters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select product",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.select_product()"
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
  "name": "Add product to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.add_product_to_cart()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "Verifies Cart Amount",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesCartTotalAmount()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "Verifies Delivery Fee",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesDeliveryInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies Checkout Button",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesCheckoutBtn()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "Goes to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.verifiesSignInModalForNonAuth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validates Sign In Modal",
  "keyword": "And "
});
formatter.match({
  "location": "Target_E2E_Automation.validatesSignInForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close and quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Target_E2E_Automation.close_and_quit()"
});
formatter.result({
  "status": "passed"
});
});