import React, {Component} from "react";
import "regenerator-runtime";
import "../../sprites/cancel.svg";
import TodoList from "#components/todo-list/TodoList.jsx";
import TodoInput from "#components/todo-input/TodoInput.jsx";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.handleTodoItemChange = this.handleTodoItemChange.bind(this);
    this.handleTodoInput = this.handleTodoInput.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    let todos = await response.json();
    this.setState({todos: todos});
  }

  handleTodoItemChange(id) {
    this.setState(prevState => ({
      todos: prevState.todos.map(item => item.id === id ? {...item, completed: !item.completed} : item)
    }));
  }

  handleTodoInput(value) {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {id: prevState.todos[prevState.todos.length - 1]?.id + 1 || 1, title: value, completed: false}
      ]
    }));
  }

  handleRemove(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <>
        <TodoInput onTodoInputSubmit={this.handleTodoInput} />
        <TodoList
          todos={this.state.todos}
          onTodoItemChange={this.handleTodoItemChange}
          onTodoItemRemove={this.handleRemove}
        />
      </>
    );
  }
}

export default App;