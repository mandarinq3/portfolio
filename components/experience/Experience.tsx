import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './experience.module.scss';

export default function Experience(){

    const appState = useSelector((state:RootState)=>state);
    const [lang,setLang] = useState(appState.langs.currentLang===''
    ? 'ua'
    : appState.langs.currentLang);
    const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];
    const vals = _getKeyValue_(lang);
    const blocks = vals(appState.langs.langs);

    useEffect(()=>{
        setLang(appState.langs.currentLang)
    },[appState.langs.currentLang])

    
    



    return (
        <div 
            className={classes.experience} 
            id='experienceBlock'
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            >
            <h2 className="title">
                {blocks.experience.title}
            </h2>
            <div className="container">
            
                <ul 
                className={classes.experienceList}
                >
                    {blocks.experience.place.map((item:any)=>{
                        return <li key={item.name}>
                                    <span>{item.name}</span>
                                    <small>{item.position}</small>
                                    <small>{item.period}</small>
                                </li>
                    })}
                </ul>
            </div>
        </div>
    )
}