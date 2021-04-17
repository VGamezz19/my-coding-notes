import com.logger.Logger;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

public class LoggerTest {

    // https://www.baeldung.com/java-testing-system-out-println
    // moock println
    private final Logger logger = new Logger("");
    private final ByteArrayOutputStream outContent = new ByteArrayOutputStream();
    private final PrintStream originalOut = System.out;

    @BeforeEach
    public void setUpStreams() {
        System.setOut(new PrintStream(outContent));
    }

    @AfterEach
    public void restoreStreams() {
        System.setOut(originalOut);
    }

    @Test
    @DisplayName("Logger should print a message")
    void printAMessage() {
        String textToTest = "Hola patata";

        logger.print(textToTest);

        assertEquals(textToTest, outContent.toString().trim());
    }
}