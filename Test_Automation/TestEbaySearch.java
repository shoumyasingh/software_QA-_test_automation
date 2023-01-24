import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestEbaySearch {

    WebDriver driver;
    String myWebBrowserDriver = "webdriver.chrome.driver";
    String myWebBrowserDriverPath = "C:\\Drivers\\Selenium\\chrome\\chromedriver.exe";
    String urlEbay = "http://www.ebay.com/";
    String urlAmazon = "http://www.amazon.com/";
    String mySearchItem = "JBL Speakers";
    String lnkDailyDeals = "Daily Deals";

    // launch browser and go to ebay.com
    public void launchBrowser() throws InterruptedException {
        System.setProperty(myWebBrowserDriver, myWebBrowserDriverPath);
        driver = new ChromeDriver();

//        System.setProperty("webdriver.gecko.driver","C:\\Drivers\\Selenium\\firefox\\geckodriver.exe");
//        FirefoxDriver driver = new FirefoxDriver();

        driver.manage().window().maximize();
        driver.get(urlEbay);
        Thread.sleep(3000);
    }

    // Search Product and click link text Daily Deals
    public void searchProduct() throws InterruptedException {
        driver.findElement(By.id("gh-ac")).sendKeys(mySearchItem);
        driver.findElement(By.id("gh-btn")).click();
        Thread.sleep(3000);
        driver.findElement(By.linkText(lnkDailyDeals)).click();
        Thread.sleep(3000);
    }

    // Navigate to amazon.com then go back
    public void navigateToBack() throws InterruptedException {
        driver.navigate().to(urlAmazon);
        Thread.sleep(3000);
        System.out.println("Now navigate to amazon page title is " + driver.getTitle());
        driver.navigate().back();
        Thread.sleep(3000);
        System.out.println("Now navigate back to ebay page title is " + driver.getTitle());
    }

    public void closeExit() {
        driver.quit();
    }

    public static void main(String[] args) throws InterruptedException {
        TestEbaySearch obj = new TestEbaySearch();

        obj.launchBrowser();
        obj.searchProduct();
        obj.navigateToBack();
        obj.closeExit();
    }
}