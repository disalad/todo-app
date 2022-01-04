import React from 'react';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';

function TodoList() {
    const DUMMY_TODOS = [{ content: 'Javascript' }, { content: 'Typescript' }];
    return (
        <section>
            <NewTodo />
            {DUMMY_TODOS.map(({ content }, idx) => (
                <TodoItem content={content} key={idx} />
            ))}
        </section>
    );
}

export default TodoList;
