import connectDb from '../../../lib/connectDb';
import Todo from '../../../models/Todo';

export default async function Handler(req, res) {
    try {
        if (req.method === 'PATCH') {
            await connectDb();
            const updatedTodo = await Todo.findByIdAndUpdate(
                req.query.id,
                { $set: req.body },
                { new: true },
            );
            res.status(201).json({ message: 'Todo updated', updatedTodo });
        } else if (req.method === 'DELETE') {
            await connectDb();
            const deletedTodo = await Todo.findByIdAndDelete(req.query.id);
            res.status(201).json({ message: 'Todo deleted' });
        } else {
            res.status(400).json({ message: 'Invalid HTTP method' });
            throw new Error('Invalid HTTP method');
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
}
