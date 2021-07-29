import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./TodoItem.scss";
import classNames from "classnames/bind";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick() {
    this.props.onItemChange();
  }

  handleRemove() {
    this.props.onItemRemove();
  }

  render() {
    return (
      <div className={classNames(styles["todo-item"], {[styles["todo-item--completed"]]: this.props.completed})}>
        <label className={styles["todo-item__label"]}>
          <input type="checkbox" onChange={this.handleClick} checked={this.props.completed} />
          <span className={styles["todo-item__text"]}>{this.props.title}</span>
        </label>
        <button className={styles["todo-item__remove"]} onClick={this.handleRemove}>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onItemChange: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired
};

export default TodoItem;