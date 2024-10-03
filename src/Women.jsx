import React, { useContext } from 'react';
import { DataContext } from './Context';
import { FaArrowRight } from "react-icons/fa";
import TshirtCar from './TshirtCar';
import HeroCard from './Component/HeroCard';
import FashionDiv from './Component/FashionDiv';
import MensCard from './Component/MensCard';

const Women = () => {
  const { WTshirt,WShirtImg, theme,handleCarItem, heroCardTextWomen } = useContext(DataContext);

  return (
    <div className={`${theme ? "bg-black text-white" : "bg-white text-black"}  pt-32 w-full`}>
      
      {/* Hero Section */}
      <div className="hero-section w-full flex flex-col-reverse md:flex-row md:justify-evenly items-center gap-3 flex-wrap">
        <div className='hero-section-left w-full md:w-5/12 flex-col flex-wrap px-6 md:px-0 '>
          <h1 className='uppercase font-bold font-serif text-5xl md:text-8xl text-center md:text-left'>Where </h1>
          <h1 className='uppercase font-bold font-serif text-5xl md:text-8xl text-center md:text-left'>Fashion</h1>
          <div className='flex gap-3 items-center flex-col md:flex-row'>
            <h1 className='uppercase font-bold font-serif text-5xl md:text-8xl flex md:items-baseline gap-2 text-center md:flex-row flex-col '>Meets</h1>
            <HeroCard animatedText={heroCardTextWomen} time={500} className="bg-white" />
          </div>

          <div className='flex justify-center md:justify-start'>
            <button type="button" className={`border-[1px] mt-3 flex border-black px-5 py-2 md:py-1 rounded-lg  font-bold font-serif items-center gap-3  md:hover:ml-8 transition-all duration-1000 md:hover:bg-blue-800 capitalize  md:hover:border-blue-800 md:hover:text-white ${theme ? "border-white" : ""}  `} >
              Shop now <FaArrowRight />
            </button>
          </div >
            {/* <button type="button" className={`border-[1px] mt-3 flex border-black px-5 py-2 md:py-1 rounded-lg  font-bold font-serif items-center gap-3 hover:ml-8 transition-all duration-1000 hover:bg-blue-800  hover:border-blue-800 hover:text-white ${theme ? "border-white" : ""}  `}>
              SALE <FaArrowRight />
            </button> */}
        </div>

        {/* Tshirt Carousel */}
        <div className='hero-section-right w-full md:w-5/12'>
          <TshirtCar  Carousel={WShirtImg}/>
        </div>
      </div>

      {/* Divider */}
      <div className='mt-20 pb-12'>
        <hr />
      </div>

      {/* Fashion Section */}
      <div>
        <FashionDiv />
        <hr className='mt-5' />
      </div>

      {/* Women Section */}
      <ul className='flex px-3 py-5 flex-wrap justify-center gap-x-10 gap-y-14'>
        {
          WTshirt.map((CurrTshirt) => {
            return (
              <MensCard CurrTshirt={CurrTshirt} key={CurrTshirt.id} handleCarItem={handleCarItem}/>
            );
          })
        }
      </ul>

    </div>
  );
};

export default Women;
