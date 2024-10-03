import React, { useContext } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { DataContext } from './Context';
import { useNavigate } from 'react-router-dom';



function Page2() {

const {name , handleLog } = useContext(DataContext);

const navigate = useNavigate();
    

    const handleFormSub = (e) =>{
      e.preventDefault();
      navigate('/');
      console.log("form submi");
      
    }



  return (
    <div className="w-full bg-black h-screen flex justify-center items-center">
      <form className="w-80 bg-white h-5/6 flex flex-col py-10 rounded-lg gap-8 px-5" action='submit' onSubmit={handleFormSub}>
        <div className='text-center '>
          <h1 className='font-bold text-3xl'>Login page 2</h1>
        </div>

        <div className='flex flex-col '>
          <label className='text-left flex align-middle' > <FaUser /> Username</label>
          <input type="text"  className='input border-b-2 border-blue-800 h-10 px-2' placeholder=" enter your username" required />
        </div>

        <div className='flex flex-col '>
          <label className='text-left flex align-middle' > <MdOutlinePassword /> Password</label>
          <input type="password"  className='input border-b-2 border-blue-800 h-10 px-2' placeholder=" enter your password" required / >
        </div>


        <div className='flex justify-center'>
          <button type="submit" className='bg-blue-900 w-10/12 text-white py-2 rounded-lg ' >LOGIN</button>
        </div>
      </form>
      
    </div>
  )
}

export default Page2
