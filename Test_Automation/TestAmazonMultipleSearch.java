import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class TestAmazonMultipleSearch {

    WebDriver driver;

    @BeforeTest
    void setup() {
        System.setProperty("webdriver.chrome.driver", "chromedriver");
        driver = new ChromeDriver();
        driver.get("http://www.amazon.com/");
        driver.manage().window().maximize();
    }

    @AfterTest
    void tearDown() {
        driver.quit();
    }

    @Test(priority = 3, enabled = true)
    void searchJBLSpeakersComparePrices() throws InterruptedException {
        searchItem("JBL Speakers", "$37.45", "$119.99", "149.95");
    }

    @Test(priority = 4, enabled = true)
    void searchWomensShoesComparePrices() throws InterruptedException {
        searchItem("Womens shoes", "$71.97", "$29.99", "$89.96");
    }

    @Test(priority = 2, enabled = false)
    void searchCellPhoneComparePrices() throws InterruptedException {
        searchItem("cell phones", "$325.90", "$244.00", "$69.78");
    }

    @Test(priority = 1, enabled = true)
    void searchPrinterPrices() throws InterruptedException {
        searchItem("printer", "$99.00", "$219.00", "$84.78");
    }

    void searchItem(String item, String priceA, String priceB, String priceC) throws InterruptedException {
        driver.findElement(By.id("twotabsearchtextbox")).clear();
        driver.findElement(By.id("twotabsearchtextbox")).sendKeys(item);
        driver.findElement(By.id("nav-search-submit-button")).click();
        Thread.sleep(5000);
        boolean b = driver.getPageSource().contains(priceA) ||
                driver.getPageSource().contains(priceB) ||
                driver.getPageSource().contains(priceC);
        Assert.assertTrue(b, "not found the price meets my expectation " + priceA + " or " + priceB + " or " + priceC);
    }
}


