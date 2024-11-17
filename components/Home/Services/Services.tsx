import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { servicesData } from '@/data/data'
import ServiceCard from './ServiceCard'
const Services = () => {
  return (
    <div className='serviceMainContainerDiv' id='services'>
      <SectionHeading>Services</SectionHeading>
      <div className='serviceCardContainer'>
        {servicesData.map((service,i)=>{
            return <div  data-aos="fade-left" data-aos-delay={`${i*150}`} data-aos-anchor-placement="top-center" key={service.id}>
                <ServiceCard service={service}/>

            </div>
        })}
      </div>
      
    </div>
  )
}

export default Services
