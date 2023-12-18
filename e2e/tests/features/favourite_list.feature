Feature: Favourite list check

    Scenario: Add products in favourite list
        Given I open the site page
        When I click on acceptAll button
        Then I go to kids label
        When I add first three products in favourite list
        Then I should see near the favourite icon the number of products added i click on it
