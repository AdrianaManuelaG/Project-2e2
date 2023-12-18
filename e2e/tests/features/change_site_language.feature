Feature: Change language of site

    Scenario: Change site language
        Given I navigate on website page
        When I click on the flag icon
        Then I choose the language i want
        When I return to the original site