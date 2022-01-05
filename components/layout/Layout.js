import { useState } from 'react';
import SideBar from './SideBar';
import PageHeader from './PageHeader';
import { usePageTitle } from '../hooks/usepagetitle';
import { useRouter } from 'next/router';
import classes from './Layout.module.css';

function Layout({ children }) {
    const [sideBarHidden, setSideBarHidden] = useState(false);
    const router = useRouter();
    const pageTitle = usePageTitle(router.pathname);

    return (
        <main className={`${classes.main} ${sideBarHidden ? classes.oneItem : ''}`}>
            {!sideBarHidden && <SideBar onClickHandler={ev => setSideBarHidden(prev => !prev)} />}
            <div className={classes.childrenParent}>
                <PageHeader
                    title={pageTitle}
                    showBars={sideBarHidden ? true : false}
                    onClickBars={ev => setSideBarHidden(prev => !prev)}
                />
                {children}
            </div>
        </main>
    );
}

export default Layout;
