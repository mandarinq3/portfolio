import { useEffect, useState } from 'react';
import About from '../components/about/About';
import Education from '../components/education/Education';
import Experience from '../components/experience/Experience';
import  Header  from '../components/header/Header';
import Present from '../components/presentation/Present';
import Projects from '../components/projects/Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function HomePage() {

useEffect(()=>{
  Aos.init({duration:500})
},[])
  return (
    <div>
      <Header/>
      <Present/>
      <About/>
      <Projects/>
      <Education/>
      <Experience/>

     
    </div>
  );
}