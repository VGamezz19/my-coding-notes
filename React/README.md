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

### useEffect

por defecto, useEffect, ejecutara los dos comportamientos conocidos como `componentDidMount` y `componentDidUpdated`, pero puedes poner una cierta logica para modificar este comportamiento.

Aveces repetimos logica entre estos dos metodos, con el hook, lo podemos hacer más consistente. por defecto ejecutaran los dos, pero hay una forma de hacerlo opcional

si dentro del hook `useEffect` hacemos un return de un metodo, eso es lo que ejecutara cuando el componente haga un `componentWillUnmount`

> Se pueden definir tantos useEffect como queramos!!

```js
  useEffect(() => {
    document.title = `There are ${todos.length} todos`;
  })

  const [width, setWidth] = useState(window.innerWidth);
  
  //ComponentDidMound && ComponentDidUpdated.
  useEffect(()=> {
    // We can define this funcion there, becouse only here we will use it.
    const handlerResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handlerResize);

    //this will execute with componentWillUnmount.
    return () => {
      window.removeEventListener('resize', handlerResize);
    }
  })
```

### customHooks

es cuando extraemos codigo donde estamos usando hooks, y lo usamos en otro componente. Siempre lo definiremos con un `use` y el nombre de la funcion.
ejemplo:

```js
function AppHooks() {
  const [ todos, setTodos ] = useState([
    {
      text: 'Learn about react',
      isCompleted: false,
    },
    {
      text: 'Meet friendfor lunch',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo appt',
      isCompleted: false,
    }
  ]);
  const width = useWindowWidth();

  useEffect(() => {
    document.title = `There are ${todos.length} todos`;
  })

  function addTodo(text) {
    const newTodo = {text, isCompleted: false};
    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}

      <TodoForm addTodo={addTodo} />

      <div>{width}</div>
    </div>
  );
}

//custom hooks. use-
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(()=> {
    const handlerResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    }
  })
  return width;
}

export default AppHooks;
```

la palabra `use` nos tiene que indicar que esa propiedad va a aser una propiedad `stateful` por eso es importante usar esa nomenclatura.