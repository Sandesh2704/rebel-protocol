'use client'
import { useRef } from "react";
import { CgClose } from "react-icons/cg";
import Slider from "react-slick";


export default function HowToBuy({togglehandler}) {

  const sliderRef = useRef(null);

  const sliderData = [
    "How to buy?",
    "STEP 1 - CONNECT After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded.",
    "STEP 2 - SWAP Next, you'll need some cryptocurrency to make your purchase. You can use ETH, BNB, MATIC, ARB, AVAX, OP, USDT, or USDC. Ensure you have enough funds in your wallet to cover both the purchase and any transaction fees. You can deposit funds or buy cryptocurrency directly within Best Wallet or any compatible wallet.",
    "STEP 3 - CLAIM After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the REBEL presale has concluded.",
    "ADDITIONAL INFORMATION Our platform supports transactions across multiple networks, including Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, Optimism, and Base. This wide support ensures flexibility and convenience for users, allowing you to choose the network that best suits your needs."
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: i => (
      <button className="dot w-4 h-4 mx-2 rounded-full border border-gray-400 bg-gray-400 focus:outline-none" />
    ),
    appendDots: dots => (
      <div className="flex justify-center mt-4">
        <ul className="flex">{dots}</ul>
      </div>
    )
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      {/* kijoi */}
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/70 w-full h-full z-50 flex justify-center'>
        <div className='relative w-[30%]  mt-20 bg-[#0f0f11] border-4 border-[#cc3cd9]  p-4'>
          <div className="absolute right-2 top-2 text-2xl" onClick={togglehandler}><CgClose/></div>

          <h1 className='text-4xl font-bold text-white'>How To Buy ?</h1>
{/* 
          <div className="relative">
            <Slider ref={sliderRef} {...settings} className="flex overflow-hidden bg-gray-100">
              {sliderData.map((content, index) => (
                <div key={index} className="p-4 text-white">
                  <h3 className="text-sm font-bold mb-2 text-black">{content.split('\n')[0]}</h3>
                  <p>{content.split('\n').slice(1).join('\n')}</p>
                </div>
              ))}
            </Slider>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
              <button onClick={prevSlide} className="prev-button text-2xl font-bold">
                &#8249;
              </button>
              <button onClick={nextSlide} className="next-button text-2xl font-bold">
                &#8250;
              </button>
            </div>
          </div> */}

          {/* <div id="indicators-carousel" class="relative w-full" data-carousel="static">
            <div class="relative flex h-56 overflow-hidden rounded-lg md:h-96">

              <div class="duration-700 ease-in-out  h-40 w-full bg-white" data-carousel-item="active">
                uuu
              </div>

              <div class="duration-700 ease-in-out  h-40 w-full bg-pink-700" data-carousel-item>
                uuuu
              </div>

              <div class=" duration-700 ease-in-out h-40 w-full bg-red-100" data-carousel-item>
                uuu
              </div>

              <div class="duration-700 ease-in-out h-40 w-full bg-blue-100" data-carousel-item>
                hu
              </div>

              <div class="duration-700 ease-in-out h-40 w-full bg-green-100" data-carousel-item>
                uuu
              </div>
            </div>

            <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
              <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div> */}
        </div>
      </div>

    </>
  )
}
