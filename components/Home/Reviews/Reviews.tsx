import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import Slider from './Slider'

const Reviews = () => {
  return (
    <div className='reviewPageContainerDiv' id='reviews'>
        <SectionHeading>Client Reviews</SectionHeading>
        <div className='reviewPageSliderDiv'>
        <Slider/>
        </div>
      
    </div>
  )
}

export default Reviews
