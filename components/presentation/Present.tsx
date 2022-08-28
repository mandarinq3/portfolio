import { useEffect, useState } from 'react';
import internal from 'stream';
import classes from './present.module.scss';
// import Aos from 'aos';
// import 'aos/dist/aos.css';



export default function Present(){


    interface ILangs{
        id:string;
        langFlag:string;
        langLevel:string;
    }

    interface IStack{
        id:string;
        icon:string;
        level:number;
        name:string;
    }


 const langs:ILangs[] = [
    {   
        id:'uk-flag',
        langFlag:'../assets/flags/uk-flag.png',
        langLevel:'b2',
    },
    {
        id:'ua-flag',
        langFlag:'../assets/flags/ua-flag.png',
        langLevel:'a2',
    },
    {
        id:'tr-flag',
        langFlag:'../assets/flags/tr-flag.png',
        langLevel:'a2',
    }
]

const stacks:IStack[] = [
    {   
        id:'html',
        icon:'../assets/stack-icons/html.svg',
        level:60,
        name:'html'
    },
    {   
        id:'css',
        icon:'../assets/stack-icons/css.svg',
        level:60,
        name:'css'
    },
    {   
        id:'javascript',
        icon:'../assets/stack-icons/javascript.svg',
        level:55,
        name:'javascript'
    },
    {   
        id:'react',
        icon:'../assets/stack-icons/react.svg',
        level:65,
        name:'react'
    },
    {   
        id:'redux',
        icon:'../assets/stack-icons/redux.svg',
        level:45,
        name:'redux'
    },
    {   
        id:'nextjs',
        icon:'../assets/stack-icons/nextjs.svg',
        level:20,
        name:'nextjs'
    },
    {   
        id:'typescript',
        icon:'../assets/stack-icons/typescript.svg',
        level:25,
        name:'typescript'
    },
    {   
        id:'rxjs',
        icon:'../assets/stack-icons/rxjs.svg',
        level:25,
        name:'rxjs'
    },
    {   
        id:'bootstrap',
        icon:'../assets/stack-icons/bootstrap.svg',
        level:25,
        name:'bootstrap'
    },
    
    {   
        id:'github',
        icon:'../assets/stack-icons/github.svg',
        level:25,
        name:'github'
    },
    {   
        id:'sass',
        icon:'../assets/stack-icons/sass.svg',
        level:40,
        name:'sass'
    },
    {   
        id:'webpack',
        icon:'../assets/stack-icons/webpack.svg',
        level:15,
        name:'webpack'
    },
    {   
        id:'jquery',
        icon:'../assets/stack-icons/jquery.svg',
        level:20,
        name:'jquery'
    },
]

    return (
        <div className={classes.present}>
            <div className="container">
                <div className={classes.presentRow}>
                    <div className={classes.presentColLeft}>
                        <div className={classes.top}>
                            <div className={classes.topLeft}>
                                <div 
                                    className={classes.imgHolder}
                                    style={{backgroundImage:'url(../assets/cv-photo.jpg)'}} 
                                    
                                >

                                </div>
                            </div>
                            <div className={classes.topRight}>
                                <ul className={classes.presentLangList}>
                                    {langs.map((item)=>{
                                        return <li key={item.id}>
                                        <span className={classes.flagHolder} style={{backgroundImage:`url(${item.langFlag}`}}></span>
                                        <span className={classes.levelHolder}>{item.langLevel}</span>
                                    </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            Junior Frontend Developer
                        </div>
                    </div>
                    <div className={classes.presentColRight}>
                        <ul className={classes.iconList}>
                            

                            {stacks.map((item)=>{
                                return <li key={item.id}>
                                    <span 
                                        className={classes.iconHolder} 
                                        style={{backgroundImage:`url(${item.icon})`}}
                                    >
                                    </span>
                                    <span className={classes.nameHolder}>{item.name}</span>

                                    <span className={classes.levelHolder}>
                                        <span 
                                            className={classes.levelLineHolder}
                                            style={{
                                                width:`${item.level}%`,
                                            }}
                                            >

                                        <span
                                            className={classes.levelLine}
                                            style={{
                                                backgroundColor: item.level < 30 
                                                ? 'rgb(243, 125, 0)' 
                                                : 'rgb(154, 250, 8)'
                                            }}
                                            ></span>

                                        </span>
                                    </span>
                            </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}