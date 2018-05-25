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

## v-model

A la hora de hacer un formulario y capturar sus eventos, tendremos que proceder de forma distinta. Entra un nuevo concepto llamado `v-model`. un shorthand que nos ahorra algunas lineas de codigo.

`v-model` nos permite bindear el evento y el valor a la vez. por ejemplo:

``` html
<input v-model="something">

<!-- same -->

<input
   v-bind:value="something"
   v-on:input="something = $event.target.value"
>
```

> Fuente [stackoverflow](https://stackoverflow.com/questions/42260233/vue-js-difference-between-v-model-and-v-bind)

Aparte, a la hora de capturar el evento de un formulario, existe del event.preventDefault(). En Vue neutralizaremos su evento con `v-on:submit.prevent="somefunction"`

## Event modifiers

```html
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>

<!-- the click event will be triggered at most once -->
<a v-on:click.once="doThis"></a>

<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div v-on:scroll.passive="onScroll">...</div>
```

## Key  Modifiers

[https://vuejs.org/v2/guide/events.html#Key-Modifiers](https://vuejs.org/v2/guide/events.html#Key-Modifiers)

Vue tambien ha añadido algunos key modifiers por defecto dentro de la scope VirtualDOM.

```html
<!-- same as above -->
<input v-on:keyup.enter="submit">

<!-- also works for shorthand -->
<input @keyup.enter="submit">
```

- enter

- tab

- delete (captures both “Delete” and “Backspace” keys)

- esc

- space

- up

- down

- left

- right
