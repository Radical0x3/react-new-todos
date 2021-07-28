import React, {Component} from 'react';
import "./App.scss";
import "../../sprites/cancel.svg";
import TodoList from "#components/todo-list/TodoList.jsx";
import TodoInput from "#components/todo-input/TodoInput.jsx";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, text: "Lorem ipsum #1", isCompleted: false},
        {id: 2, text: "Lorem ipsum #2", isCompleted: false},
        {id: 3, text: "Lorem ipsum #3", isCompleted: true}
      ],
    }

    this.handleTodoItemChange = this.handleTodoItemChange.bind(this);
    this.handleTodoInput = this.handleTodoInput.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleTodoItemChange(id) {
    this.setState(prevState => ({
      todos: prevState.todos.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item)
    }))
  }

  handleTodoInput(value) {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {id: prevState.todos[prevState.todos.length - 1]?.id + 1 || 1, text: value, isCompleted: false}
      ]
    }))
  }

  handleRemove(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <>
        <TodoInput onTodoInputSubmit={this.handleTodoInput}/>
        <TodoList todos={this.state.todos}
                  handleTodoItemChange={this.handleTodoItemChange}
                  onTodoItemRemove={this.handleRemove}
        />
      </>
    );
  }
}


export default App;