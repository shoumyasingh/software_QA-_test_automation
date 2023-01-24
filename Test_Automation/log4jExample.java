import org.apache.log4j.Logger;

public class log4jExample {
    /* Get actual class name to be printed on */
    private static Logger logger = Logger.getLogger(log4jExample.class.getName());

    public static void main(String[] args) {
        logger.debug("Hello this is a debug message");
        logger.info("Hello this is an info message");
        logger.error("Hello this is an error message");
        System.out.println("just print Hi");
    }
}
