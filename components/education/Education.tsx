import classes from './education.module.scss';

export default function Education(){
    return (
        <div 
            className={classes.education} 
            id="educationBlock" 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-once={true}
        >
            <h2 className="title">education</h2>
            <div className="container">
                <ul 
                    className={classes.educationList}
                >
                    <li key={"x"}>
                        <h3>Higer Education</h3>
                        <span>Kiev National Linguistic University</span>
                        <small>master`&#39;`s degree on speciality  <q>English and literature</q> </small>
                        <small>2012-2017</small>
                    </li>
                    <li key={"y"}>
                        <h3>courses</h3>
                        <span>IT Education Academy (ITEA)</span>
                        <small>Javascript base cours</small>
                        <small>2020</small>
                        <small>Javascript advanced cours</small>
                        <small>2020</small>
                        <small>React js cours</small>
                        <small>2020</small>
                    </li>
                </ul>
            </div>
        </div>
    )
}