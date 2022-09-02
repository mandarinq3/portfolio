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


export default function HomePage() {

  const appState = useSelector((state:RootState)=>state);
  const dispatch = useDispatch();

  const [showToTopBtn, setShowToTopBtn] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  
  
  


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
      
    },1700)
  
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
  >⬆</span>
  </>
: <div className='loader'>
    <div> 
      <i>Слава Україні!</i>   
      <span></span>
    </div>
</div>
    
   );



}