import { useState } from 'react';
import classes from './TodoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';

function TodoItem({ content, id }) {
    const [starChecked, setStarChecked] = useState(false);
    const [taskDone, setTaskDone] = useState(false);

    const setMarkAsImportantHandler = ev => {
        const taskId = ev.currentTarget.parentElement.getAttribute('data-id');
        console.warn(taskId);
        setStarChecked(prev => !prev);
    };

    const setTaskDoneHandler = ev => {
        const taskId = ev.currentTarget.parentElement.getAttribute('data-id');
        console.warn('Marked as done: ', taskId);
        setTaskDone(prev => !prev);
    };

    const deleteTodoHandler = async ev => {
        const todoElement = ev.currentTarget.parentElement.parentElement;
        const taskId = todoElement.getAttribute('data-id');
        try {
            const response = await axios({
                method: 'DELETE',
                url: `/api/todo/${taskId}`,
            });
            todoElement.remove();
            console.log('Task deleted: ', taskId);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <article className={classes.todoItem} data-id={id}>
            <div
                className={`${classes.circle} ${taskDone ? classes.taskDone : ''}`}
                onClick={setTaskDoneHandler}>
                <span className={classes.checkmark}></span>
            </div>
            <h1 className={classes.todoContent}>{content}</h1>
            <div className={classes.starIconDiv}>
                <FontAwesomeIcon
                    icon={starChecked ? faStar : farStar}
                    onClick={setMarkAsImportantHandler}
                />
                <FontAwesomeIcon
                    icon={farTrashAlt}
                    className={classes.trashIcon}
                    onClick={deleteTodoHandler}
                />
            </div>
            {/* <div className={classes.starIconDiv}> */}
            {/* </div> */}
        </article>
    );
}

export default TodoItem;
