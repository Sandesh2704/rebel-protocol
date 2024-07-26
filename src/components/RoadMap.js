'use client'
import '../style/RoadMap.css'
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

export default function RoadMap() {

  const timelineSteps = [
    {
      year: 'Q3 2024',
      points: ['White paper', 'Dashboard',  'Presale', ],
      position: 'bottom'
    },
    {
      year: 'Q4 2024',
      points: ['TGE $REB', 'LISTING Dex & cex', 'REBEL PLATFORM', `RWA's Expansion I`],
      position: 'top'
    },
    {
      year: 'Q1 2025',
      points: ['Phase 1 metaverse & ai', 'Rebel Platform Update Feature', 'Marketing Boost'],
      position: 'bottom'
    },
    {
      year: 'Q2 2025',
      points: [`RWA's Expansion II`, 'Dao implementation', 'Sector compunds & multiRWA TOKEN'],
      position: 'top'
    }
  ];


  return (
    <>
      <section className="container mx-auto  md:py-40 lg:py-48">
        <ol className="relative border-l-2 border-[#cc3cd9] md:flex md:border-t-2 md:border-l-0  md:space-x-4 ">
          {timelineSteps.map((step, index) => (
            <li
              key={index}
              className="relative mb-12 md:w-1/4 h-1/4  w-full rounded-lg"
            >
              <div className={`step flex items-center justify-${step.position === 'top' ? 'start' : 'end'} lg:flex-col lg:items-start lg:justify-center`}>
                <span
                  className={`absolute left-1/2 transform -translate-x-1/2 w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#cc3cd9] border-4 border-[#cc3cd9] text-white text-base md:text-2xl lg:text-3xl font-bold flex items-center justify-center z-10 `}
                >
                  <GoDotFill />

                </span>
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
                  className={`absolute bg-[#0f0f11] p-4  rounded shadow-lg ${step.position === 'top' ? 'top-12' : 'bottom-12'
                    } w-full `}
                >
                  <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-bold mb-4">{step.year}</p>
                  <ul className=" text-xs md:text-sm lg:text-base w-4/5 mx-auto list-disc">
                    {step.points.map((point, i) => (
                      <li key={i} className="mb-0.5">{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      {/* <section className="lg:py-16 ">
      <div className="container mx-auto px-4">
        <ol className="relative border-l-2 border-[#cc3cd9] lg:flex lg:border-t-2 lg:border-l-0  lg:space-x-4">
          {timelineSteps.map((step, index) => (
            <li
              key={index}
              className="relative mb-12 md:w-1/4 h-1/4  w-full rounded-lg"
            >
<div className={`step flex items-center justify-${step.position === 'top' ? 'start' : 'end'} lg:flex-col lg:items-start lg:justify-center`}>
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#cc3cd9] border-4 border-[#cc3cd9] text-white text-base md:text-2xl lg:text-3xl font-bold flex items-center justify-center z-10 `}
              >
                <GoDotFill  className=''/>
                
              </span>
              <div
                className={`absolute bg-[#0f0f11] p-4 rounded shadow-lg ${
                  step.position === 'top' ? 'top-12' : 'bottom-12'
                } w-full `}
              >
                <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-bold mb-4">{step.year}</p>
                <ul className=" text-xs md:text-sm lg:text-base w-4/5 mx-auto list-disc">
                  {step.points.map((point, i) => (
                    <li key={i} className="mb-0.5">{point}</li>
                  ))}
                </ul>
              </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section> */}
    </>
  )
}
