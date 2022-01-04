import React from 'react';
import NewTodo from '../components/todo/NewTodo';
import TodoList from '../components/todo/TodoList';
// import PageHeader from '../components/layout/PageHeader';

function Home() {
    return (
        <>
            <NewTodo />
            <TodoList />
        </>
    );
}

export default Home;
