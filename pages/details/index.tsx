import classes from  './details.module.scss';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useEffect, useState } from 'react';



export default function Detail(){
    
    
    const appState=useSelector((state:RootState)=>state);

    const [lang,setLang] = useState(
        appState.langs.currentLang===''
            ? 'ua'
            : appState.langs.currentLang
    ) as any;

    const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];
    const vals = _getKeyValue_(lang);
    const blocks = vals(appState.langs.langs);
    const [detailsFromLocStor, setDetailsFromLocStor] = useState({
        used:[],
        description:'',
        gitLink:'',
        webLink:'',
        name:''
    });
    
    
    useEffect(()=>{

        setLang(
            localStorage.getItem('currentLang')===null 
            ? 'ua'
            : localStorage.getItem('currentLang')
        )
        




        // setLang(appState.langs.currentLang);
        let details:any = localStorage.getItem('details');

        if(details!==null){
            setDetailsFromLocStor(JSON.parse(details));
        }     

    },[appState.langs.currentLang])

    
    
     
    return (
        <div className={classes.details}>
            <div className={classes.detailsHeader}>
                <div className="container">
                    <nav> 
                        <Link href={'/'} >
                            <a>
                            {
                                blocks.details.backBtn
                            }
                            </a> 
                        </Link> 
                    </nav>
                    
                </div> 
            </div>

            
            <div className={classes.detailsBody}>
                <div className="container">   
                    <div className={classes.detailsBodyRowTop}>
                        <h3>{detailsFromLocStor.name}</h3>
                    <ul className={classes.usedStackList}>
                        {detailsFromLocStor.used.map((item)=>{   
                                                     
                            return <li 
                            key={item}
                            style={{backgroundImage:`url(${item})`}}
                            ></li>
                        }
                        ) 
                     }  
                    </ul>   
                    </div>

                    <div className={classes.detailsBodyRowBottom}>
                        <p>{detailsFromLocStor.description}</p>
                        <span>
                            <a 
                                target='_blank'
                                rel="noreferrer" 
                                href={appState.details.details.webLink}
                            >
                                {
                                    blocks.details.web
                                }
                            </a>
                            <a  
                                target='_blank'
                                rel="noreferrer"
                                href={appState.details.details.gitLink}
                            >
                                {
                                    blocks.details.git
                                }</a>
                        </span>
                    </div>
                    
                </div>
            </div> 
        </div>
        
    )
}