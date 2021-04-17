import com.hello.Hello;

import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class HelloTest {
    @Test
    @DisplayName("Hello should salute to name")
    void helloShouldSalute() {
         assertEquals("Hello, Victor!", Hello.salute("Victor"));
    }
}
