import { Component } from "react";
import { connect } from "react-redux";
import { addTodo, fetchTodos } from "./actions";
import { getAllTodos, selectLoadingTodos } from "./selectors";
import Header from "./components/Header/Header";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";

import styles from "./App.module.css";
import Loader from "./components/Loader/Loader";

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, addTodo, isLoading } = this.props;

    return (
      <div className={styles.app}>
        <Header countTodos={todos.length} />
        <TodoAdd addTodo={addTodo} />
        {isLoading ? <Loader /> : <TodoList todos={todos} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: getAllTodos(state),
  isLoading: selectLoadingTodos(state),
});

const mapDispatchToProps = {
  addTodo,
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
