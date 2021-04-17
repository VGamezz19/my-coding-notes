import com.logger.Logger;
import com.logger.LoggerBuilder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LoggerBuilderTest {
    @Test
    @DisplayName("LoggerBuilder should build a new Logger with empty predefined msg")
    void initialBuildLogger() {
        Logger logger = new LoggerBuilder().build();
        assertEquals("", logger.toString());
    }

    @Test
    @DisplayName("LoggerBuilder should build a new Logger with Logger: prefix")
    void withLoggerPrefixBuildLogger() {
        Logger logger = new LoggerBuilder().withPrefix().build();
        assertEquals("Logger: ", logger.toString());
    }

    @Test
    @DisplayName("LoggerBuilder should build a new Logger with date time")
    void withDateBuildLogger() {
        Logger logger = new LoggerBuilder().withPrefix().withDate().build();
        Date date = new Date();
        assertEquals("Logger: "+ date, logger.toString());
    }

    @Test
    @DisplayName("LoggerBuilder should build a new Logger with dash")
    void withDashBuildLogger() {
        Logger logger = new LoggerBuilder().withPrefix().withDate().withDash().build();
        Date date = new Date();
        assertEquals("Logger: "+ date + " - ", logger.toString());
    }
}
