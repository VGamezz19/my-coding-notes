# Eventos 

Podemos definir y capturar eventos en Vue, añadiendo la palabra clave en el html `v-on:` o el simbolo `@` y el nombre del evento.

Para poder encapsular los eventos, tendremos que definir metodos que seran los encargados de tratar la accion. Estos metodos se definen en la nueva etiqueta `methods` a la hora de definir un nuevo componente `new Vuew`.

```html
<body>
    <div id="app">
        <button @click="sumar">@@ Sumar 1</button>
        <button @click="restar">@@ Restar 1</button>

        <button v-on:click="sumar">Sumar 1</button>
        <button v-on:click="restar">Restar 1</button>

        <button @click="counter++">withOut Sumar 1</button>
        <button @click="counter--">withOut Restar 1</button>

        <h1>El counter esta en {{ counter }} </h1>
    </div>
    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
        let app = new Vue({
            el: '#app',
            data: {
                counter: 0
            },
            methods: {
                sumar() {
                    this.counter++
                },
                restar() {
                    this.counter--
                }
            }
        });
    </script>
</body>
```

Como se observa en el ejemplo, hay tres formas de sumarl y restar al contador.

`v-on` y `@` significan exactamente lo mismo, solo que uno es un shortcut.

Tambien, como podemos ver en el ejemplo, aparte de ejecutar los metodos definidos, podemos insertar una sentencia JavaScript, y Vue lo ejecutara al capturar el vento.