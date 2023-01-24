package StepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.*;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;


import java.io.File;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;


public class Target_E2E_Automation {

    static WebDriver driver;
    static Actions actions;
    static JavascriptExecutor jse;
    static Logger logger;
    String systemProp = "webdriver.chrome.driver";
    String driverPath = "../chromedriver";
    static String targetUrl = "https://www.target.com/";
    String product;
    String screenshotPath = "../CS522Screenshots";

    @Given("Open the Chrome and go to Target website")
    public void open_the_chrome_and_go_to_target_website() {
        System.setProperty(systemProp, driverPath);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-blink-features=AutomationControlled");

        driver = new ChromeDriver(options);
        actions = new Actions(driver);
        jse = (JavascriptExecutor)driver;

        logger = Logger.getLogger(Target_E2E_Automation.class.getName());
        PropertyConfigurator.configure("log4j.properties");

        driver.get(targetUrl);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }

    @When("Select a category and subcategory")
    public void select_a_category_and_subcategory() throws InterruptedException {
        logger.debug("Inside select a category and subcategory method");
        driver.findElement(By.linkText("Categories")).click();
        Thread.sleep(2000);
        driver.findElement(By.linkText("Christmas")).click();
        Thread.sleep(2000);
        WebElement element = driver.findElement(By.linkText("Christmas Lights"));
        product = element.getText();
        element.click();
        Thread.sleep(2000);
        driver.findElement(By.cssSelector("#pageBodyContainer > div:nth-child(1) > div > div:nth-child(3) > div > div > ul > li:nth-child(1)")).click();
        Thread.sleep(5000);
    }

    @When("Apply filters")
    public void apply_filters() throws Exception {
        logger.debug("Inside apply filters method");
        driver.findElement(By.xpath("//button[text()='Light Bulb Count']")).click();
        Thread.sleep(2000);
        WebElement element1 =  driver.findElement(By.id("chk-5zld6"));
        WebElement element2 =  driver.findElement(By.id("chk-5zld7"));
        jse.executeScript("arguments[0].click()", element1);
        jse.executeScript("arguments[0].click()", element2);
        Thread.sleep(2000);
        driver.findElement(By.xpath("//button[text()='Update']")).click();
        Thread.sleep(5000);
    }

    @When("Select product")
    public void select_product() throws Exception {
        logger.debug("Inside select product method");
        //Select Icicle Lights
        driver.findElement(By.xpath("//*[@id=\"pageBodyContainer\"]/div[1]/div/div[9]/div/div[1]/div[2]/div/section/div/div[1]/div/div/div[1]/div[1]")).click();
        Thread.sleep(2000);
        //Select product from the list
        driver.findElement(By.xpath("//*[@id=\"pageBodyContainer\"]/div[1]/div[2]/div[2]/div/div[4]/div/div[1]/button[3]")).click();
        Thread.sleep(2000);
        //Click on Shipping
        driver.findElement(By.xpath("//*[@id=\"pageBodyContainer\"]/div[1]/div[2]/div[2]/div/div[4]/div/div[2]/div[2]/div/div/div")).click();
        Thread.sleep(2000);
        //Select Required Quantity
        List<WebElement> list = driver.findElements(By.cssSelector("body > div.styles__SpeechBubbleContent-sc-p8ctp0-5.dBKrEq.styles__AnimatedPopoverInternal-sc-uz1fwu-0.cKParx > div:nth-child(1) > ul li"));
        for (WebElement e : list) {
             if(e.getText().equals("2")){
                 e.click();
                 break;
             }
        }
        Thread.sleep(2000);
    }

