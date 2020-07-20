package com.test.Page;

import com.test.Utility.BasePage;
import com.test.Utility.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SamplePage extends BasePage{

    public SamplePage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @FindBy(name = "q")
     WebElement searchKeyword;

    @FindBy(name = "btnK")
     WebElement search;

    public void performGoogleSearch(String keyword) {

        searchKeyword.sendKeys(keyword);
        search.click();
    }


    public boolean isTextPresent(String text) {
        return driver.getPageSource().contains(text);
    }

}
