# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Filters

# Filters VueJS

Podemos generar filters en nuestro dom con el symbolo reservado `|` (pipe), todo lo que sigue despues de un pipe, sera interpretado como una funcion, que cogera la informacion de la izquierda y la ejecutara.

Los filtros en Vue se ejecutan de Izquierda a Derecha, en orden.

Tendremos que añadir una nueva propiedad en la instancia de Vue, llamada `filters` y alli añadir las funciones y su implementacion.

```html
<body>
    <div id="filters">
        <h1>{{ titulo | uppercase }}</h1>
        <h2>{{ substitulo | lowercase | capitalize}}</h2>
        <!-- capitalize(lowecase(substitulo)) -->

    </div>
    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
        let filters = new Vue({
            el: '#filters',
            data: {
                titulo: 'Estas en Platzi',
                substitulo: 'Estas viendo el curso de Vue.js',
            },
            filters: {
                uppercase: (str) => str.toUpperCase() ,
                lowercase: (str) => str.toLowerCase(),
                capitalize: (str) => str[0].toUpperCase() + str.slice(1)
            }
        });
    </script>
</body>
```