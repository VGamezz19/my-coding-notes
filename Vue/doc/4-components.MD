# Components

En Vue podemos crear componentes hijos, que adoptaran informacion (si es necesario) del padre e emitiran informacion.

![img](https://github.com/VGamezz19/platzi-course-notes/blob/master/Vue/doc/paternComponent.png)

## Como crearlos

```js
Vue.component('my-component-name', {
    props: [ 'curso' ],
    methods: {
        onChange (ev) {
            this.$emit('checked', this.curso.value, ev.target.checked)
        }
    },
    template: `
    <div>
        <input 
            type="checkbox" 
            @change="onChange" 
            v-bind:id="curso.value" 
            v-bind:value="curso.value" />

        <label v-bind:for="curso.value">{{ curso.nombre }}</label>
    </div>
    `
    })
```

- `props`: definiremos palabras clave, para que Vue sepa interpretar y enlazar la informacion que le llegara al componente hijo de su padre.

- `methods`: definiremos los metodos que tendra el componenete. Como concepto nuevo, cuando querramos emitir eventos al padre, tendremos que usar el elemento `this.$emit`.

- `template`: introduciremos el template de nuestro componente. Como nota, no podemos usar el elemento reservado `template` para encapsular los elementos.

## Como emitir eventos de hijo a padre. (ciclo hacia arriba)

tendremos que definir un metodo que capturara la accion dentro del hijo, luego, ese metodo contendra la palabra clave y mencionada `this.$emit`.

```js
methods: {
    onChange (ev) {
        this.$emit('checked', this.curso.value, ev.target.checked)
    }
}
```

como podemos ver en el ejemplo, realmente estamos definiendo un event listener llamado `checked`. por eso, en el padre podremos recoger ese evento de esta forma:

```html
        <form v-on:submit.prevent="submit">
            <h2>Tus cursos favoritos</h2>
            
            <template v-for="el in cursos">
                <my-component-name 
                    v-bind:curso = "el"
                    v-on:checked="selectCursos"></my-component-name>
            </template>

            <button type="submit">Enviar</button>
        </form>
```

como podemos ver en el ejemplo, accedemos a ese evento como si fuera un `v-on:click`, luego, añadimos la funcion que capturaria ese evento hijo.

```js
selectCursos (curso, check) {
    if(check) {
        return this.cursosSelected.push(curso)
    }
    const index = this.cursosSelected.indexOf(curso); 

    return this.cursosSelected.splice(index, 1)
},
```

como podemos ver, a la funcion le entran 2 parametros, porque habiamos definido este evento:
`this.$emit('checked', this.curso.value, ev.target.checked)`. Con los valores `curso.value` y el bolean de `ev.target.checked`

## Ejemplo entero:

```html
    <div id="app">
        <form v-on:submit.prevent="submit">
            <h2>Tus cursos favoritos</h2>
            
            <template v-for="el in cursos">   
                <my-component 
                    :curso = "el"
                    @checked="selectCursos"></my-component>
            </template>

            <button type="submit">Enviar</button>
        </form>
    </div>

    <!-- development version, includes helpful console warnings -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">

        Vue.component('my-component', {
            props: [ 'curso' ],
            methods: {
                onChange (ev) {
                    this.$emit('checked', this.curso.value, ev.target.checked)
                }
            },
            template: `
            <div>
                <input 
                    type="checkbox" 
                    @change="onChange" 
                    v-bind:id="curso.value" 
                    v-bind:value="curso.value" />

                <label v-bind:for="curso.value">{{ curso.nombre }}</label>
            </div>
            `
         })

        let app = new Vue({
            el: '#app',
            data: {
                cursos: [
                    { nombre: 'Curso de Intro a Vue', value: 'vue'},
                    { nombre: 'Curso de Intro a SEO', value: 'SEO'},
                    { nombre: 'Curso de Intro a React', value: 'React'},
                    { nombre: 'Curso de Intro a Growth', value: 'Growth'}
                ],
                cursosSelected: []
            },
            methods: {
                selectCursos (curso, check) {
                    if(check) {
                        return this.cursosSelected.push(curso)
                    }
                    const index = this.cursosSelected.indexOf(curso); 

                    return this.cursosSelected.splice(index, 1)
                },
                submit() {
                    console.log("Ejecuta la funcion submit")
                    console.log(this.cursosSelected)
                }
            }
        });
    </script>
</body>
```