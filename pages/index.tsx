import { useEffect, useState } from 'react';
import Education from '../components/education/Education';
import Experience from '../components/experience/Experience';
import  Header  from '../components/header/Header';
import Present from '../components/presentation/Present';
import Projects from '../components/projects/Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setLangs } from '../slices/languageSlice';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";


export default function HomePage() {

  const appState = useSelector((state:RootState)=>state);
  const dispatch = useDispatch();

  const [showToTopBtn, setShowToTopBtn] = useState(false);
  const [showLoader, setShowLoader] = useState(false);


  const greetCollection = ['доброе утро','доброго дня','добрый вечер','доброй ночи'];
  
  const [time, setTime] = useState(new Date().getHours());

useEffect(()=>{
  Aos.init({duration:500});

  document.addEventListener('scroll', ()=>{
    if(window.pageYOffset>1000){      
      setShowToTopBtn(true);
    }else{
      setShowToTopBtn(false);
    }
  });


  dispatch(setLangs(localStorage.getItem('currentLang')!==null
    ? localStorage.getItem('currentLang')
    : 'ua'
    ));
    setTimeout(()=>{
        setShowLoader(true);  
    },3500)
  
},[])

const scrollToTop = ()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  })
}




return (
  
  showLoader

? <> 
  <Header/>
  <Present/>
  <Projects/>
  <Education/>
  <Experience/>
  <span 
    className='toTopBtn'
    style={{
      display: showToTopBtn ? 'flex' : 'none'
    }}
    onClick={()=>{
      scrollToTop();
    }}
  >
    <FontAwesomeIcon
      icon={faArrowUp}
    />
  </span>
  </>
: <div className='loader'>
    <div>
        <i>Слава Україні!</i>   
        <span></span>
        <h3>
        
        {  
          time < 12 && time >= 4 ? greetCollection[0] : null
        }

        {  
          time > 12 && time < 16 ? greetCollection[1] : null
        }

        {  
          time > 16 && time < 22 ? greetCollection[2] : null
        }

        {  
          time > 22  ? greetCollection[3] : null
        }

        {  
          time < 4  ? greetCollection[3] : null
        }
        
        </h3>




 

  
        
    </div>
</div>
    
   );



}