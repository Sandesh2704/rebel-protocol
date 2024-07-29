'use client'
import carcousel from '/public/images/otherimages/carousel.png'
import gif from '/public/images/otherimages/heropage.gif'
import earthbg from '/public/images/otherimages/pngegg.png'
import React  from 'react';
import { motion } from 'framer-motion';
import '../style/HeroPage.css'
import Image from 'next/image';

export default function Heropage() {
 
  return (
    <>
      <div className='relative px-4 sm:px-7  lg:px-40 grid grid-cols-1 md:grid-cols-2  gap-y-10 lg:gap-16 pt-24 md:py-10 lg:py-28 overflow-hidden'>
        <div className='flex items-center justify-center md:justify-start lg:justify-center'>
          <Image src={gif} height={100} width={100} alt="carousel" className='w-64 md:w-80  lg:w-full' priority/>
        </div>
        <div className=''>
          <h1 className=" text-start text-white  text-4xl lg:text-[56px] leading-[2.5rem] md:leading-[2.7rem] lg:leading-[4.2rem] font-bold mb-5 md:mb-4  lg:my-7 px-4 md:px-0 z-40">
            Legacy Meets Liquidity is at intersection
            <span className=" block md:inline lg:pl-5 text-[#CC3CD9]">
              Between <span className=" block lg:inline ">TradFi & DeFi</span>
            </span>
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-lg text-start">
            Offering investor grade gold & other RWAs backed 1:1 by real world-assets.
          </p>
        </div>



    {/* <motion.div
      className="cube hidden lg:flex  absolute right-2 md:left-5 top-2 lg:top-12 transform -translate-y-1/2"
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]  cube__face--front"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]   cube__face--back"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]   cube__face--right"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]  cube__face--left"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]  cube__face--top"></div>
      <div className="absolute w-16 h-16    border-4 border-[#cc3cd9]  cube__face--bottom"></div>
    </motion.div> */}

    <motion.div 
        animate={{
          rotate: 360,
          // x: [0, 10, -100, 100],
          // y: [0, 10, -100, 50]
        }}
        transition={{
          duration: 10,
          ease: 'linear',
          repeat: Infinity
        }}
        className='absolute hidden lg:flex bottom-20 -right-36 brightness-100 z-0'>
        <Image src={earthbg} alt="carousel" className='w-64 md:w-80  lg:w-[70%]' width={700} height={700} priority/>
        </motion.div>
        


        {/* <div className="absolute w-full   ">
{particles.map((_, index) => {
        const size = getRandomSize();
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return (
          <motion.div
            key={index}
            className="border-2 border-[#cc3cd9] absolute"
            style={{ width: size, height: size }}
            initial={{ opacity: 0, x, y }}
            animate={{ opacity: 1, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: index * 0.2
            }}
          />
        );
      })}
        </div> */}
      </div>
 
    </>
  )
}
