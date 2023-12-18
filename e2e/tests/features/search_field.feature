Feature: Search field test

    Scenario: Search field
        Given I open the page of site
        When I fill search field
        Then I click on first item and select size
        When I add product in cart
        Then I go to cart page and close it
