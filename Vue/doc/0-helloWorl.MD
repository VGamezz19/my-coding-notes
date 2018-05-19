# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Hello World

para que VueJs identifique un elemento HTML, tendremos que instanciarlo de esta forma:

```html
<body>
    <div id="app">
        Hola {{ nombre }}

        <a v-bind:href="url"> Ir a {{ pagina }}</a>
        <!-- The same -->
        <a :href="url"> Ir a {{ pagina }}</a>
    </div>
    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
        let app = new Vue({
            el: '#app',
            data: {
                nombre: 'Victor',
                url : 'https://google.com',
                pagina: 'Google'
            }
        });
    </script>
</body>
```

Con la palabra clave `Vue` crearemos un componente en base un elemento HTML de nuestro DOM. En este caso, selecciona el elemento con el Id app.
Aoartir de ese momento, Vue identificara que ese elemento es reactivo.

- `el`: Seleccionar el elemento
- `data`: Los datos que va a bindear en el virtual DOM

-----

Cuando queramos bindear alguna propiedad en el virtual DOM, tendremos que añadir la palabra clave `v-bind:`href="nombre-variable" (shortcut de `v-bind` --> `:`)