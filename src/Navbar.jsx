import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { DataContext } from './Context';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';  // Hamburger icon
import { AiOutlineClose } from 'react-icons/ai';  // Close icon

import './index.css';

function Navbar() {
  const { theme, handleTheme } = useContext(DataContext);
  const navigate = useNavigate();
  
  // State to toggle the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex justify-between items-center py-5 px-6 md:px-14 w-full fixed backdrop-blur-sm z-50 ${theme ? 'text-white' : 'bg-[#b7ff0000] text-black'} border-b-[1px]`}>
      {/* Logo */}
      <div className="w-6/12 md:w-5/12">
        <h2
          className="font-serif uppercase font-bold cursor-pointer text-lg md:text-2xl flex " 
          onClick={() => navigate('/')}
        >
          Ele<p className='text-red-700'>vate</p>
        </h2>
      </div>

      {/* Links (hidden on small screens, visible on medium and up) */}
      <div className="hidden md:flex justify-end gap-6 md:gap-10 w-3/12">
        <NavLink to="/men" className="hover:text-blue-800 men">
          Mens
        </NavLink>
        <NavLink to="/women" className="hover:text-red-700 women">
          Women
        </NavLink>
      </div>

      {/* Right section: Theme toggle and cart icon */}
      <div className="flex gap-4 md:gap-8 w-6/12 md:w-3/12 justify-end items-center">
        <button
          onClick={handleTheme}
          className="py-1 px-2 md:px-3 border-[1px] rounded-lg text-xl md:text-xl"
        >
          {theme ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <NavLink to="/cart" className="text-xl md:text-2xl">
          <FaShoppingCart />
        </NavLink>
        
        {/* Hamburger icon for mobile screens */}
        <button onClick={toggleSidebar} className="md:hidden text-2xl">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Sidebar (only visible on mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-36 backdrop-blur-lg text-black z-50 transition-transform duration-300 bg-slate-200 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center pt-4 px-4 backdrop-blur-sm cdf">
          <h2 className="font-bold text-xl">Menu</h2>
          {/* Close button */}
          <button onClick={toggleSidebar} className="text-2xl">
            <AiOutlineClose />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-4 py-5 backdrop-blur-3xl z-[52] bg-slate-200">
          <NavLink
            to="/men"
            className="hover:text-blue-800 men"
            onClick={toggleSidebar}
          >
            Mens
          </NavLink>
          <NavLink
            to="/women"
            className="hover:text-red-700 women"
            onClick={toggleSidebar}
          >
            Women
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
