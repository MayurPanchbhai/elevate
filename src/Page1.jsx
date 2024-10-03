import React, { useContext, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { DataContext } from './Context';
import { useNavigate } from 'react-router-dom';



function Page1() {

const {user, handleLog , setUserForm , setUser,userForm } = useContext(DataContext);




const [oldUser , setOldUser]= useState(true);


// setting and checking details of the user
const handleFormSub = (e)=>{
  e.preventDefault();
  setUser((prev) =>([userForm , ...prev]));
  console.log(user);
  
}

// taking user input 
const handleuserInfo = (e) =>{
  setUserForm((prev)=>({...prev, [e.target.name]:e.target.value}))

}

const navigate = useNavigate();
    



  
  if(oldUser){
    return (
      <div className="w-full bg-black h-screen flex justify-center items-center ">
        <form className="w-80 bg-white h-max flex flex-col py-10 rounded-lg gap-8 px-5" action='submit' onSubmit={handleFormSub}>
          <div className='flex justify-center '>
            <h1 className='font-bold text-3xl uppercase flex' >ele<p className='text-red-800'>vate</p></h1>
          </div>
  
          <div className='flex flex-col '>
            <label className='text-left flex items-center gap-1 ' > <FaUser /> Username</label>
            <input type="text"  className='input border-b-2 border-blue-800 h-10 px-2' placeholder=" enter your username" required />
          </div>
  
          <div className='flex flex-col '>
            <label className='text-left flex items-center gap-1 ' > <MdOutlinePassword /> Password</label>
            <input type="password"  className='input border-b-2 border-blue-800 h-10 px-2' placeholder=" enter your password" required / >
          </div>
  
  
          <div className='flex flex-col items-center'>
            <button type="submit" className='bg-blue-900 w-10/12 text-white py-2 rounded-lg ' >LOGIN</button>
            <h1 className='flex gap-1 cursor-pointer' onClick={()=>setOldUser(!oldUser)}>New user? <p className='text-red-700 hover:text-blue-800 '>Sign up</p> </h1>
          </div>
        </form>
        
      </div>
    )
  }
  else{
    return (
      <div className="w-full bg-black h-screen flex justify-center items-center ">
        <form className="w-80 bg-white h-max flex flex-col py-10 rounded-lg gap-8 px-5" action='submit' >
          <div className='flex justify-center '>
            <h1 className='font-bold text-3xl uppercase flex' >ele<p className='text-red-800'>vate</p></h1>
          </div>
  
          <div className='flex flex-col '>
            <label className='text-left flex items-center gap-1 ' > <FaUser /> Username</label>
            <input type="text"  className='input border-b-2 border-blue-800 h-10 px-2' placeholder="enter your username" required value={userForm.username} name="username" onChange={handleuserInfo} />
          </div>
  
          <div className='flex flex-col '>
            <label className='text-left flex items-center gap-1 ' > <MdOutlinePassword /> Password</label>
            <input type="password"  className='input border-b-2 border-blue-800 h-10 px-2' placeholder="enter your password" required value={userForm.password} name="password" onChange={handleuserInfo} / >
          </div>
          
          <div className='flex flex-col '>
            <label className='text-left flex items-center gap-1 ' > <FaUser /> Email</label>
            <input type="email"  className='input border-b-2 border-blue-800 h-10 px-2' placeholder="enter your email" required value={userForm.email} name="email" onChange={handleuserInfo} />
          </div>
          <div className='flex flex-col '>
            <label className='text-left flex items-center gap-1 ' > <FaUser /> Number</label>
            <input type="number"  className='input border-b-2 border-blue-800 h-10 px-2' placeholder="enter your mobile number" required value={userForm.number} name="number" onChange={handleuserInfo} />
          </div>
  
  
          <div className='flex flex-col items-center'>
            <button type="submit" className='bg-blue-900 w-10/12 text-white py-2 rounded-lg ' onClick={handleFormSub}>LOGIN</button>
            <h1 className='flex gap-1 cursor-pointer' onClick={()=>setOldUser(!oldUser)}>Alredy user? <p className='text-red-700 hover:text-blue-800 '>Sign In</p> </h1>
          </div>
        </form>
        
      </div>
    )
  }
}





  

export default Page1
