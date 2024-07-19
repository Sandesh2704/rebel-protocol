'use client'
import React from 'react'
import { motion } from "framer-motion";

export default function HowItsWorks() {
  const steps = [
    {
      step: 1,
      title: 'SpaceJet training',
      description: 'At SpaceJet we provide complete training before and during your trip so you can enjoy the most thrilling excursions this side of Mars.'
    },
    {
      step: 2,
      title: 'Choose Your Flight',
      description: 'Depart conveniently from Orlando, Houston, or Los Angeles.'
    },
    {
      step: 3,
      title: 'SkyDrift Hotel reservations',
      description: 'Book your stay at the world’s only orbital luxury hotel, where you’ll be treated to breathtaking views of earth, award-winning restaurants.'
    },
    {
      step: 4,
      title: 'SpaceJet mobile app',
      description: 'Book your flight and ground transportation, order floating room service, schedule a romantic spacewalk and so much more.'
    }
  ];
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div initial={{
              opacity: 0,
              y: step.step % 12 === 0 ? -50 : 50
            }}
              whileInView={{
                opacity: 1,
                y: 0, 
                transition: {
                  duration: 1
                }
              }}
              key={index}
              className="relative bg-[#0f0f11] shadow-lg text-center py-6  px-3  shadow-md rounded-lg">
              <div className="flex justify-center">
                <h1 className='rounded-full  py-2 px-4 text-lg md:text-xl lg:text-2xl font-semibold bg-[#cc3cd9] text-white'>
                  {step.step}
                </h1>
              </div>
              <div className='mt-6'>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-xs md:text-sm lg:text-base  mt-3">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
