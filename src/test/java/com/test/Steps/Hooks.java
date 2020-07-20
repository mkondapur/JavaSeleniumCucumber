package com.test.Steps;

import com.google.inject.Inject;
import com.test.Utility.BasePage;
import com.test.Utility.Configuration;
import com.test.Utility.Driver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.File;
import java.sql.SQLException;

public class Hooks {


    @Before
    public void setUp()throws Throwable{
      if (Configuration.get("browser").equalsIgnoreCase("chrome")){
          System.setProperty("webdriver.chrome.driver", new File("browser/chromedriver.exe").getAbsolutePath());
          DesiredCapabilities cap = new DesiredCapabilities();
          ChromeOptions options = new ChromeOptions();
          options.addArguments(new String[]{"enable-automation"});
          options.addArguments(new String[]{"--disable-infobars"});
          options.addArguments(new String[]{"--start-maximized"});
          options.addArguments(new String[]{"--disable-popup-blocking"});
          options.setExperimentalOption("useAutomationExtension", Boolean.FALSE);
          cap.setCapability("acceptSslCerts", Boolean.TRUE);
          cap.setCapability("chromeOptions", options);
          Driver.driver = new ChromeDriver(cap);
          Driver.driver.manage().deleteAllCookies();
      }

      if (Configuration.get("browser").equalsIgnoreCase("ie")){
          System.setProperty("webdriver.ie.driver", new File("browser/IEDriverServer.exe").getAbsolutePath());
          DesiredCapabilities cap = new DesiredCapabilities();
          cap.setBrowserName("internet explorer");
          cap.setVersion("11");
//          cap.setCapability(CapabilityType.ForSeleniumServer.ENSURING_CLEAN_SESSION, true);
          cap.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
          cap.setCapability("nativeEvents", false);
          cap.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
          cap.setCapability(InternetExplorerDriver.IGNORE_ZOOM_SETTING, true);
          cap.setCapability(InternetExplorerDriver.REQUIRE_WINDOW_FOCUS, true);
          cap.setCapability("enablePersistentHover", true);
//          cap.setCapability("ie.ensureCleanSession", true);
          cap.setCapability(InternetExplorerDriver.IE_SWITCHES, "-private");
          cap.setCapability("ignoreZoomSetting", true);
          cap.setCapability("disable-popup-blocking", true);
          Driver.driver = new InternetExplorerDriver(cap);
          Driver.driver.manage().window().maximize();
      }

    }


    @After
    public void afterScenario(Scenario scenario) throws Exception {
        System.out.print("Closing connection.");
        fullScreenshot(scenario);
        Driver.driver.quit();
        Thread.sleep(3000);
    }

    public void fullScreenshot(Scenario scenario) throws Exception {
        final byte[] screenshot = BasePage.captureScreenShot();
        scenario.embed(screenshot, "image/png");
    }


    public void failScreenshot(Scenario scenario) throws Exception {
        if (scenario.isFailed()) {
            final byte[] screenshot =  BasePage.captureScreenShot();
            scenario.embed(screenshot, "image/png");
        }
    }



}
