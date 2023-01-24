Feature: As a customer, I want to search multiple products
  and apply the required filters and add them to the cart.

  @Test1
  Scenario: Add first product to cart
    Given Open the Chrome and go to Target website
    When Select a category and subcategory
    And Apply filters
    And Select product
    Then Take Screenshot
    And  Add product to cart

  @Test2
  Scenario Outline: Add more products to the cart
    Given Go to home page
    When Enter the product to be searched <product>
    And Apply filters to <product> <price1> <price2>
    Then Take Screenshot
    And Select and add to cart
    Examples:
      | product | price1 | price2 |
      | "TV"    | "1000" | "1500" |
      | "iPad"  | "500"  | "1000" |

  @Test3
  Scenario: Navigate to cart
    Given Go to cart
    Then Take Screenshot

  @Test4
  Scenario: Verify cart total
    Given Cart is loaded
    Then Verifies Cart Amount

  @Test5
  Scenario: Verify delivery
    Given Cart is loaded
    Then Verifies Delivery Fee
    And Verifies Checkout Button

  @Test6
  Scenario: Verify Checkout For Non-Auth Customers
    Given Cart is loaded
    Then Goes to checkout
    And Validates Sign In Modal
    Then Close and quit