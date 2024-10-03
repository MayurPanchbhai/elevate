import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'

function HeroCardImg({animatedImg}) {
// const {heroCardText } = useContext(DataContext);

const [textHeroCard , setTextHeroCard] = useState(null);
let [currentIndex, setCurrentIndex] = useState(0);


const [prevIndex , setPrevIndex] = useState(null)


useEffect(()=>{
    

    const interval = setInterval(() => {
        setPrevIndex(currentIndex);
        setTextHeroCard(animatedImg[currentIndex]);
        if(currentIndex <= animatedImg.length-2 ){
            setCurrentIndex(currentIndex++);
        }else{
            setCurrentIndex(currentIndex = 0);
        }
    }, 500);


    return() =>clearInterval(interval);

},[textHeroCard])

  return (
    <div className='bg-red-800 w-28 h-16 flex justify-center items-center rounded-lg mt-3 '>
      <img src={textHeroCard} alt="" className={`transition-all h-[90%] w-full object-contain `} />
    </div>
  )
}

export default HeroCardImg
