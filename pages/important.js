import connectDb from '../lib/connectDb';
import Todo from '../models/Todo';
import TodoList from '../components/todo/TodoList';

function ImportantTasks({ todos }) {
    return <TodoList todos={todos} />;
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
