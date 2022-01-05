import React from 'react';
import NewTodo from '../components/todo/NewTodo';
import TodoList from '../components/todo/TodoList';
import axios from 'axios';
// import PageHeader from '../components/layout/PageHeader';

function Home() {
    const onSubmitHandler = async todo => {
        try {
            console.log(todo);
            const response = await axios({
                method: 'POST',
                url: '/api/new',
                data: { content: todo },
            });
            console.warn(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <NewTodo onSubmit={onSubmitHandler} />
            <TodoList />
        </>
    );
}

export default Home;
