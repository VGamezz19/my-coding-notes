# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) EventBus & Plugins

## Event Bus, Publish-Subscribe pattern

Un patron de diseño para afrontar la comunicacion entre diferentes partes de tu codigo.
Creamos el punto de entrada y el punto de recogida de los datos.
Cuando los componentes no son ni hijos ni padres, no estan contectados, podemos solucionarlo usando Event Bus

> Un portal entre dos mundos, uno envia, otro recive
> https://alligator.io/vuejs/global-event-bus/

Los eventBus se consideran `plugins` dentro de nuestro proyecto. Por eso, los crearemos en la carpeta llamada `plugin` los crearemos en la carpeta `plugin` y con la extension `.plugin.js`. Simpre crearemos un `plugin` cuando queramos extender y añadir nuevas funcionalidades.

> Un Plugin es una funcionalidad que nos permite extender la funcionalidad del View Model
> https://vuejs.org/v2/guide/plugins.html

### Como crear un Event Bus

Primeramente, tendremos que instanciar un `Objecto` con la propiedad function `install`. Esta recivira los siguientes parametros:

```js
const EventBusMyPlugin = {}

EventBusMyPlugin.install = function (Vue, options) {
    Vue.prototype.$bus = new Vue()
}

export default EventBusMyPlugin
```

Crearemos una instancia de `Vue` para aprovechar las funcionalidades de este.

### Como instanciar globalmente el nuevo Plugin

Tendremos que instanciarlo al inicio de la aplicaciones, usando la function `Vue.use()`

```js
import Vue from 'vue'
import App from '@/App'

import EventBus from '@/plugin/event-bus.plugin'

// calls `EventBus.install(Vue)`
Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})

```

### Como usar nuestro Plugin

// Listen to the event.
EventBus.$on('i-got-clicked', clickHandler);

// Stop listening.
EventBus.$off('i-got-clicked', clickHandler);

Primeramente, tendremos que crear el evento que remos emitir, nuestro `event bus` que vamos a propagar a los modulos que lo requieran.

```js
// Track.vue
methods: {
    selectTrack () {
      this.$bus.$emit('set-track', this.track)
    }
}
```

Despues, crearemos en los otros modulos, los `Listeners` para escuchar ese evento. Para eso, usamos el `hook life cycle created()` para que ese componente\modulo, escucha ese evento (abrimos el portal)

```js
// Play.vue
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
```

Por ultimo, siempre tendremos que eliminar ese "portal" cuando el componente sea destruido:

```js
destroyed() {
    this.$bus.$off('set-track')
}
```

> If you really need to remove every single listener from EventBus, regardless of channel, you can call EventBus.$off() with no arguments at all.
