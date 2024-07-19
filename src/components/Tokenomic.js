'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
      'Partnership & KOL 2%'
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
    cutout: '30%', 
    radius: '70%', 
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        align: 'end',
        anchor: 'end',
        textAlign: 'end'

      }
    }
  };

  const points = ['PreSale 20% (200.000.000 $REB) 20% unlock TGE, 80% Vesting 8 month with monthly claim',
    'Public Sale 10% (100.000.000 $REB)',
    '25% unlock TGE, cliff 1 month, 75% vesting 5 month with monthly claim',
    'Team 10% (100.000.000 $REB) 2% unlock TGE, cliff 12 month, vesting 5 month claim monthly',
    'Partnership & KOL 2% (20.000.000 $REB) 100% unlock TGE',
    'Community incentives 5% (50.000.000 $REB) 100% TGE after 7 days listing',
    'Liquidity 30% (300.000.000 $REB)',
    'Marketing 8% (80.000.000 $REB)',
    'Treasury & ecosystem 15% (150.000.000 $REB)']

    
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-5 lg:gap-12'>
          <div className="flex justify-center items-center ">
            <div className=  "w-full sm:w-fit lg:w-full h-full ">
              <Doughnut data={data} options={options} />
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
        </div>
    </>
  )
}
