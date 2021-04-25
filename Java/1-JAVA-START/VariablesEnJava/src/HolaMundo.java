/**
 * The type Hola mundo.
 */

public class HolaMundo {
    /**
     * The entry point of application.
     *
     * @param args the input arguments
     */
    public static void main(String[] args) {
        breakLine("Variables");
        variables();
        breakLine("Concat");
        concat();
        breakLine("Special caracters");
        specialCharacters();

    }

    public static void breakLine(String title) {
        System.out.println("----------------------------------");
        System.out.println(title);
        System.out.println("----------------------------------");
    }


    private static void specialCharacters() {
        var name = "Karl";

        System.out.println("New line: \n" + name);
    }

    private static void concat() {
        var user = "Victor";
        var title = "Ingenier";

        var join = title + " " + user;

        System.out.println("join = " + join);

        var i = 4;
        var j = 5;

        System.out.println(i + j); // sum the numbers
        //9

        System.out.println(i + j + "Victor"); // from left to right, detect numbers, and summing it, then, concat the string
        //9Victor

        System.out.println("Victor" + i + j);// from left to right, detect string, so, concat all strings and numbers
        //Victor45

        System.out.println("Victor" + (i + j)); //we can modify the priority of our evaluation, here will sum and concat
        //Victor9

        System.out.println("Victor" + (i - j));
    }


    public static void variables() {
        System.out.println("HolaMundo.main");

        // int -- integer
        int myVarInteger = 10;

        System.out.println(myVarInteger);

        // there we will modify the variable value
        myVarInteger = 5;

        System.out.println(myVarInteger);

        String myVarString = "Hello World";

        // ctrl + space, show all variables
        System.out.println(myVarString);

        myVarString = "adios";

        System.out.println(myVarString);

        // ctrl + click, navigate to definition

        // var, will fill itself the type, by the initial value
        // var is only available at V-8.

        var myVarVarInteger = 15;

        System.out.println(myVarVarInteger);

        var myVarVarString = "Hello var";

        System.out.println("myVarVarString = " + myVarVarString);
    }
}
