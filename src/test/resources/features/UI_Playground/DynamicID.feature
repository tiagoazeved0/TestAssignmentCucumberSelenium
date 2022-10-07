@teste
Feature: UI Testing Playground - Feature 1 - Dynamic ID

  @teste
  Scenario: Accessing an element without recording its dynamic ID
#    Given that I open the browser with the url "UIHomepage"
    Given that I open the browser with the url "http://www.uitestingplayground.com/home"
    When we press the option "Dynamic ID"
    Then we wait 10 seconds
#    Then we click the button
