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