Feature: Search Functionality

  Scenario: Search for a product and verify results
    Given I navigate to the home page
    When I search for "IPhone"
    Then I should see search results for "IPhone"
