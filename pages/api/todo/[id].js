import connectDb from '../../../lib/connectDb';
import Todo from '../../../models/Todo';

export default async function (req, res) {
    try {
        if (req.method === 'GET') {
        } else if (req.method === 'DELETE') {
            await connectDb();
            const deletedTodo = await Todo.findByIdAndDelete(req.query.id);
            res.status(201).json({ message: 'Todo deleted' });
        } else {
            res.status(400).json({ message: 'Invalid HTTP method' });
            throw new Error('Invalid HTTP method');
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
