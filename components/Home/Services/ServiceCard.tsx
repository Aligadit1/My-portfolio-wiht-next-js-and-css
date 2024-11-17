"use client"
import Image from 'next/image'
import React from 'react'
import Tilt from "react-parallax-tilt"
// defining props type
type  Props= {
    service: {
    id: number;
    title: string;
    description: string;
    icon: string;
}
}
const ServiceCard = ({service}:Props) => {
  return <Tilt className='serviceTilt'>
    <Image src={service.icon} alt={service.title} width={50} height={50} />
    <h1 className='serviceTitleHead'>{service.title}</h1>
    <p className='serviceDescriptionPara'>{service.description}</p>
  </Tilt>
}


export default ServiceCard
