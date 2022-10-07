@UIFeatures
Feature: UI Testing Playground - Feature 4 - LoadDelay

  @Feature4 @Test
  Scenario Outline: Avoiding clicking the Green Button twice
    Given that I open the browser with the url <url>
    When we press the option <option>
    Then we wait until the end of the load spinner and click the button
#    Then we confirm we see the button appearing after delay

    Examples:
      | url                                       | option       |
      | "http://www.uitestingplayground.com/home" | "Load Delay" |
