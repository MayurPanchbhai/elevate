import React, { useContext, useState } from 'react';
import { DataContext } from './Context';
import { NavLink, useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { theme, cart } = useContext(DataContext);
  const [cartState, setCartState] = useState(cart); // Use state to manage cart

  const [goTo, setGoTo] = useState(true);



  const handleCartItemDelete = (item) => {
    const updatedCart = cartState.filter((current) => current !== item);
    setCartState(updatedCart);
  };

  let totalActualPrice = 0;
  let TotalItems = 0;
  let ItemPrice = 0
  cartState.map((obj)=>{
    let rawAcSum = obj.ActualPrice * obj.quantity;//before discount
    let rawSum = obj.price * obj.quantity;//after discount
    totalActualPrice= totalActualPrice + rawAcSum;
    ItemPrice= ItemPrice + rawSum;

    TotalItems++;
  })

  console.log(cartState);
  
  

  // Function to handle quantity changes
  const handleQuant = (operation, index) => {
    const updatedCart = [...cartState]; // Copy cartState

    // Update the quantity based on the operation
    if (operation === "+") {
      updatedCart[index].quantity += 1; // Increase quantity
    } else if (operation === "-" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; // Decrease quantity
    }

    setCartState(updatedCart); // Update the cart state
    console.log(cartState);
    console.log(cart);
  };

  const handleGOTO = () => {
    if (goTo) {
      navigate('/men');
    } else {
      navigate('/women');
    }
  };

  const handleDir = () => {
    setGoTo(!goTo);
  };

  if (cartState.length === 0) {
    return (
      <div className={`${theme ? "bg-black text-white" : "bg-white text-black"} h-[100vh]`}>
        <div className={`${theme ? "bg-black text-white" : "bg-white text-black"} flex justify-center w-full pt-24`}>
          <h1 className='font-semibold font-serif capitalize text-2xl'>Cart Is empty</h1>
        </div>
        <h2 className='text-center pt-3 cursor-pointer capitalize'>Choose Section</h2>
        <div className='flex justify-center mt-4' onClick={handleDir}>
          <div className={`border-2 bg-white px-7 w-36 rounded-full ${goTo ? "" : ""}`}>
            <h1 className={`h-full text-center py-5 px-5 rounded-full text-white transition-all duration-1000 ease-in-out ${goTo ? "-translate-x-7 bg-blue-800" : "translate-x-7 bg-red-800"}`}>{goTo ? "Men" : "Women"}</h1>
          </div>
        </div>
        <h2 className='text-center pt-3 cursor-pointer capitalize' onClick={handleGOTO}>Click here</h2>
      </div>
    );
  }

  return (
    <div className={`${theme ? "bg-black text-white" : "bg-white text-black"}  w-full  md:h-max  flex md:pt-32 pb-20 md:justify-start flex-col items-center pt-24 md:flex-row gap-3 `}>
      <div className='w-11/12  md:w-8/12 md:ml-10 h-max'>
        <ul className=' border-[1px] rounded-lg px-5 md:mb-52'>
          <li className='flex justify-between h-16 items-center border-b-2'>
            <h1 className='flex gap-2 text-sm'>Delivery to: <p className='capitalize font-medium '>the username</p></h1>
            <button className={`${theme?"":"text-blue-800  bg-white "} text-sm border-[1px] px-4 py-1 rounded-lg flex items-center font-medium`}>Change</button>
          </li>

          {cartState.map((items, index) => (
            <li className='flex relative  py-2 border-b-[1px]' key={index} >
              <div className='w-28'>
                <img src={items.ImSrc} alt={items.name} className='h-32' />
              </div>
              <div className='px-3 flex flex-col gap-2'>
                <NavLink className="flex"><p className='uppercase font-medium mr-1'>{items.name } </p> | {items.brand}</NavLink>
                <div className={`flex gap-2 text-xs capitalize ${theme?"text-white":"text-slate-500 "} `}>
                  <p>Size: {items.selectedSize}</p>
                  <p>Color: {items.color}</p>
                </div>
                <div className={`flex gap-2 items-end `} >
                  <p className='text-sm line-through ${theme?"text-white":"text-slate-500"}'>₹{items.ActualPrice}</p>
                  <p className={` font-medium `}>₹{items.price}</p>
                  <p className={`text-green-600 font-medium text-sm`}>{(((items.ActualPrice - items.price) / items.ActualPrice) * 100).toFixed(0)}% Off</p>
                </div>
              </div>
              <div className='flex flex-col absolute md:right-2 right-0 top-11 md:top-0 h-full justify-center '>
                <div className="flex">
                  <button onClick={() => handleQuant("-", index)} className={`md:h-10 h-6 px-4 md:px-3 font-semibold rounded-md border-[1px] ${theme ? "text-white border-slate-700 " : ""}`}>-</button>
                  <p className={`md:h-10 h-6 px-4 md:w-3 w-2 flex justify-center md:text-base text-sm items-center font-semibold border-y-[1px] ${theme ? "text-white border-slate-700 " : ""}`}>{items.quantity}</p> {/* Display quantity */}
                  <button onClick={() => handleQuant("+", index)} className={`md:h-10 h-6 px-4 md:px-3 font-semibold rounded-md border-[1px] ${theme ? "text-white border-slate-700 " : ""}`}>+</button>
                </div>
                <button onClick={()=>handleCartItemDelete(items)} className='text-sm md:mt-3'>Remove</button>
                {/* <p>{ items.price*items.quantity}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`border-[1px] px-3 py-3 w-11/12 md:w-3/12 md:fixed md:top-32 md:right-10 rounded-lg ${theme?"bg-black":"bg-white"} `}>
        <h2 className={`border-b-[1px] px-3 uppercase font-medium text-base ${theme?"":"text-slate-500"} pb-2 `}>Price Details</h2>
        <ul>
          <li className='py-3 text-base flex justify-between px-3'><p>Price ({TotalItems} items)</p><p className=''>₹{totalActualPrice + 108}</p></li>
          <li className='py-3 text-base flex justify-between px-3'><p>Discount</p><p className='text-[#388e3c] '>-₹{totalActualPrice - ItemPrice}</p> </li>
          <li className='py-3 text-base flex justify-between px-3'><p>Coupons for you</p><p className='text-[#388e3c] '>-₹108</p> </li>
          <li className='py-3 flex justify-between px-3 border-y-[1px] border-dashed border-slate-300 font-semibold text-base'><p className=''>Total Amount</p><p>₹{ItemPrice}</p> </li>
        </ul>
        <h2 className={`px-3 py-2 text-[#388e3c]  text-sm font-medium `}>You will save ₹{totalActualPrice-ItemPrice + 108} on this order</h2>
      </div>
    </div>
  );
}

export default Cart;
