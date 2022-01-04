import classes from './PageHeader.module.css';

function PageHeader({ title, showBars, onClickBars }) {
    return (
        <header className={classes.header}>
            {showBars && (
                <section className={classes.toggleSideBarSect}>
                    <div className={classes.bars} onClick={onClickBars}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
            )}
            <h3 className={`${classes.title} ${showBars ? '' : classes.showBars}`}>{title}</h3>
        </header>
    );
}

export default PageHeader;
