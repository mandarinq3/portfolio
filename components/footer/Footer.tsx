import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import classes from './footer.module.scss';



export default function Footer(){

    const appState = useSelector((state:RootState)=>state);
    const [lang,setLang] = useState(appState.langs.currentLang===''
    ? 'ua'
    : appState.langs.currentLang);
    const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];
    const vals = _getKeyValue_(lang);
    const blocks = vals(appState.langs.langs);

    return(
        <div 
            className={classes.footer}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-once={true}
        >
            <div className="container">
                <p>
               {
                blocks.footer.content
               }
                </p>
            </div>
        </div>
    )
}