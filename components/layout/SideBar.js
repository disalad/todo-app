import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import {
    faStar as farStar,
    faCalendar as farCalendarDay,
} from '@fortawesome/free-regular-svg-icons';
import classes from './SideBar.module.css';
import { usePageTitle } from '../hooks/usepagetitle';
import { useRouter } from 'next/router';

function SideBar(props) {
    const router = useRouter();
    const pageTitle = usePageTitle(router.pathname);
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
                <li className={`${classes.button} ${pageTitle === 'Todo' ? classes.active : ''}`}>
                    <Link href='/' passHref>
                        <div className={classes.buttonInner}>
                            <FontAwesomeIcon icon={farCalendarDay} />
                            <span className={classes.title}>Todos</span>
                        </div>
                    </Link>
                </li>
                <li
                    className={`${classes.button} ${
                        pageTitle === 'Important' ? classes.active : ''
                    }`}>
                    <Link href='/important' passHref>
                        <div className={classes.buttonInner}>
                            <FontAwesomeIcon icon={farStar} />
                            <span className={classes.title}>Important</span>
                        </div>
                    </Link>
                </li>
                <li
                    className={`${classes.button} ${
                        pageTitle === 'Pending' ? classes.active : ''
                    }`}>
                    <Link href='/pending' passHref>
                        <div className={classes.buttonInner}>
                            <FontAwesomeIcon icon={faTasks} />
                            <span className={classes.title}>Pending</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
