import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./TodoAdd.module.css";

class TodoAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      isActive: true,
    };
  }

  handleAddTodo = () => {
    const { addTodo } = this.props;
    addTodo(this.state.title);
    this.setState({ title: "", isActive: true });
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value }, () => {
      if (this.state.title.length > 1) {
        this.setState({ isActive: false });
      } else {
        this.setState({ isActive: true });
      }
    });
  };

  render() {
    return (
      <div className={styles.add}>
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.handleTitle(e)}
        />
        <button disabled={this.state.isActive} onClick={this.handleAddTodo}>
          Add
        </button>
      </div>
    );
  }
}

TodoAdd.propTypes = {
  addTodo: PropTypes.func,
};

export default TodoAdd;
