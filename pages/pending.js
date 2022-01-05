import connectDb from '../lib/connectDb';
import Todo from '../models/Todo';
import TodoList from '../components/todo/TodoList';
import Head from 'next/head';
import { Fragment } from 'react';

function PendingTasks({ todos }) {
    return (
        <Fragment>
            <Head>
                <title>Todos || Pending</title>
                <meta name='description' content='Todos || Manage your tasks easily' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <TodoList todos={todos} />
        </Fragment>
    );
}

export async function getServerSideProps() {
    await connectDb();
    const todos = await Todo.find({ task_done: false });
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

export default PendingTasks;
