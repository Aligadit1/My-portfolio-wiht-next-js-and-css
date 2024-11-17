import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className='contactDiv' id='contact'>
        <div className='contactContainerDiv'>
             {/* Contact Form */}
           <div data-aos="fade-left" data-aos-anchor-placement="top-center">
            <ContactForm />
           </div>
           {/* Contact Info */}
            <div data-aos="fade-right" data-aos-delay="150" data-aos-anchor-placement="top-center" className='contactInfoDiv'>
                <ContactInfo />
            </div>
        </div>
      
    </div>
  )
}

export default Contact
