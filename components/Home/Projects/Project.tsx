import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { projectData } from '@/data/data'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='projectContainerDiv' id='projects'>
        <SectionHeading>My Projects</SectionHeading>
        <div className='projectsContainer'>
            {projectData.map((project,i)=>{
                return <div key={project.id}
                data-aos="fade-up" data-aos-delay={`${i*150}`} data-aos-anchor-placement="top-center" className='projects'>
                    <Link href={project.url} target='_blank'>
                    <Image src={project.image} alt='project' width={300} height={200} className='projectsImg' />
                    </Link>
                </div>
            })}
        </div>
      
    </div>
  )
}

export default Project
