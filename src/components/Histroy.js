'use client'
import { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Slider from "react-slick";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import '../style/HowToBuy.css'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Histroy({histroyPopoverHandler}) {
  return (
    <>
 <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/70  h-full z-50 flex justify-center'>
        <div className='relative w-[90%]  md:w-[55%] lg:w-[40%] xl:w-[30%] mt-16 md:mt-20 bg-[#0f0f11] h-fit border border-[#cc3cd9] shadow-2xl p-3'>
          <div className="absolute right-2 top-2 text-base p-2 border border-stone-500" onClick={histroyPopoverHandler}><CgClose /></div>

         
           <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-white text-center pt-10">Trasection Histroy</h1>
         <div className="flex flex-col text-center gap-2 lg:gap-3 py-4 md:py-5 mt-5 rounded-lg  bg-[#cc3cd9]/5">
<h1 className=" text-sm text-white">Total Purchased</h1>
<p className="text-[#cc3cd9] text-2xl lg:text-3xl font-semibold">6,5676 $REB</p>
         </div>
     



        </div>
      </div>
    </>
  )
}
