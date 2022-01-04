import React from 'react';
import classes from './TodoItem.module.css';

function TodoItem({ content }) {
    return (
        <article className={classes.todoItem}>
            <h1>{content}</h1>
        </article>
    );
}

export default TodoItem;
