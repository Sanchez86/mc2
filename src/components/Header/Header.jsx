import { Component } from "react";
import PropTypes from 'prop-types';

import styles from './Header.module.css';

class Header extends Component {
    render () {
        const { title, countTodos } = this.props;

        return (
            <header className={styles.header}>
                {title} ({countTodos})
            </header>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
    countTodos: PropTypes.number
}

Header.defaultProps = {
    title: 'Todos',
    countTodos: 0
}

export default Header;