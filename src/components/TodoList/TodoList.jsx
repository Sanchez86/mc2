import { Component } from "react";
import PropTypes from 'prop-types';

import styles from './TodoList.module.css';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
    render () {
        const { todos } = this.props;

        return (
            <div className={styles.list}> 
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            completed: PropTypes.bool
        })
    ).isRequired
}

export default TodoList;