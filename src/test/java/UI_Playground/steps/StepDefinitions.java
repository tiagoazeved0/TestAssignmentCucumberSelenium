package UI_Playground.steps;

import io.cucumber.java.en.*;

import net.thucydides.core.annotations.Steps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import UI_Playground.pages.testingPlayground;

import static net.thucydides.core.webdriver.ThucydidesWebDriverSupport.getDriver;


public class StepDefinitions {

    private static final Logger logger = LoggerFactory.getLogger(StepDefinitions.class);


    @Steps
    private testingPlayground testingPlayground = new testingPlayground();

    @Given("that I open the browser with the url {string}")
    public void thatIOpenTheBrowserWithTheUrl(String url) throws InterruptedException {
        logger.info("[ --- Entered First Step ---- ]");
        getDriver().get(url);
    }

    @And("we wait {int} seconds")
    public void weWaitSeconds(int numberSeconds) throws InterruptedException {
        Thread.sleep(numberSeconds * 1000L);
    }

    @When("we press the option {string}")
    public void wePressTheOption(String option) {
        testingPlayground.clickEmulationsOptions(option);
    }

    @Then("we click the button with the Dynamic ID with success")
    public void weClickTheButtonWithTheDynamicIDWithSuccess() {
        testingPlayground.clickButtonDynamicID();
    }

    @Then("we click the button that contains the value {string} in the attribute {string}")
    public void weClickTheButtonThatContainsTheValueInTheAttribute(String value, String attribute) {
        testingPlayground.clickButtonSameClass(value, attribute);

    }

    @And("we click the Hidden Layers button")
    public void weClickTheHiddenLayersButton() {
        testingPlayground.pressingHiddenLayersButton();
    }

    @Then("we confirm if the green button wasn't pressed twice")
    public void weConfirmIfTheGreenButtonWasnTPressedTwice() {
        testingPlayground.confirmGreenButtonWasntPressedTwice("true");
    }

    @And("we wait until the end of the load spinner and click the button")
    public void weWaitUntilTheEndOfTheLoadSpinner() {
        testingPlayground.waitUntilEndLoadSpinnerAndClick();
    }

    @And("we press the button triggering the AJAX Request")
    public void wePressTheButtonTriggeringTheAJAXRequest() {
        testingPlayground.pressButtonTriggeringAJAXRequest();
    }

    @Then("we wait until seeing the text {string}")
    public void weWaitUntilSeeingTheText(String text) {
        testingPlayground.waitUntilSeeingText(text);
    }
}
