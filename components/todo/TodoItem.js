import { useState } from 'react';
import classes from './TodoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

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

    return (
        <article className={classes.todoItem} data-id={id}>
            <div
                className={`${classes.circle} ${taskDone ? classes.taskDone : ''}`}
                onClick={setTaskDoneHandler}>
                <span className={classes.checkmark}></span>
            </div>
            <h1 className={classes.todoContent}>{content}</h1>
            <div className={classes.starIconDiv} onClick={setMarkAsImportantHandler}>
                <FontAwesomeIcon icon={starChecked ? faStar : farStar} />
            </div>
        </article>
    );
}

export default TodoItem;
