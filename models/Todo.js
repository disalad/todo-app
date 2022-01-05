import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Please provide a name for this task.'],
    },
    important: {
        type: Boolean,
        default: false,
    },
    task_done: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
