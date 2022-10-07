package UI_Playground.utils;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.FluentWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.util.List;

import static net.thucydides.core.webdriver.ThucydidesWebDriverSupport.getDriver;
import static org.testng.AssertJUnit.assertEquals;

public class CommonUtils {

    private static final Logger logger = LoggerFactory.getLogger(CommonUtils.class);
    static JavascriptExecutor js = (JavascriptExecutor) getDriver();

    public static String createXpath(String prefix, String attribute, String separator, String value, String suffix) {

        // Concatenates and returns a string that will be used as Xpath
        // 5 Arguments - prefix, attribute, separator, value, and suffix

        String xpath = prefix + attribute + separator + value + suffix;
        logger.info("[ --- The Xpath is: " + xpath + " ---- ]");
        return xpath;
    }

    public static String createXpath(String prefix, String option, String suffix) {

        // Concatenates and returns a string that will be used as Xpath
        // 3 Arguments - prefix, option, and suffix

        String xpath = prefix + option + suffix;
        logger.info("[ --- The Xpath is: " + xpath + " ---- ]");
        return xpath;
    }

    public static void clickButtonCheckClicked(String xpath) {

        // Finding the element through XPath

        WebElement element = getDriver().findElement(By.xpath(xpath));

        logger.info("[ --- The Xpath is : " + xpath + " ---- ]");
        addAttribute(element, "wasClicked", "false");
        logger.info("[ --- Value of Attribute wasClicked before clicking: " + element.getAttribute("wasClicked") + " ---- ]");

        // Adds a Event Listener to a Click Behaviour

        if (element.getAttribute("wasClicked").equals("false")) {
            js.executeScript("var ele = arguments[0];ele.addEventListener('click', function() {ele.setAttribute('wasClicked','true');});", element);
        } else {
            js.executeScript("var ele = arguments[0];ele.addEventListener('click', function() {ele.setAttribute('wasClicked','false');});", element);
        }

        element.click();

        // Refreshing the WebElement with the same XPath

        WebElement refreshedElement = getDriver().findElement(By.xpath(xpath));
        logger.info("[ --- Refreshing the element - " + xpath + " - in DOM to avoid Stale Element Exception ---- ]");
        logger.info("[ --- Value of Attribute wasClicked after clicking: " + refreshedElement.getAttribute("wasClicked") + " ---- ]");
    }

    private static void addAttribute(WebElement element, String attribute, String value) {

        if (element.getAttribute(attribute) == null) {
            js.executeScript("arguments[0].setAttribute('" + attribute + "', '" + value + "')", element);
        }
    }

    public static void clickButton(String xpath) {

        WebElement element = getDriver().findElement(By.xpath(xpath));
        logger.info("[ --- Xpath é : " + xpath + " ] ----");
        element.click();
    }

    public static void clickHiddenLayersButton(String xpath) {

        // Creating a list of WebElements that match the xpath.

        List<WebElement> elements = getDriver().findElements(By.xpath(xpath));
        logger.info("[ --- The size of the list is: " + elements.size() + " ] ----");

        // Using JavascriptExecutor Click script, we can avoid intercepted elements.

        if (elements.size() == 1) {
            javaScriptClick(xpath);
        } else {
            javaScriptClick(xpath + "[1]");
        }

    }

    public static void javaScriptClick(String xpath) {

        WebElement button = getDriver().findElement(By.xpath(xpath));
        js.executeScript("arguments[0].click();", button);

        // Condition that checks if the button was clicked or not, and changes its flag after a click.
        if (button.getAttribute("wasClicked") == null || button.getAttribute("wasClicked").equals("false")) {
            addAttribute(button, "wasClicked", "true");
            logger.info("[ --- The wasClicked from element " + xpath + " is now " + button.getAttribute("wasClicked") + "--- ]");
        } else {
            addAttribute(button, "wasClicked", "false");
            logger.info("[ --- The wasClicked from element " + xpath + " is now " + button.getAttribute("wasClicked") + "--- ]");
        }
    }

    public static void verifyGreenButtonAttribute(String greenButton, String value) {

        WebElement button = getDriver().findElement(By.xpath(greenButton));
        assertEquals(value,button.getAttribute("wasClicked"));
    }

    public static FluentWait createFluentWait(Long time) {

        FluentWait wait = new FluentWait(getDriver());

        // Setting conditions of FluentWait
        wait.withTimeout(Duration.ofMillis(time));
        wait.pollingEvery(Duration.ofMillis(250));
        wait.ignoring(NoSuchElementException.class);

        return wait;
    }

//    public static handleAlertPop() {
//
//    };
}
