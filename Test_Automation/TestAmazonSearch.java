import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class TestAmazonSearch {
    // add global definition here (10%)
    WebDriver driver;
    // Launch browser and go to amazon
    void launchBrowserGoToAmazon() {
        System.setProperty("webdriver.chrome.driver", "chromedriver");
        driver = new ChromeDriver();
        driver.get("http://www.amazon.com/");
    }
    // Maximize window size
    void maximizeWindowSize() {
        driver.manage().window().maximize();
    }
    // Input a product item and click Search
    void searchProduct() throws InterruptedException {
        Thread.sleep(3000);
        driver.findElement(By.id("twotabsearchtextbox")).sendKeys("JBL Speakers");
        driver.findElement(By.id("nav-search-submit-button")).click();
        Thread.sleep(3000);

    }
    // Click the link Best Sellers
    void openLinkBestSellers() throws InterruptedException {
        Thread.sleep(3000);
        driver.findElement(By.linkText("Best Sellers")).click();
        Thread.sleep(3000);
    }
    // Navigate to ebay.com then go back
    void navigateToEbayGoBack() throws InterruptedException {
        driver.navigate().to("http://www.ebay.com/");
        Thread.sleep(3000);
        System.out.println("Now navigate to the title of page is " +
                driver.getTitle());
        driver.navigate().back();
        Thread.sleep(3000);
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
    public static void main(String[] args) throws InterruptedException {
        TestAmazonSearch obj = new TestAmazonSearch();
        obj.launchBrowserGoToAmazon();
        obj.maximizeWindowSize();
        obj.selectCategory();
        obj.searchProduct();
        obj.openLinkBestSellers();
        obj.navigateToEbayGoBack();
        obj.closeExit();
    }
}


