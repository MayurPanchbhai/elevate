import React, { useContext, useState } from 'react';
import { DataContext } from './Context';
import { FaArrowRight } from "react-icons/fa";
import TshirtCar from './TshirtCar';
import HeroCard from './Component/HeroCard';
import FashionDiv from './Component/FashionDiv';
import MensCard from './Component/MensCard';
import TextSlider from '../TextSlider';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { MTshirt, theme,handleCarItem,Home , heroCardTextHome } = useContext(DataContext);

  const [sectionText , setSectionText]= useState("");

  const handleHomeNameMen =(condition)=>{
    if(condition){
      setSectionText("Mens");
    }else{
      setSectionText("");
    }
  }
  const handleHomeNameWomen =(condition)=>{
    if(condition){
      setSectionText("Women");
    }else{
      setSectionText("");
    }
  }


  return (
    <div className={`${theme ? "bg-black text-white" : "bg-white text-black"}  pt-32 w-full`}>
      
      {/* Hero Section */}
      <div className="hero-section w-full flex flex-col-reverse md:flex-row md:justify-evenly items-center gap-3 flex-wrap">
        <div className='hero-section-left w-full md:w-5/12 flex-col flex-wrap px-6 md:px-0 '>
          <h1 className='uppercase font-bold font-serif text-5xl md:text-8xl text-center md:text-left'>Elevate</h1>
          <h1 className='uppercase font-bold font-serif text-5xl md:text-8xl text-center md:text-left'>Your</h1>
          <div className='flex gap-3 items-center flex-col md:flex-row'>
            <h1 className='uppercase font-bold font-serif text-5xl md:text-8xl flex md:items-baseline gap-2 text-center md:flex-row flex-col '>style <p className='text-sm '>and</p></h1>
            <HeroCard animatedText={heroCardTextHome} time={400} />
          </div>

          <div className='flex justify-center md:justify-start'>
            <button type="button" className={`border-[1px] mt-3 flex border-black px-5 py-2 md:py-1 rounded-lg  font-bold font-serif items-center gap-3  md:hover:ml-8 transition-all duration-1000 md:hover:bg-blue-800  md:hover:border-blue-800 md:hover:text-white ${theme ? "border-white" : ""}  `}>
              SALE <FaArrowRight />
            </button>
          </div >
            {/* <button type="button" className={`border-[1px] mt-3 flex border-black px-5 py-2 md:py-1 rounded-lg  font-bold font-serif items-center gap-3 hover:ml-8 transition-all duration-1000 hover:bg-blue-800  hover:border-blue-800 hover:text-white ${theme ? "border-white" : ""}  `}>
              SALE <FaArrowRight />
            </button> */}
        </div>

        {/* Tshirt Carousel */}
        <div className='hero-section-right w-full md:w-5/12'>
          <TshirtCar  Carousel={Home}/>
        </div>
      </div>

      {/* Divider */}
      <div className='mt-28 pb-10 '>
        <hr />
      </div>

      {/* Fashion Section */}
      <div>
        {/* <FashionDiv /> */}
        {/* <hr className='mt-5' /> */}
        
      </div>

      <div className='md:h-max md:py-5 rounded-t-lg hidden md:flex w-full bg-red-800 text-white font-semibold font-serif uppercase shadow-2xl '>
        <TextSlider text={"Rise above with Elevate"} className=""/>

      </div>


      <div className='h-[100vh] w-full flex md:flex-row flex-col gap-2 p-7 relative justify-around items-center '>
              <div className='card1 md:w-max p-2 bg-amber-300  md:h-max hover:scale-95  transition-all ease-linear rounded-lg relative' onMouseEnter={()=>handleHomeNameMen(true)}
              onMouseLeave={()=>handleHomeNameMen(false)}>
                <img src="./public/Home/1.png" alt="" className="hover:  h-full w-full object-contain transition-all ease-linear rounded-lg" />
                  <button className='absolute text-white hover:scale-110 transition-all md:right-16 right-10 flex gap-2 items-center  bottom-14 rounded-lg border-[1px] px-4 py-2 '><NavLink to="/men">Show now</NavLink><FaArrowRight/></button>
                
              </div>
              <div className='card2 md:w-max p-2 bg-amber-300  relative  md:h-max hover:scale-95 transition-all ease-linear rounded-lg'
              onMouseEnter={()=>handleHomeNameWomen(true)}
              onMouseLeave={()=>handleHomeNameWomen(false)}>
                <img src="./public/Home/2.png" alt="" className="hover:  h-full w-full object-contain transition-all ease-linear rounded-lg" />
                <button className='absolute text-white md:left-12 left-6 bottom-14 flex gap-2 items-center hover:scale-110 transition-all  rounded-lg border-[1px] px-4 py-2 '><NavLink to="/women">Show now </NavLink><FaArrowRight/></button>
              </div>
              {/* <div className='card_text absolute w-1/4 -z-10 h-44 flex justify-center items-center'> */}
                <h1 className='transition-all absolute ease-linear text-4xl delay-1000 font-serif '>{sectionText}</h1>
              {/* </div> */}
      </div>



      {/* Mens Section */}
      {/* <ul className='flex px-3 py-5 flex-wrap justify-center gap-x-10 gap-y-14'>
        {
          MTshirt.map((CurrTshirt) => {
            return (
              <MensCard CurrTshirt={CurrTshirt} key={CurrTshirt.id} handleCarItem={handleCarItem}/>
            );
          })
        }
      </ul> */}

    </div>
  );
};

export default Home;
