# VueJS

## Introduccion

### Caracteristicas

- Vue es un Framework progresivo. Poco a poco podremos incrementar su complijidad. Podamos hacer un proyecto rapidamente, pero tambien puede llegar a ser complicado.

- MV (Modelo Vista)

- Aplicacion Reactiva. 

- VueJs --> UI

- Orientado a Componentes reutilizables.

- Facil de aprender

- VueJs + Herramientas + Librerias, podemos crear una SPA muy buena


### State en Vue

cada vez que cambia el estado, VueJS genera un binding, entre un modelo y una vista, y sera reactivo con los eventos de la pagina.

### VueJs vs React

- Los dos utilian un virtual DOM

- Componentes (Reutilizables)

## Hello World

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

## v-if | template | v-show

Para poder esconder y condicionar nuestras vistas segun nuestras logica, tendremos que usar `v-if` y `v-show`. La gran diferencua entre estos dos conceptos son:

En el caso de `v-if`, cuando la condicion es false, añade un `<!-- -->` en el HTML. los elementos encapsulados en ese `v-if` desaparecen.

En el caso de `v-show`, añadira el atributo `display:none` y mantendremos el HTML.

### Cuando usar uno u otro ?

v-show le resulta más facil de ejecutar para el navegador, ya que simplemente añadira esa propiedad `CSS` al elemento. Por otro lado, v-if tiene más consecuencias de ejecucion, ya que tendra que comparar en el Virtual DOM y eliminar ese elemento.

Cuando hagamos un primer `Render` de la vista, utilizaremos `v-if`, pero cuando estemos dentro del flujo del usuario, mostrando y escondiendo elementos, utilizaremos `v-show`

### Que es Template ?

Template esun elemento que nos proporciona exclusivamente `Vue`, proviene del framewor `MeteorJS`. Ese elemento solo lo sabra interpretar el Virtual DOM, y sirve para encapsular elementos HTML. Nunca sera interpretado en el HTML (DOM real). Por eso, no podemos añadirle estilos ni atributos.

```html
<body>
    <div id="show">
        <!-- Incorrecto, repeticion de codigo -->
        <h1 v-if="!mostrar">Este es mi titulo</h1>
        <h2 v-if="!mostrar">Este es mi subtitulo</h2>
        <a v-if="!mostrar" :href="url"> Ir a {{ pagina }}</a>

        <!-- Incorrecto, ya que obliga a encapsular en un nuevo div -->
        <div v-if="!mostrar">
            <h1>Este es mi titulo</h1>
            <h2>Este es mi subtitulo</h2>
            <a :href="url"> Ir a {{ pagina }}</a>
        </div>

        <!-- Correcto, ya que TEMPLATE no se creara en el HTML  -->
        <template v-if="!mostrar">
            <h1>Este es mi titulo</h1>
            <h2>Este es mi subtitulo</h2>
            <a :href="url"> Ir a {{ pagina }}</a>
        </template>

        <!-- Correcto, agrega el atributo display:none; -->
        <div v-show="mostrar">
            <h1>Este es mi titulo</h1>
            <h2>Este es mi subtitulo</h2>
            <a :href="url"> Ir a {{ pagina }}</a>
        </div>
        <div v-show="!mostrar">
            <h1>Esto esta oculto</h1>
        </div>

    </div>
    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
        let show = new Vue({
            el: '#show',
            data: {
                nombre: 'Victor',
                url: 'https://google.com',
                pagina: 'Google',
                mostrar: true,
            }
        });
    </script>
</body>
```