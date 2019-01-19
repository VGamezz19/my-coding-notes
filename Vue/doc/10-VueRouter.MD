# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Vue Router

## Vue router

Es una libreria oficial de Vue, donde podremos encontrar toda la informacion necesaria en su documentacion. Esta libreria nos permitira gestionar las rutas de nuestra aplicacion.

## Instalacion

descargar el paquete `vue-router` en nuestro proyecto.
Una vez instalado, tendremos que inyectarlo en nuestro `main.js`, para que nuestra instancia de `Vue` sepa que usamos este objeto, muy parecido al usar `EventBus` y `Plugins`.

> main.js

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'

import { eventBusPlugin, objectPlugin } from '@/plugin'

Vue.use(VueRouter)
Vue.use(eventBusPlugin)
Vue.use(objectPlugin)

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
```

> routes.js

```js
import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  { path: '/track/:id', component: TrackDetail, name: 'track' }

]

export default routes
```

De esta forma definiremos nuevas  rutas, dentro del fichero routes.js iremos especificando y asignando componente y ruta.
Para que se muestre en nuestra aplicacion, tendremos que usar el entry-point `router-view`. Como hemos inyectado a nuestra instancia de vue el `VueRoute`, podemos usar genericamente algunos componentes del VueRoute como `router-view`, `router-link`, etc...

> App.js

```js
<template lang="pug">
  #app
    pm-header
    // Esta sera la entrada del router
    router-view

    pm-footer
</template>
```

## Usabilidad

Es importante remarcar, que `VueRoute` crea dos tipos de objetos glovales en nuestra instancia de vue. `this.$route` y `this.$router`

### $route

Lo usaremos exclusibametne para obtener informacion, los parametros y la ruta en la que esta la pagina actualmente.

> TrackDetail.Vue

> Cuando entramos a la ruta /track/:id --> /track/una-id-hola

```js
export default {
    components: { PmTrack },
    data () {
      return {
        track: {}
      }
    },
    // life cicle
    created () {
      const id = this.$route.params.id // si lo declaramos como ID, lo obtendremos con el mismo
      // id --> una-id-hola
      trackService.getById(id)
        .then(res => {
          this.track = res
        })
}
```

### $router

La usaremos para modificar nuestra ruta, y `pushear` nuestras rutas para ir cambiandolas.

> Track.vue

```js
export default {
  props: {
    track: { type: Object, required: true }
  },

  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)

      this.$bus.$emit('set-track', this.track)
    },
    goToTrack (id) {
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
```

es mucho mejor acceder a la ruta, con el nombre que le definimos en el fichero `routes.js`
Usamos el parametro `params` para pasarle la informacion.
Es importante remarcar, que si definimos la routa con un parametro `:holaTest`, para poder acceder a el, tendremos que poner el mimos nombre `holaTest`, diamos que accederiamos de esta forma al pushearle un parametro:

```js
      this.$router.push({ name: 'track', params: { holaTest: "Hello-World"  } })

```