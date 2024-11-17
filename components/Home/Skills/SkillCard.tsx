import Image from 'next/image';
import React from 'react'

type Props ={
skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
}
}
const SkillCard = ({skill}:Props) => {
    const {image,percent,title} = skill
  return (
    <div className='skillCardContainerDiv'>
      <Image src={image}alt='title' width={80} height={80} className='skillImgs'/>
    <h1 className='skillHeader'>{title}</h1>
     <div className='skillCommand'>{percent}</div>
    </div>
  )
}

export default SkillCard
