import React from 'react';
import NewTodo from '../components/todo/NewTodo';
import TodoList from '../components/todo/TodoList';

function Home() {
    return (
        <div>
            <h3>Todos</h3>
            <NewTodo />
            <TodoList />
        </div>
    );
}

export default Home;
