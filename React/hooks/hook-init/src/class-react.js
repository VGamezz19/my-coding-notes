import React, { Component }  from 'react';
import './App.css'

function Todo({ todo }) {
  return (
    <div> {todo.text} </div>
  );
}

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(event) {
    event.preventDefault();
    if(!this.state.text){
      return;
    }
    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }

  handlerChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <input type="text" value={this.state.text} onChange={this.handlerChange}></input>
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
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
      ]
    }

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text) {
    const newTodo = { text, isCompleted: false};

    this.setState((state) => {
      return {
        todos: [...state.todos, newTodo]
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}/>
        ))}
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;