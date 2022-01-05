import connectDb from '../../../lib/connectDb';
import Todo from '../../../models/Todo';

export default async function (req, res) {
    if (req.method === 'GET') {
        try {
            await connectDb();
            const todos = await Todo.find({});
            res.status(200).json({ message: 'SUCCESS', todos: todos });
        } catch (err) {}
    } else {
        res.status(400).json({ message: 'Expected GET request' });
    }
}
