import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from "./TodoInput.scss";

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({input: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.input) {
      this.props.onTodoInputSubmit(this.state.input);
      this.setState({input: ""});
    }
  }

  render() {
    return (
      <form className={styles["todo-input"]} onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter todo..."
               className={styles["todo-input__input"]}
               onInput={this.handleInput}
               value={this.state.input}
        />
        <button type="submit" className={styles["todo-input__submit"]}>Add todo</button>
      </form>
    );
  }
}

TodoInput.propTypes = {
  onTodoInputSubmit: PropTypes.func.isRequired
};

export default TodoInput;