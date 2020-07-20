package com.test.Utility;

import org.openqa.selenium.WebDriver;

public class Driver {

    public static WebDriver driver;

    public void setDriver(WebDriver driver){
        driver= driver;
    }

    public WebDriver getDriver(){
        return driver;
    }
}
