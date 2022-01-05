import connectDb from '../lib/connectDb';
import Todo from '../models/Todo';
import TodoList from '../components/todo/TodoList';
import Head from 'next/head';
import { Fragment } from 'react';

function ImportantTasks({ todos }) {
    return (
        <Fragment>
            <Head>
                <title>Todos || Important</title>
                <meta name='description' content='Todos || Manage your tasks easily' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <TodoList todos={todos} />
        </Fragment>
    );
}

export async function getServerSideProps() {
    await connectDb();
    const todos = await Todo.find({ important: true });
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

export default ImportantTasks;
