# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Mixins

## Mixins

Los mixins es otro camino que nos proporciona Vue para poder compartir codigo y evitar la repeticion de  codigo.

Como se puede interpretar, un mixin une el codigo en diversos componentes, tantos como compartan la logica de dicho mixin.

Pueden compartir todo, method, data, etc.

Un buen ejemplo seria por ejemplo, para gestionar la logica de un loader. simplemente importariamos el mixin del del codigo del loader que lo acciona o lo detiene al componente que vayamos a necesitar dicho loader, y lo tendriamos todo centralizado.

```js
// define a mixin object
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// define a component that uses this mixin
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"
```

Como he comentado antes, tambien se puede hacer mixin de la data de los componentes.
> El componente tendra preferencia

```js
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```

[More about mixins](https://vuejs.org/v2/guide/mixins.html#ad)