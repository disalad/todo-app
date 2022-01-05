import React from 'react';
import connectDb from '../lib/connectDb';
import Todo from '../models/Todo';
import NewTodo from '../components/todo/NewTodo';
import TodoList from '../components/todo/TodoList';
import axios from 'axios';

function Home({ todos }) {
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
            <TodoList todos={todos} />
        </>
    );
}

export async function getServerSideProps() {
    await connectDb();
    const todos = await Todo.find({});
    return {
        props: {
            todos: todos.map(todo => ({
                _id: todo._id.toString(),
                content: todo.content,
                important: todo.important,
                task_done: todo.task_done,
            })),
        },
    };
}

export default Home;
