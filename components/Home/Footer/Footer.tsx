import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footerDiv'>
        <div>
            <Image src="/logo3.png.png" alt='LOGO' width={180} height={180} className='footerLogo'/>
        </div>
        <div className='footerLinkContainer '>
           <Link href="#"> <div>Home.</div></Link>

           <Link href="#services"> <div>Services.</div></Link>

            <Link href="#projects"><div>Projects.</div></Link>
            <Link href="#reviews"><div>Reviews.</div></Link>
            <Link href="#contact"><div>Contact.</div></Link>
        </div>
        <p className='footerCopywrite'> &copy; 2024 All Rights Rerved.My Personal Portfolio</p>
      
    </div>
  )
}

export default Footer
