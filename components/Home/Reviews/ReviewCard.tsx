import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
type Props ={
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
    }
    
}

const ReviewCard = ({review}:Props) => {
    const {image,name,profession,rating,review:clientReview} = review;
  return (
    <div className='reviewCardMainDiv'>
        <div className='reviewCardImgDiv'>
            <Image src='/q.png' alt="image" width={50} height={50} />
            <p className='reviewCardPara'>{clientReview}</p>
            <Image src='/q.png' alt="image" width={50} height={50} className='reviewCardImg' />
        </div>
        <div className='starIconContainer'>
            <span>{rating}/5</span>
            <FaStar className='starIcon' />
        </div>
        <div className='clientInfoMainContainerDiv '>
            <div className='clientInfoDiv'>
                <div>
                    <Image src={image} alt={name} height={40} width={40} className='clientImg' />
                </div>
                <div> <h1 className='clientName'>{name}</h1>
                <p className='clientProfession'>{profession}</p></div>
            </div>
        </div>

    </div>
  )
}

export default ReviewCard
