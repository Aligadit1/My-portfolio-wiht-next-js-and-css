import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { skillsData } from '@/data/data'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='skillPageContainerDiv' id='skills'>
        <SectionHeading>My Skills</SectionHeading>
        <div className='skillsContainerDiv'>
            {skillsData.map((skill,i)=>{
                return ( <div data-aos="flip-left" data-aos-delay={`${i*150}`} data-aos-anchor-placement="top-center" key={skill.id}>
                    <SkillCard skill={skill}/>

                </div>
                );
            })}
          </div>
      
    </div>
  )
}

export default Skills
