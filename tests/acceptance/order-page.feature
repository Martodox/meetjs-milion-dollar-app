Feature: order page

  Scenario: I can see orders

    Given I visit / page of my application
    Then I see table with 5 headers visible on the screen
    And I see #{Add new} button visible on the screen
