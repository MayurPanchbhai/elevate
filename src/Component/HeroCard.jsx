import { useEffect, useState } from "react";


function HeroCard({animatedText , time}) {
// const {heroCardText } = useContext(DataContext);

const [textHeroCard , setTextHeroCard] = useState(null);
let [currentIndex, setCurrentIndex] = useState(0);


const [prevIndex , setPrevIndex] = useState(null)


useEffect(()=>{
    

    const interval = setInterval(() => {
        setPrevIndex(currentIndex);
        setTextHeroCard(animatedText[currentIndex]);
        if(currentIndex <= animatedText.length-1  ){
            setCurrentIndex(currentIndex++);
        }else{
            setCurrentIndex(currentIndex = 0);
        }
    }, time);


    return() =>clearInterval(interval);

},[textHeroCard])

  return (
    <div className='bg-red-800 w-28  h-16 flex justify-center items-center rounded-lg '>
      <h1 className={`font-bold capitalize text-white text-2xl transition-all `}  >{textHeroCard}</h1>
    </div>
  )
}

export default HeroCard
