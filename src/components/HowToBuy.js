'use client'
import { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Slider from "react-slick";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import '../style/HowToBuy.css'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


export default function HowToBuy({togglehandler}) {

  const sliderRef = useRef(null);

  const StepsData = [

    {
      number : 'step-1',
      title : 'CONNECT',
      content : "After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded."
    },
    {
      number : 'step-2',
      title : 'SWAP',
      content : "Next, you'll need some cryptocurrency to make your purchase. You can use ETH, BNB, MATIC, ARB, AVAX, OP, USDT, or USDC. Ensure you have enough funds in your wallet to cover both the purchase and any transaction fees. You can deposit funds or buy cryptocurrency directly within Best Wallet or any compatible wallet."
    },
    {
      number : 'step-3',
      title : 'CLAIM',
      content : "After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded."
    },
    {
      title : 'ADDITIONAL INFORMATION',
      content : "Our platform supports transactions across multiple networks, including Ethereum, BNB Chain, Polygon, Arbitrum, Avalanche, Optimism, and Base. This wide support ensures flexibility and convenience for users, allowing you to choose the network that best suits your needs."
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:  <NextArrow /> ,
    prevArrow:   <PrevArrow /> ,
    customPaging: i => (
      <div className={`w-3 h-3 rounded-full  mx-1 ${i === currentIndex ? 'bg-yellow-500' : 'bg-gray-100'}`} />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };


  return (
    <>
      {/* kijoi */}
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/70  h-full z-50 flex justify-center'>
        <div className='relative w-[30%]  mt-20 bg-[#0f0f11] h-fit border-4 border-[#cc3cd9]  p-4'>
          <div className="absolute right-2 top-2 text-2xl" onClick={togglehandler}><CgClose/></div>

          <h1 className='text-4xl font-bold text-white'>How To Buy ?</h1>
          <Slider {...settings} className="relative">
      {StepsData.map((step, index) => (
        <div key={index} className="p-4 ">
          <div className="flex">
          <span className="text-2xl font-bold mb-2">{step.number}</span>
          <span className="text-3xl font-bold text-white mb-2">{step.title}</span>
          </div>
          <p className="text-lg text-gray-300">{step.content}</p>
        </div>
      ))}
    </Slider>
        </div>
      </div>

    </>
  )
}

const NextArrow = ({ onClick }) => (
  <div className="right-2 absolute bottom-2  text-3xl cursor-pointer;" onClick={onClick}>
    <FaChevronRight/>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="left-2 absolute bottom-2  text-3xl cursor-pointer;" onClick={onClick}>
    <FaChevronLeft />
  </div>
);
