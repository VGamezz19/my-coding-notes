# React

## React - Hooks

Nuevos en la version 16.8, Una forma de usar estado y otras funcionalidades de React sin escribir Clases.


## Porque han añadido los hooks?

Problemas con las clases:

- Componentes enormes

- Clases confusas

El problema principal esque React no nos proporciona el `Stateful primitive` si no trabajamos desde una class component.

La propuesta de los hooks no rompera las veriones anteriores, es un añadido.

## Hooks

### useState

UseState es uno de los hooks que nos proporciona la nueva version de React. No proporciona la posilbilidad de coger la funcionalidad `sateful` de react, en un funcional component.

 ```js
import React, { useState } from 'React';

export default function Todo ({text}) {
    const [name, setName]  = useState('Todo default text');

    //const name = // TodoDefault text
    //const setName =  // funciton set state name.

    function handleNameChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    return (
        // HTML funcion component.
    );
}
```

Destructuramos las variables `name, setName`, donde *name* sera el valor actual del estado name `this.state.name`. la funcion *setName* sera la forma de modificar este espacion en memoria del estado, como si puera un `setState({})` pero más especifico.

Cuando llamamos el metodo que setea la propiedad, es cuando le decimos a React que necesitamos Renderizar el componente.