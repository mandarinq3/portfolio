import classes from './about.module.scss';

export default function About(){
    return (
        <div className={classes.about} id='aboutBlock'>
            <h2 className='title'>About</h2>
            <div className="container">
                <p 
                    className={classes.aboutText} 
                    >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, neque. Ex, blanditiis? Asperiores saepe error mollitia dignissimos minus nihil laborum veritatis delectus in vero molestias ea eos unde reiciendis, quo ipsa ducimus. Obcaecati nemo modi, nobis quidem aliquam asperiores vitae quaerat amet aut placeat repellat ipsam inventore sapiente ad fugiat dicta minima quibusdam incidunt est fuga veritatis pariatur alias? Deleniti libero alias quasi voluptas optio hic voluptatibus fugiat laudantium totam, velit fuga dicta ex placeat enim, illum minima sequi cum ullam! Impedit quae, distinctio cumque unde aliquam beatae, placeat sequi reiciendis dolore nobis magnam odio hic et veniam sunt error.
                </p>
            </div>
        </div>
    )
}