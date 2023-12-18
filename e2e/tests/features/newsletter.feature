Feature: Footer newsletter section

    Scenario: Newsletter
        Given I navigate the homepage
        When I click accept button
        Then I see for women button
        When I see the email field and I fill it
        Then I press the button register
        When I should recive an popup message
        Then I close the popup message
        When I cick on men newsletter button
        Then I click subscribe button with empty email field
        When I should recive an error message



