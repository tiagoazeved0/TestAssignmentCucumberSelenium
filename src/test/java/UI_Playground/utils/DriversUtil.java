package utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import io.github.bonigarcia.wdm.WebDriverManager;


public class DriversUtil {
    RemoteWebDriver driver;

    public DriversUtil() {
    }

    private static final Logger logger = LoggerFactory.getLogger(DriversUtil.class);

    public RemoteWebDriver browserSetup(Boolean incognito) {
        logger.info("--- [ Entered Browser Step Up Phase ] ---");
        WebDriverManager.chromedriver().setup();
        ChromeOptions chromeOptions = new ChromeOptions();

        if (incognito) {
            logger.info("--- [ Incognito Mode is: " + incognito + " ---");
            logger.info("--- [ Adding incognito to Browser ] ---");
            chromeOptions.addArguments("--incognito");
        }
        driver = new ChromeDriver(chromeOptions);
        return driver;
    }

    public void browserTearDown(WebDriver driver) {
        logger.info("--- [ Entered Browser Tear Down Phase ] ---");
        driver.quit();
    }

}
