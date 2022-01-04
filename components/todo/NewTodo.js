import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import classes from './NewTodo.module.css';

function NewTodo() {
    const [todo, setTodo] = useState('');
    const [inputOnFocus, setInputOnFocus] = useState(false);

    const inputChangeHandler = ev => {
        console.log(ev.target.value);
        setTodo(ev.target.value);
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.inputWrapper}>
                {!inputOnFocus ? (
                    <FontAwesomeIcon icon={faPlus} className={classes.icon} />
                ) : (
                    <FontAwesomeIcon icon={faCircle} className={classes.icon} />
                )}
                <input
                    type='text'
                    name='todo'
                    className={`${classes.input} ${inputOnFocus ? classes.focused : null}`}
                    placeholder='Add a task'
                    onChange={inputChangeHandler}
                    onFocus={ev => setInputOnFocus(true)}
                />
            </div>
            {inputOnFocus && (
                <button
                    disabled={!todo.trim()}
                    className={classes.addBtn}
                    onClick={ev => alert('Clicked')}>
                    Add
                </button>
            )}
        </div>
    );
}

export default NewTodo;
