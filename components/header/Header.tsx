import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLangs } from '../../slices/languageSlice';
import { RootState } from '../../store/store';
import classes from './header.module.scss';


export default function Header() {

    const appState = useSelector((state:RootState)=>state);
    const dispatch  = useDispatch();
    
    const [lang,setLang] = useState(
        appState.langs.currentLang===''
        ? 'ua'
        : appState.langs.currentLang
    ) as any;     

    const [showContacts, setShowContacts] =  useState(false);
    const [projectsBlock,setProjectsBlock] = useState() as any;
    const [educationBlock,setEducationBlock] = useState() as any;
    const [experienceBlock,setExperienceBlock] = useState() as any;

    

    useEffect(()=>{
        if(document!==undefined){
            setProjectsBlock(document.querySelector('#projectsBlock')) 
            setEducationBlock(document.querySelector('#educationBlock'))
            setExperienceBlock(document.querySelector('#experienceBlock'))
        }

    },[])


const scrollToBlok = (y:number)=>{
    window.scrollTo({
        top: y-10,
        behavior: "smooth"
    })

}

const changeLang = (lang:string)=>{    
    dispatch(setLangs(lang));
    localStorage.setItem('currentLang',lang);
}


const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];
const vals = _getKeyValue_(lang);
const blocks = vals(appState.langs.langs);


useEffect(()=>{    
    setLang(()=>{
        if(localStorage.getItem('currentLang')!==null){
            return localStorage.getItem('currentLang')
        }else{
            return 'ua'
        }
    }        
        )
},[])

    return (
            <header className={classes.header}>
                <div className="container">
                    <div className={classes.headerRow}>
                    <div className={classes.headerCol}>
                            <span className={classes.headerLogo}>
                                JB
                            </span>
                        </div>
                        
                        <div className={classes.headerCol}>
                            <nav className={classes.headerNav}>
                                {/* ------------------------ */}
                                <span 
                                    onClick={()=>{
                                        scrollToBlok(projectsBlock.offsetTop);
                                    }}
                                >{
                                        blocks.header.nav.projects
                                 
                                    
                                }</span>
                                {/* ------------------------ */}
                                <span 
                                    onClick={()=>{
                                        scrollToBlok(educationBlock.offsetTop);
                                    }}
                                >
                                {
                                    blocks.header.nav.education
                                }
                                </span>
                                {/* ------------------------ */}
                                <span 
                                    onClick={()=>{
                                        scrollToBlok(experienceBlock.offsetTop);
                                    }}
                                >
                                {
                                    blocks.header.nav.experience
                                }
                                </span>
                                {/* ------------------------ */}
                            </nav>
                        </div>
                        
                        <div className={classes.headerCol}>
                            <ul className={classes.headerLangList}>
                                <li 
                                    key={'en'} 
                                    style={{
                                    textDecoration:lang ==='en' ? 'underline' : 'none'
                                    }}
                                    onClick={()=>{
                                        setLang('en');
                                        changeLang('en');
                                    }}
                                >
                                    {
                                    blocks.header.langs.en
                                    }
                                </li>
                                <li 
                                    key={'ua'} 
                                    style={{
                                    textDecoration:lang ==='ua' ? 'underline' : 'none'
                                    }}
                                    onClick={()=>{
                                        setLang('ua');
                                        changeLang('ua');
                                    }}
                                >
                                    {
                                    blocks.header.langs.ua
                                    }
                                </li>
                            </ul>
                        </div>

                        <div className={classes.headerCol}>
                            <small 
                                style={{
                                    background: showContacts ? 'white' : 'none',
                                    color: showContacts ? '#588584' : 'white',
                                    boxShadow: showContacts ? '0px 0px 5px white' : 'none',
                                }}
                                onClick={()=>{
                                setShowContacts((prev)=>{
                                   return !prev
                                })
                            }}></small>
                            <ul 
                                className={classes.contactsList}
                                style={{
                                    display:showContacts ? 'flex':'none',
                                }}
                            >
                                <li><a href="tel:+380933796623">+380 (93) 379-66-23</a></li>
                                <li><a href="mailto:dzumanjee@gmail.com">dzumanjee@gmail.com</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </header>
    );
  }