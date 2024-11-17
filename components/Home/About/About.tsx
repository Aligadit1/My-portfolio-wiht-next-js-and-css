import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { aboutInfo } from '@/data/data'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return (
    <div className='aboutDiv' id='about'>
        <SectionHeading>About Me</SectionHeading>
        <div className='contentContainer'>
            {/* Text content */}
            <div  data-aos="fade-left" data-aos-anchor-placement="top-center">
                <h1 className='aboutTitle linearGradientEffect'>{aboutInfo.title}</h1>
            <p className='aboutDescription'>{aboutInfo.description}</p>
            
<div className='skillCheckboxDiv'>
    <div className='skillCheckboxContainer'>
        <div className='iconDiv'>
            <FaCheck className='icon' />
        </div>
        <p className='iconPara'>Frontend Developer</p>
    </div>
    </div>        
    </div>
    {/*Stats Content */}
    <div  data-aos="zoom-in" data-aos-delay="105" data-aos-anchor-placement="top-center" className='statsContentDiv'>
        {/* 1st stat */}
        <div>
            <Image
            src="/customer.png"
            alt="image"
            width={80}
            height={80}
            className='statImages'
             />
             <p className='statParasInfo'>{aboutInfo.client}</p>
             <p className='statParasValue'>Satisfied Customers</p>
        </div>
        {/* 2nd stat */}
        <div>
            <Image
            src="/experience.png"
            alt="image"
            width={80}
            height={80}
            className='statImages'
             />
             <p className='statParasInfo'>{aboutInfo.experience}</p>
             <p className='statParasValue'>Fresher</p>
        </div>
        {/* 3rd stat */}
        <div>
            <Image
            src="/completed.png"
            alt="image"
            width={80}
            height={80}
            className='statImages'
             />
             <p className='statParasInfo'>{aboutInfo.projects}</p>
             <p className='statParasValue'>Completed Projects</p>
        </div>
        {/* 4th stat */}
        <div>
            <Image
            src="/rocket.png"
            alt="image"
            width={80}
            height={80}
            className='statImages'
             />
             <p className='statParasInfo'>{aboutInfo.website}</p>
             <p className='statParasValue'>Website Launche</p>
        </div>

    </div>
        </div>
    </div>
  )
}

export default About
