import React, {Component} from "react";
import PropTypes from "prop-types";
import TodoItem from "#components/todo-item/TodoItem.jsx";
import styles from "./TodoList.scss";

class TodoList extends Component {
  render() {
    return (
      <div className={styles["todo-list"]}>
        {this.props.todos.length < 1 && <h3 className={styles["todo-list__empty"]}>No todos</h3>}
        {this.props.todos.map((item) => {
          return (
            <TodoItem
              title={item.title} completed={item.completed} key={item.id}
              onItemChange={() => this.props.onTodoItemChange(item.id)}
              onItemRemove={() => this.props.onTodoItemRemove(item.id)}
            />
          );
        })}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  onTodoItemChange: PropTypes.func.isRequired,
  onTodoItemRemove: PropTypes.func.isRequired
};

export default TodoList;