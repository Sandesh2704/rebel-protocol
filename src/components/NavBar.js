"use client"
import React, { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link, Link as ScrollLink } from 'react-scroll';
import logo from '/public/logo.png'
import Image from 'next/image';


export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

    return (
        <>
        <nav className='bg-black fixed w-full top-0 z-50 mx-auto flex items-center justify-between py-2 px-3 sm:px-7 lg:px-16  xl:px-28 text-[17px] ' style={{borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)'}}>
            <ScrollLink to="/" smooth={true} duration={500}>
              <Image className="w-36  lg:w-46" src={logo} alt="Corporate Logo" width={100} height={100} priority/>
            </ScrollLink>
            <div className='hidden xl:flex space-x-8 font-medium'>
            <ScrollLink to="section1" smooth={true} duration={500} className="hover:text-[#cc3cd9]">About us</ScrollLink>
            <ScrollLink to="section2" smooth={true} duration={500} className="hover:text-[#cc3cd9]">WHY ?</ScrollLink>
            <ScrollLink to="section3" smooth={true} duration={500}  className="hover:text-[#cc3cd9]">How It’s Work</ScrollLink>
            <ScrollLink to="section4" smooth={true} duration={500}  className="hover:text-[#cc3cd9]">Tokenomic</ScrollLink>
            <ScrollLink to="section5" smooth={true} duration={500}  className="hover:text-[#cc3cd9]">Roadmap</ScrollLink>
            <ScrollLink to="section6" smooth={true} duration={500}  className="hover:text-[#cc3cd9]">Presale</ScrollLink>
            <Link smooth={true} duration={500} href="https://app.gitbook.com/o/ioClQ7WLvbjNjU7qZrL0/s/xjyEG72qduPrWHW4ogEE/" target="_blanks"  className="hover:text-[#cc3cd9]">WhitePaper</Link>
             <div className="flex items-center space-x-7">
              <Link href="https://t.me/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-2xl"><FaTelegram/></Link>
              <Link  href="https://x.com/rebelprotocol" target="_blank"  className="hover:text-[#cc3cd9] text-2xl"><FaSquareXTwitter/></Link>
              </div>
            </div>
 

            <button onClick={toggleMobileMenu} className=" xl:hidden focus:outline-none bg-[#0f0f11] p-3 rounded-full text-lg">
             <CgMenuRight/>
            </button>
       

          <div className="fixed top-0  left-0 h-full w-[85%] sm:w-[40%] md: bg-[#0f0f11] shadow-lg transition-transform transform duration-500 ease-in-out text-base" style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
            <div className="flex justify-between items-center px-2 py-3" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)' }}>
              <ScrollLink to="/" smooth={true} duration={500} href="/">
                <Image className="w-32" src={logo} alt="Corporate Logo" width={100} height={100} priority/>
              </ScrollLink>
              <button onClick={toggleMobileMenu} className="focus:outline-none bg-black p-2 rounded-full text-lg mr-1">
                <IoMdClose />
              </button>
            </div>
            <div className='flex flex-col mt-8 px-4 font-medium'>
            <ScrollLink to="section1" smooth={true} duration={500}  className="hover:text-[#cc3cd9] py-2" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)'}} onClick={toggleMobileMenu}>About us</ScrollLink>
            <ScrollLink to="section2" smooth={true} duration={500} className="hover:text-[#cc3cd9] py-2" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)'}} onClick={toggleMobileMenu}>WHY ?</ScrollLink>
            <ScrollLink to="section3" smooth={true} duration={500} href="how" className="hover:text-[#cc3cd9] py-2" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)'}} onClick={toggleMobileMenu}>How It’s Work</ScrollLink>
            <ScrollLink to="section4" smooth={true} duration={500} href="tokenomic1"className="hover:text-[#cc3cd9] py-2" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)'}} onClick={toggleMobileMenu}>Tokenomic</ScrollLink>
            <ScrollLink to="section5" smooth={true} duration={500} href="roadmap" className="hover:text-[#cc3cd9] py-2" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)'}} onClick={toggleMobileMenu}>Roadmap</ScrollLink>
            <ScrollLink to="section6" smooth={true} duration={500} href="presale" className="hover:text-[#cc3cd9] py-2" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)'}} onClick={toggleMobileMenu}>Presale</ScrollLink>
            <Link  href="https://app.gitbook.com/o/ioClQ7WLvbjNjU7qZrL0/s/xjyEG72qduPrWHW4ogEE/" target="_blanks"  className="hover:text-[#cc3cd9] py-2" style={{ borderBottom: '1px solid hsla(0, 0%, 100%, 0.1)'}}onClick={toggleMobileMenu}>WhitePaper</Link>
             <div className="flex items-center space-x-5 py-4 justify-center">
              <Link href="https://t.me/rebelprotocol" target="_blank" className="hover:text-[#cc3cd9] text-3xl"><FaTelegram/></Link>
              <Link  href="https://x.com/rebelprotocol"target="_blank" className="hover:text-[#cc3cd9] text-3xl"><FaSquareXTwitter/></Link>
              </div>
            </div>
          </div>
        </nav>
        </>
    )
}
