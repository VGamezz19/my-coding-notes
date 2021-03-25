package com.helloprintln;

import com.helloprintln.utils.Coords;
import com.helloprintln.utils.Logger;

public class Hello {
    public static void main(String[] args) {
        Logger.log("Hello");

        Coords coords = new Coords(1,2);

        Logger.log("Hey, " + coords.toString());
    }
}
