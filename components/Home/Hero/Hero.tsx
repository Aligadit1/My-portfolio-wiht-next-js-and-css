import { BaseInfo } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='heroMainContainer'>
      <div className='heroContainerDiv'>
      <div className='heroGridContainer'>
{/*Text content */}
<div>
  {/* sub heading */}
  <h1 data-aos="fade-left" className='heroHeader' >I am {BaseInfo.name}
  </h1>
  {/* title */}
  <h1 data-aos="fade-right" data-aos-delay="100" className='linearGradientEffect heroTitle'>{BaseInfo.position}
  </h1>
  {/* description */}
  <p data-aos="fade-left" data-aos-delay="200" className='heroDescription'>{BaseInfo.description}</p>

{/* button */}
<button data-aos="zoom-in" data-aos-delay="300" className='heroBtn'>
  <span>Download CV</span>
  <FaDownload />
</button>
</div >
{/* Image content */}
<div data-aos="zoom-in" data-aos-delay="400" className='heroImg'>
  <Image
  src={BaseInfo.profilePic}
  alt={BaseInfo.name}
  height={500}
  width={350}
  />
</div>
      </div>
      </div>
    </div>
  )
}

export default Hero
