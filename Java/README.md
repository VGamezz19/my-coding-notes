# Java

Tenemos el JDK y el Compiler, vease en java -version y javac -version

Java es un lenguaje tipado, y todo su codigo y fundamentos parten de las clases. El programa se arrancara mediante una clase
y ejecutara el metodo `main`.

Muy importante llamar el fichero y la clase que contiene IGUAL

En comvertiremos el codigo fuente en bitecode, gracias al Java compiler. El binarycode es iterpretado por el JDK, la maquina virtual.

![img](./javacompiler.png)

ejecutamos en la consola `javac ./HelloWorld.java` y nos generara un fichero llamado `HelloWorld.class` con el codigo binario.

Finalmente, para ejecutar dicho binario, ejecutaremos `java HelloWorld`. Esto buscara la classe compilada en `Class Loader System`

Como podemos ver, el metodo main acepta unos String [] args. Estos son los argumentos que aceptan a la hora de ejecutar dicha clase.

```java

class com.helloprintln.Hello {
  public static void main(String[] args) {
    System.out.println("com.helloprintln.Hello, " + args[0] + '!');
  }
}

```

> $ javac com.helloprintln.Hello.java
>
> $ java com.helloprintln.Hello pepito
>
> com.helloprintln.Hello, pepito!

En java todo se estructura mediante paquetes

Todo extiende de Object, como en JavaScripts

Una clase estatica es esa que no se isntancia, como por ejemplo, una clase que sea como una Utilidad.

Protected se usa cuando solo queremos usar esa clase dentro del mismo paquete

JEE (Java Enterprice Edition) - para ejecutar servidor, tiene JRE y mas cosas, mas Java Apis

JRE (Java Runetime Edition) - ejecutar codigo a nivel cliente

Swing components - para crear una vista en Java
