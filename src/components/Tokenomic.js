'use client'
import React from 'react'
import Image from 'next/image';
import img from '/public/images/otherimages/tokenomics.png'


export default function Tokenomic() {
 


  return (
    <>

      <div>
        <div className='flex justify-center mb-5 '>
          <div className=' px-10 py-3 rounded-lg bg-[#cc3cd9]/10'>
            <h1 className='text-center text-sm text-[#cc3cd9]'>Total Supply</h1>
            <p className='text-3xl font-semibold text-[#cc3cd9]'>5,000,000,000</p>
          </div>
        </div>

        <div className='relative grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 lg:gap-4'>

          <div className='absolute w-full h-full hidden md:flex justify-center items-center'>
            <Image
              src={img}
              alt="Background"
              className=" lg:w-60 xl:w-96 z-0"
            />
          </div>

          <div className='col-start-1 lg:col-start-2  col-span-12 md:col-span-6 lg:col-span-3'>
            <Card text="Presale" percentage={15} />
          </div>
          <div className='col-start-1 lg:col-start-9 col-span-12  md:col-span-6  lg:col-span-3'>
            <Card text="Liquidity" percentage={40} />
          </div>

          <div className='col-start-1 lg:col-start-3 col-span-12  md:col-span-6  lg:col-span-3'>
            <Card text="Community and user incentives" percentage={15} />
          </div>

          <div className='col-start-1 lg:col-start-8 col-span-12  md:col-span-6  lg:col-span-3'>
            <Card text="Team and advisor" percentage={10} />
          </div>

          <div className='col-start-1 lg:col-start-2 col-span-12 md:col-span-6 lg:col-span-3'>
            <Card text="Marketing and community growth" percentage={10} />
          </div>
          <div className='col-start-1 lg:col-start-9 col-span-12  md:col-span-6  lg:col-span-3'>
            <Card text="Startegic partnership and ecosystem" percentage={10} />
          </div>
        </div>
      </div>


    </>
  )
}

const Card = ({ text, percentage }) => {
  return (
    <div className="relative bg-[#0f0f11] rounded-lg shadow-lg p-4 w-full  mb-4">
      <div className="text-base md:text-base text-white font-semibold">{text}</div>
      <div className="flex items-center mt-2">
        <div className="w-full bg-fuchsia-200 rounded-full h-2">
          <div
            className="bg-[#cc3cd9] h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="ml-4 text-sm md:text-base text-white font-semibold">{percentage}%</div>
      </div>
    </div>
  );
};