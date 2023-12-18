Feature: Menu items

    Background:
        Given I open the home page

    Scenario: Click women button
        When I click women's button
        Then I should see the correct url

    Scenario: Click men's button
        When I click men's button
        Then I should see at the end of url gender=male

    Scenario: Click kids button
        When I click kid's button
        Then I should see a correct url

    Scenario: Click on flag picture
        When I check the flag icon
        Then I should see a flag up on the right

    Scenario: Click search field
        When I click on search field
        Then I should be able to fill the field

    Scenario: Click contact button
        When I click contact button
        Then I have to see correct url

    Scenario: Click retur button
        When I click on retur button
        Then I should see a new url

    Scenario: Click on wish list icon
        When I click wish list button
        Then I should be redirected on wish list page

    Scenario: Click on cart icon
        When I click on cart button
        Then A new page should open with a message

    Scenario: Click on ramburs payment option
        When I click on ramburs payment option
        Then A new page should open with a new url

    Scenario: Click on top one hundred products
        When I click on top one hundred button
        Then I should be redirected on a new page

