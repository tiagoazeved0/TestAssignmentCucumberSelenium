package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import pageobjects.po_testingPlayground;

import static utils.CommonUtils.*;
import static net.thucydides.core.webdriver.ThucydidesWebDriverSupport.getDriver;


public class testingPlayground {

    private static final Logger logger = LoggerFactory.getLogger(testingPlayground.class);
    FluentWait wait = createFluentWait(16000L);

    public void clickEmulationsOptions(String option) {

        // We build the correct Xpath to find the element we want, based on the string option we send in the step.
        String xpath = createXpath("//a[contains(text(),'", option, "')]");

        // We find the correct element and use the click action.
        clickButton(xpath);
    }

    public void clickButtonDynamicID() {

        // Since this button has a dynamic ID, we have to find it through its common factor through all refresh events.
        // This case we can use its text - since it will be the same each time we go to this page.
        clickButtonCheckClicked(po_testingPlayground.buttonDynamicID);
    }

    public void clickButtonSameClass(String value, String attribute) {

        // Since all Button elements in this page have the same class, we can use the contains() function
        // to find the one who has btn-primary in its class attribute value.
        String xpath = createXpath("//button[contains(@", attribute, ",'", value, "')]");

        // We find the correct element and use the click action.
        clickButtonCheckClicked(xpath);
    }

    public void pressingHiddenLayersButton() {
        clickHiddenLayersButton(po_testingPlayground.button);
    }

    public void confirmGreenButtonWasntPressedTwice(String value) {
        verifyGreenButtonAttribute(po_testingPlayground.buttonGreenButton, value);
    }

    public void waitUntilEndLoadSpinnerAndClick() {
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath(po_testingPlayground.buttonAppearingAfterDelay)));
        clickButtonCheckClicked(po_testingPlayground.buttonAppearingAfterDelay);
    }

    public void pressButtonTriggeringAJAXRequest() {
        clickButtonCheckClicked(po_testingPlayground.buttonTriggeringAJAXRequest);
    }

    public void waitUntilSeeingText(String text) {
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath(po_testingPlayground.textboxDataLoadedAJAX)));
    }

//    public void confirmWeSeeTheButtonAfterDelay() {
//
//
//    }
}
