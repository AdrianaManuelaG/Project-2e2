Feature: Forgot password

    Scenario: Forgot password
        Given I open the page of the site
        When I click on login label
        Then The login modal opens i switch from register to login
        When I click on email field and fill it
        Then I click forgot password label
        When I fill again the email field
        Then I press submit button
        When I see a fail message down the page