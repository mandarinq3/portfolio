import classes from './experience.module.scss';

export default function Experience(){
    return (
        <div 
            className={classes.experience} 
            id='experienceBlock'
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-once={true}
            >
            <h2 className="title">work experience</h2>
            <div className="container">
            
                <ul 
                className={classes.experienceList}
                >
                    <li key={'a'}>
                        <span>Freelance</span>
                        <small>English tutor</small>
                        <small>2017-2018</small>
                    </li>
                    <li key={'b'}>
                        <span>KidIT/ IT-school for kids</span>
                        <small>teacher</small>
                        <small>2018-2019</small>                      
                    </li>
                    <li key={'c'}>
                        <span>IT Family HUB/ IT-school for kids</span>
                        <small>teacher</small>
                        <small>2019-2021</small>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}