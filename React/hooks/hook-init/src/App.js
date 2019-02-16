import React, { useState }  from 'react';
import './App.css'

function Todo({ todo }) {
  return (
    <div>{todo.text}</div>
  );
}

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  function handlerSubmit(event) {
    event.preventDefault();
    if (!text) {
      return;
    }

    addTodo(text);
    setText('');
  }

  function handlerChnage(event) {
    setText(event.target.value);
  }

  return (
    <form onSubmit={handlerSubmit}>
      <input type="text" placeholder="add todo" value={text} onChange={handlerChnage}></input>
    </form>
  )
}

function App() {
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
    </div>
  );
}

export default App;