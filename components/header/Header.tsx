import classes from './header.module.scss';


export default function Header() {
    return (
            <header className={classes.header}>
                <div className="container">
                    <div className={classes.headerRow}>
                    <div className={classes.headerCol}>
                            <span className={classes.headerLogo}>
                                JB
                            </span>
                        </div>
                        
                        <div className={classes.headerCol}>
                            <nav className={classes.headerNav}>
                                <a href="#projectsBlock">projects</a>
                                <a href="#aboutBlock">about</a>
                                <a href="#educationBlock">education</a>
                                <a href="#experienceBlock">experience</a>
                            </nav>
                        </div>

                        <div className={classes.headerCol}>
                            <ul className={classes.headerLangList}>
                                <li key={'en'} className={classes.active}>en</li>
                                <li key={'ua'} >ua</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
    );
  }