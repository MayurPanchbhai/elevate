import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context";
import { useParams } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import './mensDetails.css';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export const MensDetails = () => {
    const { theme, MTshirt , handleLiked ,handleCarItem } = useContext(DataContext);
    const paar = useParams();

    const Specs = MTshirt.filter((curr) => curr.id == paar.id);
    const { name, ImSrc,price, images , liked , id , type ,ActualPrice , color ,brand ,quantity ,description ,sizes , rating} = Specs[0]; 

    const [cardLiked , setCardLiked] = useState(liked);
    const [selectSize , setSelectSize]= useState(sizes[0]);
    const [whichSize , setWhichSize]=useState(false);
    const [pieces , setPieces] = useState(quantity);


    const handleQuant = (operation)=>{        
        if(operation == "+" ){
            setPieces(pieces+1);
        }
        else if(operation == "-" && pieces > 1){
            setPieces(pieces-1);
        }
        
    }

    const handleIButton= () =>{
    }


    const handleCardLiked = (event) =>{
        handleLiked(event);
        setCardLiked(!liked);
    } 

    const handleSizeSelect = (size) =>{
        setWhichSize(!whichSize);
        
    }

    // dynamic background color
    const bgColor = {
        backgroundColor:color,
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        
    }


    const [imgCount, setImgCount] = useState(0); 
    const [carImg, setCarImg] = useState(images.ImgMain[0]); 
    const [prevIndex, setPrevIndex] = useState(null);
    const [currIndex, setCurrIndex] = useState(0); 

    const handlePreview = (direction) => {
        if (direction === "next") {
            setPrevIndex(currIndex); 
            const nextIndex = imgCount < images.ImgMain.length - 1 ? imgCount + 1 : 0;
            setImgCount(nextIndex); 
            setCurrIndex(nextIndex); 
        } else if (direction === "prev") {
            setPrevIndex(currIndex); 
            const prevIndex = imgCount > 0 ? imgCount - 1 : images.ImgMain.length - 1;
            setImgCount(prevIndex); 
            setCurrIndex(prevIndex); 
        }
    };

    useEffect(() => {
        setCarImg(images.ImgMain[imgCount]);
    }, [imgCount]); 

    return (
        <div className={`${theme ? "bg-black text-white" : ""} h-full md:h-full py-20  flex flex-col items-center`}>
            <div className="flex w-full md:justify-around flex-col items-center md:items-start md:pt-3 md:flex-row">
                <div className="rotating-text border-cyan-100  border-[1px] md:w-4/12 w-5/6 rounded-md py-4">
                    <div className="flex flex-col items-center">
                        <img
                            src={`.${carImg}`}
                            alt=""
                            className={`imgesDetails ${imgCount === currIndex ? 'active' : ''} ${imgCount === prevIndex ? 'exiting' : ''} object-contain md:w-[90%] md:h-96 h-44 w-44`} />
                        <div className="flex justify-between px-4 py-3 w-full">
                            <button className="border border-cyan-100 rounded-xl px-3 py-2" onClick={() => handlePreview("prev")}><GrFormPrevious /></button>
                            <button className="border border-cyan-100 rounded-xl px-3 py-2" onClick={() => handlePreview("next")}><MdNavigateNext /></button>
                        </div>
                    </div>

                    <div className="flex px-5 justify-between">
                        {images.ImgMain.map((curr, index) => (
                            <img src={`.${curr}`} alt={index} key={index} className={` h-20 object-cover
                                
                            
                            ${imgCount == index?" transition ease-in-out delay-150 -translate-y-1 scale-110  duration-300    5000ms":""}    `} />
                        ))}
                    </div>
                </div>
                <div className="md:w-6/12 w-full  flex justify-center md:block" >
                    <div className="flex justify-end">
                        <button className="flex-none absolute md:static top-20 left-10 md:right-5 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full  text-white border bg-slate-300  mt-2 md:mt-0" aria-label="Like" onClick={()=>handleCardLiked (id)}>
                    <svg width="20" height="20" fill="currentColor" aria-hidden="false">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"  className={`${cardLiked?"text-blue-800":""}`} />
                    </svg>

                    </button>
                    </div>
                    <div className="flex w-5/6 flex-col mt-4 relative gap-2 md:mt-0">
                        <h1 className="font-semibold text-xl uppercase ">{name}</h1>
                        <h1 className="font-normal text-sm capitalize ">{description}</h1>
                        <p className="text-green-600 font-semibold text-xs">Special price</p>
                        <h1 className="flex gap-3 text-2xl items-center font-medium">₹{price} <p className="text-sm line-through text-green-600">₹{ActualPrice}</p><p className="text-sm text-green-600">{(((ActualPrice-price)/ActualPrice)*100).toFixed(0)}% Off</p> <IoIosInformationCircleOutline className="I-card-i text-slate-400" onMouseEnter={handleIButton}/></h1>

                        {/* <div className="I-card absolute border-2 left-40 top-28 none ">
                            <h1>hello</h1>
                        </div> */}

                        <div className="flex items-center  gap-1 w-max px-2 rounded-xl text-white text-sm bg-green-600">
                            <p>{rating }</p>
                            <FaStar />
                        </div>


                        <p className={`text-sm capitalize flex gap-2 ${theme?"text-slate-300":"text-black"} `}>Color : {color} <p className={`w-6 h-6 rounded-full  `} style={bgColor}></p> </p>

                        <div>
                            <div className="flex gap-7 pt-2 ">
                                <h1 className={`${theme?"text-yellow-400":""}`}>Sizes</h1>
                                <div className="flex">
                                    {
                                        sizes.map((curr,index,arr)=>{
                                            return(
                                                <div className={`${index===0?"rounded-s-lg":""} ${selectSize == curr ? "bg-blue-800":""} ${index== arr.length-1?"rounded-e-lg":""}  border-[1px] w-8 h-8 px-6 text-sm flex justify-center items-center ${theme?"border-slate-700 ":""} cursor-pointer  `} key={curr} onClick={()=>setSelectSize(curr)} >
                                                <input 
                                                    type="radio" 
                                                    value={curr} 
                                                    name={curr} 
                                                    readOnly
                                                    checked={selectSize === curr} 
                                                    className="sr-only" />

                                                <p className={`${selectSize == curr ? "text-white":""}`} >{curr}</p>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div  className="flex flex-col md:flex-row md:space-x-4 my-4 text-sm font-medium">
                            <div className="flex-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                                <button className={`h-10  px-4 md:px-6 font-semibold rounded-md border-[1px] ${theme ? "text-white border-slate-700 " : ""}`}  >
                                    {/* onClick={handleNavigate} */}
                                    Buy now
                                </button>
                                <button className={`h-10   px-4  md:px-6 font-semibold rounded-md border-[1px] ${theme ? "text-white border-slate-700 " : ""}`}  onClick={()=>handleCarItem(id ,"WTshirt" , name , selectSize ,pieces)}>
                                    
                                    Add to cart
                                </button>
                                <div className="flex">
                                    <button onClick={()=>handleQuant("-")}  className={`h-10 px-4 md:px-3 font-semibold     rounded-md border-[1px] ${theme ? "text-white border-slate-700 " : ""}`}>-</button>
                                    <p className={`h-10 px-4 md:w-3 w-2 flex justify-center items-center font-semibold border-y-[1px] ${theme ? "text-white     border-slate-700 " : ""}`}>{pieces}</p>
                                    <button onClick={()=>handleQuant("+")}  className={`h-10 px-4 md:px-3 font-semibold     rounded-md border-[1px] ${theme ? "text-white border-slate-700 " : ""}`}>+</button>

                                </div>
                            </div>
            
                        </div> 
                    </div>                   
                </div>
            </div>

            
            {/* <h1>{name}</h1> */}
        </div>
    );
};
