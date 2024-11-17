"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/constants";
import { HiBars3BottomRight } from "react-icons/hi2";
// define props type
type Props ={
    openNav:()=>void
}
const Navbar=({openNav}:Props)=>{
    const [navBg,setNavBg] = useState(false)
    useEffect(()=>{ 
        const handler =()=>{
            if(window.scrollY>=90){
                setNavBg(true)
            }
            if(window.scrollY <90){
                setNavBg(false)
            }
        };
        window.addEventListener("scroll",handler)
        return()=>{
            window.removeEventListener("scroll",handler)
        }



    },[])
  return (
    <div className={`fixed ${navBg ? 'bg-[#240b39]':'fixed'} navMainContainer` }>
      <div className="navbarContainer">
        {/* logo */}
        <Image
          src="/logo3.png.png"
          alt="LOGO"
          width={90}
          height={170}
          priority
          className="navLogo"
        />

        {/* nav Links */}
        <div className="navLinksContainer">
          <div className="navLinks">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p
                    className="navLinksPara"
                  >
                    {navLink.label}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className="navBtnDiv">
            <button className="navBtn">
              Hire Me
            </button>
            {/* burger */}
            <HiBars3BottomRight onClick={openNav} className="navBurger" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
