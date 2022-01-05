import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import classes from './NewTodo.module.css';

function NewTodo({ onSubmit }) {
    const [todo, setTodo] = useState('');
    const [inputOnFocus, setInputOnFocus] = useState(false);
    const input = useRef();

    const submitHandler = ev => {
        setInputOnFocus(false);
        input.current.value = '';
        onSubmit(todo);
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
                    className={`${classes.input} ${inputOnFocus ? classes.focused : ''}`}
                    placeholder='Add a task'
                    onChange={ev => setTodo(ev.target.value)}
                    onFocus={ev => setInputOnFocus(true)}
                    autoComplete='off'
                    ref={input}
                />
            </div>
            {inputOnFocus && (
                <button disabled={!todo.trim()} className={classes.addBtn} onClick={submitHandler}>
                    Add
                </button>
            )}
        </div>
    );
}

export default NewTodo;
