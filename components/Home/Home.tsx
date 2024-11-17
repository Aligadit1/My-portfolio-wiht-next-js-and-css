"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  useEffect(()=>{
    const initAOS = async()=>{
      await import('aos')
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom",
      })
    }
    initAOS()
  },[])
  return (
    <div  className='home'>
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Reviews />
      <Contact />
      
    </div>
  )
}

export default Home