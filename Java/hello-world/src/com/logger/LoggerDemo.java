package com.logger;

public class LoggerDemo {
    public static void main(String[] args) {
        Logger logger = new LoggerBuilder().withPrefix().withDate().withDash().build();
        logger.print("Patata");
    }
}
