package com.helloprintln.utils;

import java.util.Date;

/**
 * Logs messages to  Console
 *
 * @example
 *
 * Logger.log("Hello, Wolrd");
 */

public class Logger {
    public static void log(String message) {
        String date = new Date().toString();
        System.out.println("Log: " + date + " - " +  message);
    }
}
