import React, { useContext, useState } from 'react'
import { DataContext } from '../Context'
import { NavLink, useNavigate } from 'react-router-dom';

function MensCard({CurrTshirt , handleCarItem }) {

  const {id , images ,name , price , type ,sizes , ImSrc , liked ,ActualPrice , root} = CurrTshirt;

  const navigate = useNavigate();

  
    const {theme , handleLiked } = useContext(DataContext);

    // let likeOrNot ()={
    //    if(liked){
    //         true
    //     } else{
    //         false
    //     }
    // } 

    const [cardLiked , setCardLiked] = useState(liked);


    const handleCardLiked = (event) =>{
        handleLiked(event);
        setCardLiked(!liked);
    }


    const handleNavigate = () =>{
      navigate(`/${root}/${id}`)
      console.log(root);
      
    }
    // flex-none w-full h-48 md:w-48 md:h-auto relative rounded-t-lg md:rounded-l-[7px] md:rounded-r-none overflow-hidden
    // absolute inset-0 w-full h-full object-cover

  return (
    <li className={`flex flex-col md:flex-row font-sans rounded-lg border-[1px]  w-10/12 md:w-max ${theme ? "text-white" : ""} `} onClick={handleNavigate}>
    <div className="flex-none w-full h-48 md:w-48 md:h-auto relative rounded-t-lg md:rounded-l-[7px] md:rounded-r-none overflow-hidden ">
        <img src={ImSrc} alt="" className="absolute inset-0 w-full h-full object-contain  " loading="lazy" />
    </div>
    <div className="flex-auto p-4 md:p-6">
        <div className="flex flex-wrap">
            <h1 className="flex-auto text-base md:text-lg font-semibold">
                {name}
            </h1>
            <div className="text-base md:text-lg font-semibold">
                ₹{price}
                <p className="text-sm text-green-600 line-through">₹{ActualPrice}</p>
            </div>
            <div className="w-full flex-none text-sm font-medium mt-2">
                {type}
            </div>
        </div>
        <div className="flex items-baseline mt-4 pb-4 ">
            <div className={`space-x-2 flex  text-xs md:text-sm items-center justify-between ${theme?" text-yellow-400":"text-slate-700"} w-full`}>
                <div className='flex gap-2 items-center justify-start'>
                    <h1 className="flex-auto text-base md:text-base">
                        Sizes
                    </h1>
                    <label className={`flex flex-wrap w-5/6 border-[1px]  rounded-lg ${theme?"border-slate-700 ":""} `}>
                        {
                            sizes.map((size , index)=>{
                                return(
                                <div className={`w-8 md:w-9 h-8 md:h-9 rounded-lg flex items-center justify-center      text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900${theme ? "border-[1px] text-white" : ""}`} key={index}>
                                {size}
                                </div>)
                            })
                        }
                    
                    
                    </label>
                </div>
                
                <button className="flex-none flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full text-white border  bg-slate-200  mt-2 md:mt-0" aria-label="Like" >
                {/* onClick={()=>handleCardLiked(id)} */}
                <svg width="20" height="20" fill="currentColor" aria-hidden="false">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" className={`${cardLiked?"text-blue-800":""}`}  />
                </svg>
            </button>
                
            </div>
        </div>
        <hr className=' text-slate-200 w-72 pt-4' />
        {/* <div  className="flex flex-col md:flex-row md:space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <button className={`h-10 px-4 md:px-6 font-semibold rounded-md border-[1px] ${theme ? "text-white" : "border-black"}`} onClick={handleNavigate} >
                    Buy now
                </button>
                <button className={`h-10 px-4 md:px-6 font-semibold rounded-md border-[1px] ${theme ? "text-white" : "border-black"}`} onClick={()=>handleCarItem(id)}>
                    Add to cart
                </button>
            </div>
            <button className="flex-none flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-md text-slate-300 border border-slate-200  mt-2 md:mt-0" aria-label="Like" onClick={()=>handleCardLiked(id)}>
                <svg width="20" height="20" fill="currentColor" aria-hidden="false">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" className={`${cardLiked?"text-red-800":""}`}  />
                </svg>
            </button>
        </div> */}
        <p className="text-xs md:text-sm ">
            Free shipping on all orders.
        </p>
    </div>
</li>


  )
}

export default MensCard
