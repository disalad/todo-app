import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import {
    faStar as farStar,
    faCalendar as farCalendarDay,
} from '@fortawesome/free-regular-svg-icons';
import classes from './SideBar.module.css';

function SideBar(props) {
    return (
        <aside className={classes.sidebar}>
            <section className={classes.toggleSideBarSect}>
                <div className={classes.toggleSideBar} onClick={props.onClickHandler}>
                    <div className={classes.bars}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
            <ul className={classes.ul}>
                <li className={classes.button}>
                    <Link href='/'>
                        <div className={classes.buttonInner}>
                            <FontAwesomeIcon icon={farCalendarDay} />
                            <span className={classes.title}>Todos</span>
                            <span className={classes.count}>1</span>
                        </div>
                    </Link>
                </li>
                <li className={classes.button}>
                    <Link href='/important'>
                        <div className={classes.buttonInner}>
                            <FontAwesomeIcon icon={farStar} />
                            <span className={classes.title}>Important</span>
                            <span className={classes.count}>1</span>
                        </div>
                    </Link>
                </li>
                <li className={classes.button}>
                    <Link href='/pendings'>
                        <div className={classes.buttonInner}>
                            <FontAwesomeIcon icon={faTasks} />
                            <span className={classes.title}>Pending</span>
                            <span className={classes.count}>1</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
