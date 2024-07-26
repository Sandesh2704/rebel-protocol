'use client'
import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Image from 'next/image';
import img from '/public/images/otherimages/hero-desktop.webp'

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function Tokenomic() {
  const data = {
    labels: [
      'Community 5%',
      'PreSale 20%',
      'Public Sale 10%',
      'Team 10%',
      'Liquidity 30%',
      'Marketing 8%',
      'Ecosystem 15%',
      'KOL 2%'
    ],
    datasets: [{
      data: [5, 14, 10, 10, 30, 10, 15, 5],
      backgroundColor: [
        '#5A00B1',
        '#8F1FCE',
        '#12A1C0',
        '#B383F6',
        '#D400D1',
        '#B49EFC',
        '#7F1982',
        '#007B8A'
      ],
      hoverBackgroundColor: [
        '#5A00B1',
        '#8F1FCE',
        '#12A1C0',
        '#B383F6',
        '#D400D1',
        '#B49EFC',
        '#7F1982',
        '#007B8A'
      ],
      borderColor: '#000',
      borderWidth: 1,
    }]
  };

  const options = {
    cutout: '20%',
    radius: '55%',
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        color: '#FFFFFF', // Text color
        backgroundColor: '#333333', // Background color for the labels
        borderRadius: 5, // Optional: for rounded corners of the background
        padding: {
          top: 4,
          right: 6,
          bottom: 4,
          left: 6
        },
        font: {
          size: 14, // Font size in pixels
          weight: 'bold', // Font weight
        },
        align: 'end',
        anchor: 'end',
        textAlign: 'end'
      }
    }
  };

  const points = [' Presale  15%(40% unlock TGE , 60% vesting 3 month with monthly claim)',
    'Community and user incentives 15%(20% unlock after 7days TGE , 80% vesting 4month with monthly claim)',
    'Team and advisor  10%(10% unlock TGE, cliff 12month, 90% vesting 9month with monthly claim)',
    'Marketing and community growth 10%',
    'Startegic partnership and ecosystem  10%(20% unlock TGE , Cliff 1Month , 80%vesting 4month with monthly claim)',
    'Liquidity 30% (300.000.000 $REB)',
    'Ecosystem 10%(150.000.000 $REB)',
  ]

    
  return (
    <>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-5 lg:gap-12'>
         

<div className="relative z-10 flex flex-wrap justify-center items-start space-x-4">
        <Card text="Presale" percentage={20} />
        <Card text="Community and User Incentives" percentage={30} />
        <Card text="Liquidity Pool" percentage={10} />
        <Card text="Development Fund" percentage={15} />
        <Card text="Team and Advisors" percentage={10} />
        <Card text="Marketing and Community Growth" percentage={5} />
        <Card text="Strategic Partnerships and Ecosystem Expansion" percentage={10} />
      </div>



          </div>
          <div className='flex justify-center items-center '>
            <div className='h-fit bg-[#0f0f11] p-4 lg:p-5 '>
              <ul className=" text-xs md:text-sm lg:text-lg px-3 lg:px-5  mx-auto list-disc  rounded-lg ">
                {points.map((point, i) => (
                  <li key={i} className="mb-3">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}

<div className='relative grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 lg:gap-4'>
  <div className='absolute w-full h-full hidden lg:flex justify-center items-center'>
  <Image
        src={img} 
        alt="Background" 
        className=" lg:w-60 xl:w-96  z-0"
      />
  </div>

        <div className='col-start-1 lg:col-start-2  col-span-12 md:col-span-6 lg:col-span-3'>
          <Card text="Presale" percentage={15} />
        </div>
        <div className='col-start-1 lg:col-start-9 col-span-12  md:col-span-6  lg:col-span-3'>
          <Card text="Liquidity" percentage={30} />
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



    </>
  )
}

const Card = ({ text, percentage }) => {
  return (
    <div className="relative bg-[#0f0f11] rounded-lg shadow-lg p-4 w-full  mb-4">
      <div className="text-base md:text-lg text-white font-semibold">{text}</div>
      <div className="flex items-center mt-2">
        <div className="w-full bg-fuchsia-200 rounded-full h-2">
          <div
            className="bg-[#cc3cd9] h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="ml-2 text-lg text-white font-semibold">{percentage}%</div>
      </div>
    </div>
  );
};