import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.sql.Timestamp;
import java.util.Date;

import java.io.File;
import java.time.Duration;

public class TestAmazonSearchDataDriven {
    // add global definition here (10%)
    WebDriver driver;
    //Define file path for string
    String screenshotPath = "c://CS522Screenshots";
    // Launch browser and go to amazon
    void launchBrowserGoToAmazon() {
        System.setProperty("webdriver.chrome.driver", "chromedriver");
        driver = new ChromeDriver();
        driver.get("http://www.amazon.com/");
    }

    String timeStampReturm (){
        Date date = new Date();
        Timestamp ts=new Timestamp(date.getTime());
        return ts.toString();
    }
    // Maximize window size
    void maximizeWindowSize() {
        driver.manage().window().maximize();
    }
    // Input a product item and click Search
    void searchProduct() throws Exception {
        // implicit wait
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // Explicit wait
        WebElement res = new WebDriverWait(driver, Duration.ofSeconds(15)).until(ExpectedConditions
                .elementToBeClickable(By.id("twotabsearchtextbox")));

        driver.findElement(By.id("twotabsearchtextbox")).sendKeys("JBL Speakers");
        // Screenshot capture
        takeSnapShot(driver, screenshotPath + "//" + timeStampReturm() +"_product1.png") ;
        System.out.println("ScreenShot captured at "+ timeStampReturm());
        // Explicit wait
        WebElement res1 = new WebDriverWait(driver, Duration.ofSeconds(15)).until(ExpectedConditions
                .elementToBeClickable(By.id("nav-search-submit-button")));
        driver.findElement(By.id("nav-search-submit-button")).click();
        // implicit wait of 10 sec
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }
    // Click the link Best Sellers
    void openLinkBestSellers() throws InterruptedException {
        // implicit wait of 10 sec
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // explicit wait
        WebElement res2 = new WebDriverWait(driver, Duration.ofSeconds(15)).until(ExpectedConditions
                .elementToBeClickable(By.linkText("Best Sellers")));
        driver.findElement(By.linkText("Best Sellers")).click();
    }
    // Navigate to ebay.com then go back
    void navigateToEbayGoBack() throws InterruptedException {
        driver.navigate().to("http://www.ebay.com/");
        // implicit wait of 10 sec
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        System.out.println("Now navigate to the title of page is " +
                driver.getTitle());
        driver.navigate().back();
        // implicit wait of 10 sec
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        System.out.println("Now navigate back to the title of page is " +
                driver.getTitle());

    }
    // Select a search category
    void selectCategory() {
        Select category = new Select(driver.findElement(By.id("searchDropdownBox")));
        category.selectByVisibleText("Electronics");
        category.selectByIndex(28);
    }
    // Close browser and exit
    void closeExit(){
        driver.quit();
    }

    void takeSnapShot(WebDriver webdriver,String fileWithPath) throws Exception {
        //Convert web driver object to TakeScreenshot
        TakesScreenshot scrShot =((TakesScreenshot)webdriver);

        //Call getScreenshotAs method to create image file
        File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);

        //Move image file to new destination
        File DestFile=new File(fileWithPath);

        //Copy file at destination
        FileUtils.copyFile(SrcFile, DestFile);

    }

    public static void main(String[] args) throws Exception {
        TestAmazonSearchDataDriven obj = new TestAmazonSearchDataDriven();
        obj.launchBrowserGoToAmazon();
        obj.maximizeWindowSize();
        obj.selectCategory();
        obj.searchProduct();
        obj.openLinkBestSellers();
        obj.navigateToEbayGoBack();
        obj.closeExit();
    }
}


