# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Vuex

## Vuex

Es una libreria que nos permitira gestionar el estado de nuestra aplicacion de forma centralizada, y usar patrones parecidos que con flux y redux.

Toda la informacion estara centralizada en un unico lugar, para poder gestionarla y mostrarla en todos los componentes de nuestra aplicazion.

> Se recomienda usar para aplicaciones de mediana o gran escala.

Vuex crea un singelton de la data, y crea una instancia unica de nuestra informacion, no podremos hacer instancias nuevas.
Cada vez que actualizo el `store`, todos los componentes que dependan de este store, veran el cambio.

`State`| ----`actions`----> |`View`

Las acciones son las que se encargan de fluir la informacion del `state` a la `view`.

Principalmente usaremls este patron, cuando tengamos mucha interactuacion entre padres e hijos, o cuando dos componentes se han de comunicar si estar enlazados gerarquicamente, parecido al `event bus`

## State

Toda nuestra informacion importante, o la que se comparte, estara alamacenada en nuestro estado.
Creamos un fichero `store.js` y iniziamos nuestra store.

### instalarlo

`npm i -D vuex`

>store.js

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // las propiedades, como si fuera data
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      return state.count++
    },

    decrement(state) {
      state.count--
    }
  }
})

export default store
```

el `state` es como si fuera nuestra `data` de los componentes de vue, añadiremos todas las propiedades que compondra el estado.
Dentro de `mutations`, añadiremos los metodos que modificaran nuestro estado.

### Usarlo

>App.js

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <h2>Contador</h2>
      <p> {{count}}</p>
      <!-- <p> 0 </p> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  computed: {
      count() {
          return this.$store.state.count // 0
      }
  },
  components: {
    HelloWorld
  }
}
</script>
```

Es mejor usar `computeds` para acceder a la informacion del state, asi, solo lo cargara cuando se aya modificado, no estara todo el rato pidiendo una informacion que no se ha actualizado.

### MapState

Existe otra forma de poder traerte algunos campos del estado, para no tener que estar definiendo muchos computed.
el `mapState` es un modulo que nos lo proporcionara `vuex`, y nos peritira seleccionar que data queremos de dicho state, de una sencilla forma:

> App.js

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <h2>Contador</h2>
      <p> {{count}}</p>

      <div>
        <button @click="increment"> + </button>
        <button @click="decrement"> - </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  computed: mapState(['count']), //this.count() -- 0
  components: {
    HelloWorld
  }
}
</script>
```

Para poder añadir custom computeds tendremos que usar `spread operators` de esta forma:

```js
export default {
  name: 'app',
  data() {
    return {
      test: 'test'
    }
  },
  computed: {
    ... mapState(['count']),
    stringTest() {
      return this.test + this.count
    }
  }
}
```

## Mutations

Podremos actualizar el stado con las mutations, Vuex no nos permitira modificar el estado directamente.
Para poder acceder a las mutations definidas en el `storage.js` tendremos que acceder al metodo `commit` y añadir el nombre de la mutation, de esta forma

Son metodos SINCRONOS

> storage.js

```js
const store = new Vuex.Store({
  // las propiedades, como si fuera data
  state: {
    count: 0
  },
  mutations: {
    increment(state, payLoad = {}) {
      return state.count += payLoad.number || 1
    },

    decrement(state) {
      state.count--
    }
  }
})
```

Usaremos `payLoad` como si fuera un objeto, para enviarle los parametros que necesita la mutacion.

> App.js

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <h2>Contador</h2>
      <p> {{count}}</p>
      <p>{{stringTest}}</p>
      <div>
        <button @click="increment(10)"> + </button>
        <button @click="decrement"> - </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      test: 'test'
    }
  },
  computed: {
    ... mapState(['count']),
    stringTest() {
      return this.test + this.count
    }
  },
  methods: {
    increment(number) {
      this.$store.commit('increment', {number});
    },
    decrement() {
      this.$store.commit('decrement');
    }
  }
}
</script>
```

Hemos de tener en cuenta, que cuando modifiquemos el estado, todos los componentes que estan accediendo a el, se modificaran instantaneamente.

### MapMutation

Al igual que `mapState`, existe `mapMutation` para mapear las mutacion que necesitaremos en el componente, para no tener que ir creando metodos para enlazarlos a dicho componente

```js
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      test: 'test'
    }
  },
  computed: {
    ... mapState(['count']),
    stringTest() {
      return this.test + this.count
    }
  },
  methods: {
    ... mapMutations(['decrement']),
    increment(number) {
      this.$store.commit('increment', {number});
    }
  }
}
```

No podemos eliminar `increment`, porque mapMutation no permite poder pasar parametros, lo tendremos que definir como un method custom

## Getters

Si queremos añadir una forma de obtener la informacion del `state` custom, tendremos que añadir `getters`. Estos getters seran accesibles para todos los componentes que usen dicho store.

Como dato importante, dentro de un mismo getter, puedo usar otros getters que ya he creado, pasando por parametro `getters`
> store.js

```js
const store = new Vuex.Store({
  // las propiedades, como si fuera data
  state: {
    count: 0
  },
  getters: {
    getDouble(state, getters) {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state, payLoad = {}) {
      return state.count += payLoad.number || 1
    },

    decrement(state) {
      state.count--
    }
  }
})
```

> App.js

```html
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ... mapState(['count']),
    double() {
      return this.$store.getters.getDouble
    }
    // OR

    ... mapGetters(['getDouble'])
  },
  
  ...
}
</script>
```

## Actions

Las actions existen porque las `mutations` son funciones sincronas, digamos que dentro de una mutation no puedo ejecutar una peticion HTTP. Vuex actualiza el State antes de que termine la llamada asyncrono.

> store.js

```js
const store = new Vuex.Store({
  // las propiedades, como si fuera data
    state: {
        count: 0
    },
    getters: {
        getDouble(state) {
            return state.count * 2;
        }
    },
    mutations: {
        increment(state, payLoad = {}) {
            return state.count += payLoad.number || 1
        },

        decrement(state) {
            state.count--
        }
    },

    actions: {
        incrementAsync(context, payLoad) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit('increment', payLoad)
                    resolve(context.state.count)
                }, 2000)
            })
        }
    }
})
```

como primer parametro de nuestra action, tenemos el `context`, tenemos todo el contexto del storage, y normalmente lo usaremos para ejecutar una mutation, despues de que se ejecute el codigo asyncrono, ejecutar la mutation.

> App.js

```js
export default {
  methods: {
    ... mapMutations(['decrement']),
    increment(number) {
      this.$store.commit('increment', {number});
    },
    incremenetAsync(number) {
      this.$store.dispatch('incrementAsync', {number})
        .then((res) => {
          console.log('Accion terminada', res)  
        })
    }
  }
}
```

Con el `dispatch` accederemos a la action.