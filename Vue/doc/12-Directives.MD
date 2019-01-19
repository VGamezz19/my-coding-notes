# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Directives

## Directives

Las directivas las usaremos de forma global o local de cada componente, dependiendo de si es generico o no. Las usaremos para tratar el doom en un caso determinado.
Imaginate que queremos modificar los estilos del HTML/CSS dependiendo de si un dato (en este caso `preview_url`) es null.

```js
const blur = {}

function setBlur (el, binding) { // newNodo // oldNodo
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    } else {
      a.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding, vnode) {
      setBlur(el, binding)
    }
  })
}

export default blur
```

para definir una nueva directiva, tenemos que usar el methodo `directive`, y con la propiedad `bind` podremos acceder al valor, el Dom actual etc..

`bind(element, binding, currentNode, OldNode)`

- Element: Podremos acceder al elemento actual en el que se aplica la directiva.

- Binding: Podremos acceder a la propiedad/propiedades para poder hacer nuestra logica


## Como usarlo

Primero, si lo queremos de forma global, lo instalaremos en nuestra instancia de Vue.

> main.js
```js
import blur from '@/directives/blur'

Vue.use(blur)

```

Despues iremos al componente que lo queremos usar, y lo especificaremos de esta forma en el HTML.

```pug
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              v-blur="t.preview_url"
              :class="{'is-active': t.id === selectedTrack}",
              :track="t",
              @select="setSelectedTrack")
```

> IMPORTANTE!
> es importante recordar, que para acceder a nuestra directiva, tendremos que ponerle delante un `v-nameOfDirective`

Le pasaremos el valor que queremos acceder en el binding

[More about custom directives](https://vuejs.org/v2/guide/custom-directive.html)