package com.logger;

public class Logger {
    private String buildMessage;

    public Logger(String msg) {
        this.buildMessage = msg;
    }

    @Override
    public String toString() {
        return this.buildMessage;
    }

    public void print(String msg) {
        System.out.println(this.buildMessage + msg);
    }
}
