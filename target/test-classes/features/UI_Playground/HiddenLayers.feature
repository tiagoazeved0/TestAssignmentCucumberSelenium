@UIFeatures
Feature: UI Testing Playground - Feature 3 - HiddenLayers

  @Feature3
  Scenario Outline: Avoiding clicking the Green Button twice
    Given that I open the browser with the url <url>
    When we press the option <option>
    And we click the Hidden Layers button
    And we click the Hidden Layers button
    Then we confirm if the green button wasn't pressed twice

    Examples:
      | url                                       | option       |
      | "http://www.uitestingplayground.com/home" | "Hidden Layers" |
