import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from "./TodoItem.scss";
import classNames from "classnames/bind";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick() {
    this.props.onTodoItemChange();
  }

  handleRemove() {
    this.props.onTodoItemRemove();
  }

  render() {
    return (
      <div className={classNames(styles["todo-item"], {[styles["todo-item--completed"]]: this.props.isCompleted})}>
        <label className={styles["todo-item__label"]}>
          <input type="checkbox" onChange={this.handleClick} checked={this.props.isCompleted}/>
          <span className={styles["todo-item__text"]}>{this.props.item}</span>
        </label>
        <button className={styles["todo-item__remove"]} onClick={this.handleRemove}>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onTodoItemAdd: PropTypes.func,
  onTodoItemRemove: PropTypes.func.isRequired
};

export default TodoItem;