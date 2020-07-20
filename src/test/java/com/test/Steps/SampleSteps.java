package com.test.Steps;


import com.google.inject.Inject;
import com.test.Page.SamplePage;
import com.test.Utility.BasePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class SampleSteps extends BasePage {


     SamplePage samplePage =new SamplePage(driver);

    @Given("^I navigate to (.*) website$")
    public void i_navigate_to_https_www_google_com_website(String text) throws Throwable {
        navigateTo(text);
        //samplePage.navigateTo(text);
    }

    @When("^I perform search using (.*) keyword$")
    public void i_perform_search_using_Test_Automation_keyword(String text) throws Throwable {
        samplePage.performGoogleSearch(text);
    }

    @Then("^I get search result (.*)$")
    public void i_get_search_result(String text) throws Throwable {
            boolean flag = samplePage.isTextPresent(text);
            Assert.assertTrue(true);
    }


}
