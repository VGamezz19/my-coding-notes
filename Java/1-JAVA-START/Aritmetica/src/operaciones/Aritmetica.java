package operaciones;

public class Aritmetica {
    int a;
    int b;

    public int sumReturn() {
        return a + b;
    }

    public void sum() {
        int result = this.sumReturn();
        System.out.println(result);
    }
}
