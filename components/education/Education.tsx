import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './education.module.scss';

export default function Education(){

    const appState = useSelector((state:RootState)=>state);
    const [lang,setLang] = useState(appState.langs.currentLang===''
        ? 'ua'
        : appState.langs.currentLang
    );
    
    const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];
    const vals = _getKeyValue_(lang);
    const blocks = vals(appState.langs.langs);

    useEffect(()=>{
        
        setLang(appState.langs.currentLang)
    },[appState.langs.currentLang]);

    

    return (
        <div 
            className={classes.education} 
            id="educationBlock" 
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
        >
            <h2 className="title">{blocks.education.title}</h2>
            <div className="container">
                <ul 
                    className={classes.educationList}
                >
                    {blocks.education.educationTypes.map((item:any)=>{
                        return <li key={item.title}>
                            <h3>{item.title}</h3>
                            {item.place.map((place:any)=>{
                                return <div key={place.descr}>
                                    <span>{place.name}</span><br/>
                                    <small>{place.descr}</small><br/>
                                    <small>{place.year}</small><br/>
                                </div>
                                
                            })}         
                    </li>
                    })}

                </ul>
            </div>
        </div>
    )
}