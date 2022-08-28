import classes from './projects.module.scss';

export default function Projects(){

    interface IProjects{
        id:number;
        icon:string;
        name:string;
        detailsLink:string;
        gitLink:string;
        webLink:string; 
    }
    
     const projects:IProjects[] = [
    {
        id:0,
        icon:'../assets/project-icons/comic.png',
        name:'comics (typescript)',
        detailsLink:'/',
        gitLink:'https://github.com/mandarinq3/comics-typescript.git',
        webLink:'https://comics-9c403.web.app',
    },
    {
        id:1,
        icon:'../assets/project-icons/cafe.png',
        name:'cafe',
        detailsLink:'/',
        gitLink:'/',
        webLink:'https://my-cafe-project-fa7ee.web.app/',
    },
    {
        id:2,
        icon:'../assets/project-icons/exchange.png',
        name:'exchange',
        detailsLink:'/',
        gitLink:'https://github.com/mandarinq3/exchange.git',
        webLink:'https://exchange-bae31.web.app',
    },
    {
        id:3,
        icon:'../assets/project-icons/book.png',
        name:'comics (javascript)',
        detailsLink:'/',
        gitLink:'https://github.com/mandarinq3/mandarinq3.github.io.git',
        webLink:'https://mandarinq3.github.io',
    }
    ]

  
    return (
        <div 
            className={classes.projects} 
            id='projectsBlock' 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-once={true}
        >
            <h2 className="title">Projects</h2>
            <div className="container">
                <ul 
                    className={classes.projectsList}
                    >
                    {projects.map((item)=>{
                        return <li key={item.id}>
                        <div 
                            className={classes.imageHolder}
                            style={{backgroundImage:`url(${item.icon})`}}
                        ></div>
                        <span className={classes.name}>{item.name}</span>
                        <a className={classes.btn} href={item.detailsLink}>details</a>
                        <a rel="noopener" className={classes.btn} href={item.gitLink}>git repos.</a>
                        <a rel="noopener" className={classes.btn} href={item.webLink}>VISIT WEB</a>
                    </li>
                    })}
                </ul>
            </div>
        </div>
    )
}