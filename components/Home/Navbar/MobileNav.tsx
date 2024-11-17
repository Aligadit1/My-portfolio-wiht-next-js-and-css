import { navLinks } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg';
// props type
type Props={
    showNav:boolean,
    closeNav:()=>void
}

const MobileNav =({closeNav,showNav}:Props)=>{
    const navOpen = showNav ? "translate-x-0":"translate-x-[-100%]";
  return (
    <div>
    {/* overlay */}
    <div className={`${navOpen} sideBarOverlay`} ></div>
    {/* Nav Links */}
    <div className={`${navOpen} sideBarLinksContainer`}>
{navLinks.map((navLink)=>{
    return(
   <Link key={navLink.id} href={navLink.url}>
    <p 
        className="sideBarLinks"
      > {navLink.label}</p>
   </Link>

);
})}
{/* close button */}
<CgClose onClick={closeNav} className='sideBarCloseBtn'  />
    </div>
    </div>
  )
}


export default MobileNav
