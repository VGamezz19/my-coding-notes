package com.logger;
import java.util.Date;

public class LoggerBuilder {

    private String message = "";

    private void setMessage(String msg) {
        this.message += msg;
    }

    public LoggerBuilder withPrefix() {
        setMessage("Logger: ");
        return this;
    }

    public  LoggerBuilder withDash() {
        setMessage(" - ");
        return this;
    }

    public  LoggerBuilder withDate() {
        setMessage(new Date().toString());
        return this;
    }

    public Logger build() {
        return new Logger(this.message);
    }
}