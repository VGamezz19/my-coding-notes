# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Modifiers

## Modifiers

Vue nos proporciona una forma de atacharnos algunos eventos del DOM, usando `v-on:` o tambien conocido como `@`, podemos atacharnos a `keyup` y seleccionar en que tecla se accionara

```html
<!-- same as above -->
<input v-on:keyup.enter="foo">

<!-- also works for shorthand -->
<input @keyup.enter="foo">
```

>Full list of key modifier

- enter
- tab
- delete
- esc
- space
- up
- down
- left
- right

[More about modifiers](https://vuejs.org/v2/guide/events.html#Key-Modifiers)

## Event Modifiers

Aparte de trigear y controlar los eventos del keyup, tambien podemos capturar los eventos, a la hora de hacer submit y demas.

```html
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>
```

[More about event modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers)