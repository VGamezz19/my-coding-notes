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
    }

    public static void breakLine(String title) {
        System.out.println("----------------------------------");
        System.out.println(title);
        System.out.println("----------------------------------");
    }

    private static void concat() {
        var user = "Victor";
        var title = "Ingenier";

        var join = title + " " + user;

        System.out.println("join = " + join);

        
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
