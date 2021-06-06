package operaciones;

public class Aritmetica {
    int a;
    int b;

    public Aritmetica() {
        System.out.println("Empty object");
    }

    public Aritmetica(int a, int b) {
        this.a = a;
        this.b = b;
    }

    public int sumReturn() {
        return a + b;
    }

    public void sum() {
        int result = this.sumReturn();
        System.out.println(result);
    }

    public int sumWithArgs(int a, int b) {
        this.a = a;
        this.b = b;

        return this.sumReturn();
    }
}
