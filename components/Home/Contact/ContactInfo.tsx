import { contactData } from '@/data/data'
import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div>
      <div className='phoneContainerDiv'>
        <div className='iconsDiv phoneIconDiv'>
            <FaPhone className='icons' />
        </div>
        <div>
            <h1 className='iconsHead'>Phone</h1>
            <h1 className='iconsData'>{contactData.phone}</h1>
        </div>

      </div>
      <div className='envelopeMapContainerDiv envelopeDiv'>
        <div className='iconsDiv'>
            <FaEnvelope className='icons' />
        </div>
        <div>
            <h1 className='iconsHead'>Email address</h1>
            <h1 className='iconsData'>{contactData.email}</h1>
        </div>

      </div>
      <div className='envelopeMapContainerDiv'>
        <div className='iconsDiv'>
            <FaMap className='icons' />
        </div>
        <div>
            <h1 className='iconsHead'>Address</h1>
            <h1 className='iconsData'>{contactData.address}</h1>
        </div>

      </div>
    </div>
  )
}

export default ContactInfo
