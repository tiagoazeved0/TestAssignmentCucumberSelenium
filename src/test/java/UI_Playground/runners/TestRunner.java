package UI_Playground.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/UI_Playground",
        glue = {"UI_Playground.steps"},
        //tags = {"@DemoTestRun", "not E2E"},
        tags = {"@UIFeatures"},
        plugin = {"pretty", "html:target/cucumber-report",
                "json:target/cucumber-report/cucumber.json",
                "junit:target/cucumber-report/cucumber.xml"}

)

public class TestRunner {
}


