# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Computed vs Methods

## Computed

Estan creados para afrontar operaciones simples. Para poder añadir logica en la template :

Ejemplo:

- bad

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: {{ message.split('').reverse().join('') }}</p>
</div>
```

- good

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```

Realmente podemos obtener el mismo resultado usando `methods`

- methods

```html
<p>Reversed message: "{{ reverseMessage() }}"</p>
```

```js
// in component
methods: {
  reverseMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

Pero la gran diferencia entre estos dos, es que la propiedad `computed` es cacheada y si la propiedad no cambia, esta no se ejecutara.

> *computed properties are cached based on their dependencies*
>
> from [*vue-doc-computed*](https://vuejs.org/v2/guide/computed.html)

una propiedad `computed` solo se ejecutara cuando se updated una dependencia reactiva, en el ejemplo anterior, cuando modifiquemos `this.message`

- bad computed

```js
computed: {
  now: function () {
    return Date.now()
  }
}
```

esta funcion nunca se ejecutara, ya que la dependencia del computed no es reactiva.


> *In comparison, a method invocation will always run the function whenever a re-render happens.*

https://stackoverflow.com/questions/44350862/method-vs-computed-in-vue