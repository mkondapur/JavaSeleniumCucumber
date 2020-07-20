package com.test.TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        monochrome = true,
         features = "classpath:features", tags = {"@Search"},
        glue  =    {"com/test/Steps/Hooks","com/test/Steps"},
         plugin = {
                "json:target/cucumber-report/cucumber.json", "html:build/cucumber-html-report",
                "pretty:build/cucumber-pretty.txt","com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/ExtentReports/report.html",
                "junit:build/cucumber-junit-results.xml","pretty", "html:target/cucumber.html",
                "json:target/cucumber-report.json"
               }
)


public class WebTestRunner {
}