    @Then("Add product to cart")
    public void add_product_to_cart() throws InterruptedException {
        logger.debug("Inside add product to cart method");
        driver.findElement(By.id("addToCartButtonOrTextIdFor84273354")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//button[text()='Continue shopping']")).click();
        Thread.sleep(2000);
    }

    @Given("Go to home page")
    public void go_to_home_page() throws InterruptedException{
        logger.debug("Inside go to home page method");
        driver.navigate().to("https://www.target.com/");
        Thread.sleep(2000);
    }

    @When("Enter the product to be searched {string}")
    public void enter_the_product_to_be_searched(String product) throws InterruptedException{
        logger.debug("Inside enter the product to be searched method");
        driver.findElement(By.id("search")).clear();
        driver.findElement(By.id("search")).sendKeys(product);
        actions.sendKeys(Keys.ENTER).build().perform();
        this.product = product;
        Thread.sleep(3000);
    }

    @When("Apply filters to {string} {string} {string}")
    public void apply_filters_to(String product, String minPrice, String maxPrice) throws InterruptedException{
        logger.debug("Inside apply filters to product method");
        if(product.equals("TV")){
            driver.findElement(By.xpath("//button[text()='Popular TV Screen Sizes']")).click();
            Thread.sleep(2000);
            WebElement element1 =  driver.findElement(By.id("chk-ph95n"));
            WebElement element2 =  driver.findElement(By.id("chk-aanr8"));
            JavascriptExecutor jse = (JavascriptExecutor)driver;
            jse.executeScript("arguments[0].click()", element1);
            jse.executeScript("arguments[0].click()", element2);
            Thread.sleep(2000);
            driver.findElement(By.xpath("//button[text()='Update']")).click();
            Thread.sleep(2000);
            driver.findElement(By.xpath("//button[text()='Brand']")).click();
            Thread.sleep(2000);
            jse.executeScript("arguments[0].click()", driver.findElement(By.id("chk-5y4wr")));
            driver.findElement(By.xpath("//button[text()='Update']")).click();
            Thread.sleep(2000);
            driver.findElement(By.xpath("//h2[text()='Shipping']")).click();
            Thread.sleep(2000);
            driver.findElement(By.xpath("//*[@id=\"pageBodyContainer\"]/div[1]/div/div[4]/div/div[1]/div[2]/div/section/div/div[1]/div/div/div[1]/div[1]")).click();
        }else{
            driver.findElement(By.xpath("//button[text()='Price']")).click();
            Thread.sleep(2000);
            driver.findElement(By.id("minPriceValue")).sendKeys(minPrice);
            driver.findElement(By.id("maxPriceValue")).sendKeys(maxPrice);
            Thread.sleep(2000);
            driver.findElement(By.xpath("//button[text()='Update']")).click();
            Thread.sleep(2000);
            driver.findElement(By.xpath("//*[@id=\"pageBodyContainer\"]/div[1]/div/div[4]/div/div[1]/div[2]/div/section/div/div[2]/div/div/div[1]/div[1]/h3/div/div/a/div[1]")).click();
        }

    }

    @Then("Select and add to cart")
    public void select_and_add_to_cart() throws InterruptedException{
        logger.debug("Inside select and add to cart method");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//button[text()='Add to cart']")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//button[text()='Protect your purchase']")).click();
        Thread.sleep(2000);
    }

    @Given("Go to cart")
    public void go_to_cart() throws InterruptedException{
        logger.debug("Inside go to cart method");
        driver.findElement(By.xpath("//a[text()='View cart & check out']")).click();
        this.product = "cart";
        Thread.sleep(3000);
        logger.info("Cart Loaded");
    }

    @Then("Take Screenshot")
    public void take_screenshot() throws Exception {
        logger.debug("Inside take screenshot method");
        TakesScreenshot scrShot = ((TakesScreenshot) driver);
        File SrcFile = scrShot.getScreenshotAs(OutputType.FILE);
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("MM-dd-yyyy hh:mm a");
        String formattedDate = myDateObj.format(myFormatObj);
        File DestFile = new File(screenshotPath + "//" + product + "_" + formattedDate + ".png");
        FileUtils.copyFile(SrcFile, DestFile);
    }

    void waitsForElement(String expectedElSelector, int expectedCount) { // explicit wait helper
        logger.debug("Inside wait for elements method");
        WebDriverWait waitFor = new WebDriverWait(driver, Duration.ofSeconds(8));
        waitFor.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.cssSelector(expectedElSelector), expectedCount));
    }

    void addWait() {
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
    }

    int getPriceAsInt (String price) {
        return Math.round(Float.parseFloat(price.replaceAll("[$,]","")));
        //return Integer.parseInt(price.replace(",","").substring(1,4));
    }

    @Given("Cart is loaded")
    public void checkIfCartLoaded () {
        logger.debug("Inside cart loaded method");
        String listItemSelector = "div[data-test=\"cartItem\"]";
        waitsForElement(listItemSelector, 0);
        logger.info("Cart Loaded");
    }

    @Then("Verifies Cart Amount")
    public void verifiesCartTotalAmount () {
        logger.debug("Inside cart total amount method");
        String listItemSelector = "div[data-test=\"cartItem\"]";
        waitsForElement(listItemSelector, 0);
        String totalAmtSelector = "div[data-test=\"cart-summary-total\"] p";
        String totalPrice = driver.findElement(By.cssSelector(totalAmtSelector)).getText();
        int priceAsInt = getPriceAsInt(totalPrice);
        Assert.assertTrue(priceAsInt >= 50);
        logger.info("Verified Total Amount");
        addWait();
    }

    @Then("Verifies Delivery Fee")
    public void verifiesDeliveryInfo () {
        logger.debug("Inside delivery info method");
        String deliveryFeeSelector = "div[data-test=\"cart-summary-delivery\"] div div:nth-child(2) p";
        String expectedDeliveryFee = "Free";
        String deliveryFeeDisplayed = driver.findElement(By.cssSelector(deliveryFeeSelector)).getText();
        Assert.assertTrue(deliveryFeeDisplayed.contains(expectedDeliveryFee));
        logger.info("Verified Delivery Fee");
        addWait();
    }

    @Then("Verifies Checkout Button")
    public void verifiesCheckoutBtn () {
        logger.debug("Inside checkout button method");
        String checkoutBtnSelector = "button[data-test=\"checkout-button\"]";
        WebElement checkoutBtn = driver.findElement(By.cssSelector(checkoutBtnSelector));
        Assert.assertTrue(checkoutBtn.getText().contains("check out"));
        Assert.assertTrue(checkoutBtn.isEnabled());
        logger.info("Verified Checkout Button");
        addWait();
    }


    @Then("Goes to checkout")
    public void verifiesSignInModalForNonAuth () {
        logger.debug("Inside sign in modal for non auth method");
        String checkoutBtnSelector = "button[data-test=\"checkout-button\"]";
        WebElement checkoutBtn = driver.findElement(By.cssSelector(checkoutBtnSelector));
        checkoutBtn.click();
        String modalSelector = "div[data-test=\"@web/OverlayModal\"]";
        waitsForElement(modalSelector, 0);
        logger.info("Sign In Modal loaded for non-auth users");
        addWait();
    }

    @Then("Validates Sign In Modal")
    public void validatesSignInForm () {
        logger.debug("Inside validates sign in form method");
        WebElement title = driver.findElement(By.cssSelector("div[data-test=\"@web/OverlayModal\"] div[data-test=\"content-wrapper\"] h2"));
        String expectedSignInModalTitle = "Sign into your Target account";
        Assert.assertTrue(title.getText().contains(expectedSignInModalTitle));
        logger.info("Verified Title");
        String invalidTestUserName = "dfgfg@*(";
        String invalidTestPassword = "abc";
        driver.findElement(By.cssSelector("#username")).sendKeys(invalidTestUserName);
        addWait();
        driver.findElement(By.cssSelector("#password")).sendKeys(invalidTestPassword);
        addWait();

        driver.findElement(By.cssSelector("#login")).click();
        addWait();

        WebElement usernameErrorMsg = driver.findElement(By.id("username--ErrorMessage"));
        Assert.assertTrue(usernameErrorMsg.isDisplayed());
        Assert.assertTrue(usernameErrorMsg.getText().equals("Please enter a valid email or phone number"));
        logger.info("Verified Username field validations");

        WebElement passwordErrMsg = driver.findElement(By.id("password--ErrorMessage"));
        Assert.assertTrue(passwordErrMsg.isDisplayed());
        Assert.assertTrue(passwordErrMsg.getText().equals("Please enter a valid password"));
        logger.info("Verified Password field validations");
    }

    @Then("Close and quit")
    public void close_and_quit(){
        logger.debug("Closing all the sessions");
        driver.close();
        driver.quit();
    }

}