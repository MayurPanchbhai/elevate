import './tshirtCar.css';
import { DataContext } from './Context';
import { useContext, useEffect, useState } from 'react';

function TshirtCar({Carousel}) {
    // const { MTshirt } = useContext(DataContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prevIndex) => 
                prevIndex === Carousel.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); 

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentIndex, Carousel.length]);

    return (
        <div className='main-container w-full'>
            <div className='inner-div w-full md:w-96 md:h-72'>
                {Carousel.map((tshirt, index) => (
                    <img  
                        src={tshirt.ImSrc} 
                        alt={tshirt.name} 
                        key={tshirt.id} 
                        className={`tshirtcar ${index === currentIndex ? 'active' : ''} ${index === prevIndex ? 'exiting' : ''} cursor-grab w-full h-96 md:h-72 object-contain md:w-[600px]`}
                    />
                ))}
            </div>
        </div>
    );
}

export default TshirtCar;
