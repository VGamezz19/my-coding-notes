import React, { Component } from 'react';

function Todo({ todo }) {
  return (
    <div>
      {' '}
      {todo.text}
      {' '}
    </div>
  );
}

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(event) {
    event.preventDefault();
    if (!this.state.text) {
      return;
    }
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  handlerChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <input type="text" placeholder="add todo" value={this.state.text} onChange={this.handlerChange} />
      </form>
    );
  }
}

class AppClass extends Component {
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
        },
      ],

      width: window.innerWidth,
    };

    this.addTodo = this.addTodo.bind(this);
    this.handlerResize = this.handlerResize.bind(this);
  }

  componentDidMount() {
    document.title = `there are ${this.state.todos.length} todos`;
    window.addEventListener('resize', this.handlerResize);
  }

  componentDidUpdate() {
    document.title = `there are ${this.state.todos.length} todos`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handlerResize);
  }

  handlerResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  addTodo(text) {
    const newTodo = { text, isCompleted: false };

    this.setState(state => ({
      todos: [...state.todos, newTodo],
    }));
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={this.addTodo} />

        <div>{this.state.width}</div>
      </div>
    );
  }
}

export default AppClass;
