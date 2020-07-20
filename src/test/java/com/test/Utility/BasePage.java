package com.test.Utility;

import cucumber.api.java.Before;
import cucumber.api.java.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import com.test.Utility.Driver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class BasePage {

    public  WebDriver driver = Driver.driver;

    public void navigateTo(String url){

        driver.navigate().to(url);
        driver.manage().window().maximize();
    }

    public static byte[] captureScreenShot() throws IOException {
        byte[] data = ((TakesScreenshot) Driver.driver).getScreenshotAs(OutputType.BYTES);
        return data;
    }
}
