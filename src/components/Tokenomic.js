'use client'
import React from 'react'
import Image from 'next/image';
import logo from "/public/logo192.png"


export default function Tokenomic() {
 


  return (
    <>
      <div className="flex flex-col md:grid    md:grid-rows-4 lg:grid-rows-3 grid-flow-col gap-4">
        <Card text="Presale" percentage={15} subtext='40% unlock TGE , 60% vesting 3 month with monthly claim' />
        <Card text="Liquidity" percentage={40} />
        <Card text="Community and user incentives" percentage={15} subtext='20% unlock after 7days TGE , 80% vesting 4month with monthly claim' />
        <div className='flex  md:hidden lg:flex row-span-1 md:row-span-2 items-center justify-center'>
          <Image
            src={logo}
            alt="logo"
            className="w-[60%] rounded-full border-8 border-white p-12"
            width={100}
            height={100}
            priority
          />
        </div>
        <div><Card text="Team and advisor" percentage={10} subtext="10% unlock TGE, cliff 12month, 90% vesting 9month with monthly claim" /></div>
        <div><Card text="Ecosystem" percentage={10} /></div>
        <div><Card text="Startegic partnership and ecosystem" percentage={10} subtext="20% unlock TGE , Cliff 1Month , 80%vesting 4month with monthly claim" /></div>
        <div><Card text="Marketing and community growth" percentage={10} /></div>
      </div>

    </>
  )
}

const Card = ({ text, percentage,subtext }) => {
  return (
    <div className="relative bg-[#0f0f11]/90 rounded-lg shadow-lg p-4 w-full h-full">
      <div className="text-base md:text-base text-white font-medium">{text}</div>
      <div className="flex items-center mt-2">
        <div className="w-full bg-[#cc3cd9]/15  rounded-full h-2">
          <div
            className="bg-fuchsia-700 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="ml-4 text-sm md:text-base text-white font-medium">{percentage}%</div>
      </div>
      <div className="text-sm md:text-base font-medium mt-5">{subtext}</div>
    </div>
  );
};