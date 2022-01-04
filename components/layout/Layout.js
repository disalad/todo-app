import { useState } from 'react';
import SideBar from './SideBar';
import classes from './Layout.module.css';

function Layout({ children }) {
    const [sideBarHidden, setSideBarHidden] = useState(false);

    return (
        <main className={classes.main}>
            {!sideBarHidden && <SideBar onClickHandler={ev => setSideBarHidden(true)} />}
            {children}
        </main>
    );
}

export default Layout;
