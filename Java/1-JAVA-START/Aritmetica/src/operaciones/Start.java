package operaciones;

public class Start {
    public static void main(String[] args) {
        var arithmetic = new Aritmetica();
        arithmetic.a = 1;
        arithmetic.b = 2;

        arithmetic.sum();
        int result = arithmetic.sumReturn();

        System.out.println(result);

        int resultParams = arithmetic.sumWithArgs(12, 2);

        System.out.println(resultParams);

        var arithmeticInit = new Aritmetica(14,2);

        arithmeticInit.sum();
    }
}
