Feature: single order

  Scenario: displays single order

    Given I visit /order/5433 page of my application
    Then I see id 5433 displayed in the top section
    And I see table with 4 headers visible on the screen
