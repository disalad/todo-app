import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
    if (!todos || todos.length <= 0) {
        return (
            <section>
                <p style={{ marginLeft: '1.75em' }}>
                    No tasks yet. Click on the input to add a new task
                </p>
            </section>
        );
    }
    return (
        <section>
            {todos.map(todo => (
                <TodoItem {...todo} key={todo._id} />
            ))}
        </section>
    );
}

export default TodoList;
