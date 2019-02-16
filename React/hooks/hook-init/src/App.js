import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index }) {
  return (
    <div className="todo">
      { todo.text}
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="insert todo" className="input" value={value} onChange={e => setValue(e.target.value)}></input>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about react',
      isCompleted: false,
    },
    {
      text: 'Meet friendfor lunch',
      isCompleted: 'false',
    },
    {
      text: 'Build really cool todo appt',
      isCompleted: 'false',
    }
  ]);

  const addTodo = (text) => {
    const newTodo = { text, isCompleted: false };
    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}/>
        ))}

        <TodoForm addTodo={addTodo} />

      </div>
    </div>
  )
}

export default App;
