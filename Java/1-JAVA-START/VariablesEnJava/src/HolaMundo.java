public class HolaMundo {
    public static void main(String[] args) {
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
