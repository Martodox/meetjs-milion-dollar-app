Feature: single order

  Scenario: displays single order

    Given I visit /order/5433 page
    Then I see id 5433 displayed
    And I see table with 4 headers
