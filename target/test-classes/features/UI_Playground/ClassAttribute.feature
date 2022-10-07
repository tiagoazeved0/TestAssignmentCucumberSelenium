@Feature2 @UIFeatures
Feature: UI Testing Playground - Feature 2 - Class Attribute

  Scenario Outline: Clicking the blue button between 3 buttons that have same class
    Given that I open the browser with the url <url>
    When we press the option <option>
    And we click the button that contains the value "btn-primary" in the attribute "class"
    # Create a method that asserts that the pop up window shows

    Examples:
      | url                                       | option       |
      | "http://www.uitestingplayground.com/home" | "Class Attribute" |
