import { Component } from "react";
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../../actions';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends Component {

    handleRemoveTodo = (e) => {
        e.stopPropagation();
        this.props.removeTodo(this.props.todo.id);
    }

    handleToggleTodo = (e) => {
        e.stopPropagation();
        this.props.toggleTodo(this.props.todo.id);
    }

    render() {
        const { todo } = this.props;
        const { title, completed } = todo;

        return (
            <div className={styles.item} onClick={this.handleToggleTodo}>
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={this.handleToggleTodo} 
                    onClick={(e) => e.stopPropagation()}
                />
                <span className={completed ? styles.done : ''}>{title}</span>
                <button onClick={this.handleRemoveTodo}>Remove</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    toggleTodo,
    removeTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
