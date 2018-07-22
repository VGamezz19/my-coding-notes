# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) Reactividad & Virtual DOM

## Reactividad

Es una de las cualidades más importantes del framework, la reactividad es lo que le permite al Framework evaluar y decidir cuales son los cambios realizados y propagarlos.

![img](https://github.com/VGamezz19/platzi-course-notes/blob/master/Vue/doc/ReactividadVirtualDOM.png)

Vue tiene 2 limitaciones cuando hablamos de su reactividad.

 - Data()

 Siempre, en la funcion `data()` hemos de devolver un objeto que sera el estado de ese componente. Sino, todos los componentes generados, tendrian el mismo estado

 - Mutabilidad de los Objetos

 Como hemos comentado, Para poder definir los parametro del componente de Vue, hemos de especificar la funcion `data()` y que devulva un objeto lik:

 ```js
    data() {
        return {
            person: {
                name:'Victor'
            }
        }
    }
 ```

 Esto asignara la propiedad `person` al componente que estemos instanciando. Que sucede si queremos añadir otra propiedad (como por ejemplo `lastName`) al objeto `person`?

 Si lo añadimos de forma trivial: `this.person.lastName = 'Gamez'` Esto no funcionara, ya que el objeto ya ha sido instanciado, y los watchers (observables) de Vue no lo contemplaran.

 > Solucion 1, añadiendo solo 1 atrivuto

 ```js
    methods:{
        addProp () {
            //Todas las funciones de Vue disponibles en el THIS, se acceden con $
            //$set(propiedad-a-modificar, nuevo-atrivuto, con-que-valor)
            this.$set(this.person, 'lastName', 'Gamez')
        }
    }
 ```

  > Solucion 2, añadiendo multi atrivutos

 ```js
    methods:{
        addProp () {
            //Object.assign(apartir-de-que-objeto, derivar-del-objeto, objeto-con-nuevas-propiedades)
            this.person = Object.assign({}, this.person, { lastName: 'Gamez', secondLastName: 'Royo'})
            //Al generar un nuevo objeto en memoria de this.person, los watchers modificaran su valor y efectuaran correctamente su reactivdad.
        }
    }
 ```

