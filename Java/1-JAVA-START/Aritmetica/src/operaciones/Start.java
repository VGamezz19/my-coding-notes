package operaciones;

public class Start {
    public static void main(String[] args) {
        var aritmetica = new Aritmetica();
        aritmetica.a = 1;
        aritmetica.b = 2;

        aritmetica.sum();
        int result = aritmetica.sumReturn();

        System.out.println(result);
    }
}
