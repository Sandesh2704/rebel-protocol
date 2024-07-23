'use client'
import { useRef } from "react";
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
  
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   customPaging: i => (
  //     <button className="dot w-4 h-4 mx-2 rounded-full border border-gray-400 bg-gray-400 focus:outline-none" />
  //   ),
  //   appendDots: dots => (
  //     <div className="flex justify-center mt-4">
  //       <ul className="flex">{dots}</ul>
  //     </div>
  //   )
  // };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: null,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    cssEase: "ease-in-out", 
  };


  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1, // Show one slide at a time
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: null,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   swipeToSlide: true,
  //   cssEase: "ease-in-out", 
  //   // appendDots: dots => <Dots dots={dots}/>,
  //   // customPaging: () => <PagingDot />
  // };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
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
  <div onClick={onClick}>
    <FaChevronRight className="absolute bottom-0 right-20 " />
  </div>
)

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute bottom-0  left-20">
 <FaChevronLeft />
  </div>
)

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-400 shadow  hidden md:flex md:py-3 lg:py-4 px-0 md:px-1 lg:px-2 rounded-l-sm cursor-pointer"
//     onClick={onClick}
//   >
//    <FaChevronRight/>
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="z-10 left-0 top-1/2 transform -translate-y-1/2  bg-white text-gray-400 shadow hidden md:flex py-2  md:py-3 lg:py-4 px-0 md:px-1 lg:px-2 rounded-r-sm cursor-pointer"
//     onClick={onClick}
//   >
//    <FaChevronLeft className=''/>
//   </div>
// );




{/* <div className="flex ">
<Slider {...settings} className='w-40 '>

  { StepsData.map((steps, index) => (
    

          <div key={index} className="">
           <h1>{steps.title}</h1>
           <p>{steps.content}</p>
          </div>
        ))}
  
        
      </Slider>
</div> */}
{/* <div id="default-carousel" class="relative w-full" data-carousel="slide">

    <Slider {...settings} class="relative flex h-56 overflow-hidden rounded-lg md:h-96">
        <div class=" duration-700 ease-in-out  w-96" data-carousel-item>
        <h1>hi</h1>
        <p>After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded.</p>
        </div>

        <div class=" duration-700 ease-in-out" data-carousel-item>
        <h1>hi</h1>
        <p>After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded.</p>
        </div>

        <div class="duration-700 ease-in-out" data-carousel-item>
        <h1>hi</h1>
        <p>After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded.</p>
        </div>

        <div class="duration-700 ease-in-out" data-carousel-item>
        <h1>hi</h1>
        <p>After completing your purchase, your $REB token balance will be displayed on the buy widget. You can claim these tokens once the $REB presale has concluded.</p>
        </div>
    </Slider>

</div> */}