import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetails } from '../../slices/detailsSlice';
import { RootState } from '../../store/store';
import classes from './projects.module.scss';

export default function Projects(){
    const appState = useSelector((state:RootState)=>state);
    const dispatch = useDispatch();
    const [lang,setLang] = useState(appState.langs.currentLang===''
    ? 'ua'
    : appState.langs.currentLang);
    const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];
    const vals = _getKeyValue_(lang);
    const blocks = vals(appState.langs.langs);


    useEffect(()=>{
        setLang(appState.langs.currentLang)
    },[appState.langs.currentLang])


    interface IProjects{
        id:number;
        icon:string;
        name:string;
        detailsLink:string;
        gitLink:string;
        webLink:string;
        used:string[]; 
        description:string;
    }
    
     const projects:IProjects[] = [
    {
        id:0,
        icon:'../assets/project-icons/comic.png',
        name: lang==='en' ? 'comics (typescript)' : 'комікси (typescript)' ,
        detailsLink:'/details',
        gitLink:'https://github.com/mandarinq3/comics-typescript.git',
        webLink:'https://comics-9c403.web.app',
        used:[
            '../assets/stack-icons/sass.svg',
            '../assets/stack-icons/telegram.svg',
            '../assets/stack-icons/firebase.svg',
            '../assets/stack-icons/redux.svg',
            '../assets/stack-icons/github.svg',
            '../assets/stack-icons/rxjs.svg',
            '../assets/stack-icons/typescript.svg',
            ],
        description:lang==='en'
        ? `My next project is written with the help of the library React, in which I practiced the language Typescript. This project is a corrected version of my first project written by the language Javascript-(reference to the old version: https://mandarinq3.github.io). Since I’m still not familiar with Typescript, in some components I have not typed data, but simply typed 'any'. Also did not use generic, because there was no suitable case for its application. Most likely, the case was, but I did not notice it)))`
        : `Мій наступний проект, написаний за допомогою бібліотеки React, в якій я практикував мову TypeScript. Цей проект є виправленим варіантом мого першого проекту, написаного мовою Javascript-(посилання на стару версію: https://mandarinq3.github.io). Оскільки я
        нещодавно почав вивчати мову TypeScript, то в деяких компонентах я не типізував дані, 
        лише призначав тип "any". Також не використовув "generic", оскільки не існувало відповідного кейсу для його застосування. Iмовірніше, відповідний кейс був, але я цього не помітив)).`
    },
    {
        id:1,
        icon:'../assets/project-icons/cafe.png',
        name: lang==='en' ? 'cafe' : 'кафе',
        detailsLink:'/',
        gitLink:'/',
        webLink:'https://my-cafe-project-fa7ee.web.app/',
        used:[
            '../assets/stack-icons/sass.svg',
            '../assets/stack-icons/bootstrap.svg',
            '../assets/stack-icons/telegram.svg',
            '../assets/stack-icons/firebase.svg',
            '../assets/stack-icons/redux.svg',
            '../assets/stack-icons/github.svg',
            '../assets/stack-icons/javascript.svg',

            ],
        description:lang==='en' 
        ? `
        The project has been done with react, where I used the preprocessor SCSS, but only a tiny part of its capabilities, such as variables and attachments. I have used the Bootstrap library, its components: buttons, forms, modal windows, and a grid of this library, as well. I used the React-Hook-Form to validate the form. For form entry fields, it is good to use form masks. For this purpose, there are different plugins, but I didn't install any of them because in the project there was only one field that requires a mask.  In my opinion, it was not appropriate to increase the size of the project for a single field's sake. For the form of sending messages, there was connected a Telegram bot, which forwards user's messages to my Telegram. To store data and work with it, I used the services of Firebase.`
        : `Цей проект був написаний на React. У ньому я використав препроцесор Scss, але лише малу частину його можливостей, таких як змінні і вкладеність. Так само в проекті була використана бібліотека Bootstrap, його компоненти : кнопки, форми, модальні вікна, а так само сітка цієї бібліотеки. Для валидации форми я використав плагін React Hook Form. Для полів введення форми треба використати маски. Для цього існують різні плагіни, але я не встановлював їх, оскільки на моєму проекті використовується лише одно поле яке потребує маски і я визнав безрозсудним збільшення розміру проекту заради одного поля. Пробуватиму писати свої маски для подальшого використання на інших проектах, але на момент написання резюме я ще незнаю як це зробити.

        До форми відправки повідомлення був підключений Telegram бот, який пересилає повідомлення користувачів в Telegram.
        Для роботи з даними і їх зберігання використав Firebase.`,
    },
    {
        id:2,
        icon:'../assets/project-icons/exchange.png',
        name:lang==='en' ? 'exchange' : 'конвертер валют ',
        detailsLink:'/details',
        gitLink:'https://github.com/mandarinq3/exchange.git',
        webLink:'https://exchange-bae31.web.app',
        used:[
            '../assets/stack-icons/react.svg',
            '../assets/stack-icons/redux.svg',
            '../assets/stack-icons/github.svg',
            '../assets/stack-icons/rxjs.svg',
            ],
        description: lang==='en'
        ? `A currency converter that receives currency quotes from the open API of some international exchanger. Most likely, if you visit the web page of the project, you will not see the data due to the expired token. If necessary, I can refresh it.`
        : `Конвертер валют, який отримує котирування валют з відкритого API якогось міжнародного обмінника. Імовірніше, якщо ви відвідаєте веб сторінку проекту, ви не побачите дані через простроченого токена. За потреби можу оновити його.`
        
        
        
    },
    {
        id:3,
        icon:'../assets/project-icons/book.png',
        name: lang==='en' ? 'comics (javascript)' :'комікси (javascript)',
        detailsLink:'/',
        gitLink:'https://github.com/mandarinq3/mandarinq3.github.io.git',
        webLink:'https://mandarinq3.github.io',
        used:[
            '../assets/stack-icons/react.svg',
            '../assets/stack-icons/redux.svg',
            '../assets/stack-icons/firebase.svg',
            '../assets/stack-icons/github.svg',
            '../assets/stack-icons/javascript.svg',
            ],
        description: lang==='en' 
        ?   `I started to do this project using pure JavaScript mixed with Jquery. Then I began learning React library and integrating it step by step into the project. React significantly increased the speed of my code writing, making it easier to control the logic and chain of functions working process. In the beginning, components were getting and passing data via Context. As the amount of the elements in my project has been growing, I was finding it harder to keep their work under control. So I began searching for a solution to replace React Context. Finally, I found Redux. With Redux, as all states of your project are stored in one place, in storage, the project has become easier to scale. Then I have faced work with forms, getting and keeping data about users, their authorization, and storing comments. And it was a good time to pause the project and to take time to learn more about working with forms in React, and about HTTP requests such as POST, GET, PUT, DELETE, and databases. To work with form validation, I found the React-hook-form plugin, and for storing data and user's authorization  I found Firebase. 
        At the same time, I have been learning RxJs, Bootstrap, Scss, Webpack, and Git. This project doesn't include the technologies I've learned. However, I'm going to implement them in my future projects. I'm always trying to learn something new. Sometimes I use Google to find the information that will help me to fix problems. Sometimes  I watch video courses on YouTube, but I figured out that the best place to search for information is official documentation.`
        : `Спочатку проект починав писати на чистому JavaScript і Jquery. Після вивчення бібліотеки React, проект був поступово перенесений на нього. Реакт значно прискорив роботу над проектом і роботу самого веб-додатку. У проекті, всі стани компонентів передавалися через Context. У міру додавання компонентів стало важко контролювати поведінку стану кожного окремого компонента. Я почав шукати рішення, дізнався про Redux і почав вивчати його. Тепер завдяки Redux, коли всі соювання web додатки зберігаються в одному сховищі проект стало легше масштабувати. Далі настала черга роботи з формами, зберігання даних про користувача, його авторизація і зберігання коментарів. Писання проекту довелося призупинити на довгий час. Я почав шукати технології для вирішення цих завдань. Для валідації форм знайшов рішення - React-hook-form, а для зберігання даних і для авторизації користувачів Firebase. Паралельно вивчав на базовому рівні RxJs, Bootstrap, Scss, Webpack, Git. На даний момент, на моєму розгляді не використані ці технології, але я планую поступово впроваджувати їх в майбутні і в вже існуючі проекти.

        Я перебуваю в постійному пошуку і вивченні нових або раніше невідомих мені бібліотек, плагінів. Частково інформацію отримую з відеокурсів на Ютубі або на різних сайтах, ну і закріплюю все це більш якісною і правдивою інформацією з офіційної документації.`,
    }
    ]

    const detailsHandler = (e:any)=>{
        e.preventDefault();
        dispatch(setDetails(JSON.parse(e.target.dataset.details)));
        localStorage.setItem('details',e.target.dataset.details);
        Router.push('/details');        
    }

  
    return (
        <div 
            className={classes.projects} 
            id='projectsBlock' 
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
        >
            <h2 className="title">{
                blocks.projects.title
            }</h2>
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

                        <a     
                            className={classes.btn}
                            data-details={JSON.stringify(item)} 
                            onClick={(e)=>{
                                detailsHandler(e)
                            }}
                        >
                            {
                            blocks.projects.links.details
                        }
                        </a>
                        
                        <a rel="noopener" className={classes.btn} href={item.gitLink}>
                        {
                            blocks.projects.links.git
                        }
                        </a>
                        <a rel="noopener" className={classes.btn} href={item.webLink}>
                        {
                            blocks.projects.links.web
                        }
                        </a>
                    </li>
                    })}
                </ul>
            </div>
        </div>
    )
}