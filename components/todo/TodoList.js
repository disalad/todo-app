import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const DUMMY_TODOS = [
        { content: 'Javascript', id: 1 },
        { content: 'Typescript', id: 2 },
    ];
    return (
        <section>
            {DUMMY_TODOS.map(({ content, id }, idx) => (
                <TodoItem content={content} id={id} key={idx} />
            ))}
        </section>
    );
}

export default TodoList;
