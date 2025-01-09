import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

const [isMenuOpen , setIsMenuOpen] = useState(false)

const handleToogle=()=>{
    setIsMenuOpen(!isMenuOpen)
}
  return (
    <>
      <header>
        <nav className="relative">
          <div className="bg-zinc-900 flex justify-between md:justify-around p-6">
          <div>
            <h1 className="font-bold">World Atlas</h1>
          </div>
          <div>
            <ul className="hidden md:flex gap-8 font-semibold">
              <li>
                <NavLink to="/" className={({isActive})=>`hover:text-gray-500 duration-200  ${isActive?"border-b-2":""}`}>
                Home

                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive})=>`hover:text-gray-500 duration-200  ${isActive?"border-b-2":""}`}>
                About Us

                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className={({isActive})=>`hover:text-gray-500 duration-200  ${isActive?"border-b-2":""}`}>
                Country

                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/contact" className={({isActive})=>`hover:text-gray-500 duration-200  ${isActive?"border-b-2":""}`}>
                Contact Us

                </NavLink>
     
                </li> */}
            </ul>
            
              <button onClick={handleToogle} className="flex md:hidden items-center">
             {isMenuOpen? <RxCross2 className="text-xl" />:<FaBars />
             }
              </button>



          </div>
          </div>
          
{
    isMenuOpen && (
        <>
<div className="absolute right-0 bg-zinc-900 w-48 ">
         <ul className="flex md:hidden flex-col gap-8 font-semibold px-4 py-7">
              <li>
                <NavLink to="/" onClick={handleToogle} className={({isActive})=>`hover:text-gray-500 duration-200  ${isActive?"border-b-2":""}`}>
                Home

                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleToogle} className={({isActive})=>`hover:text-gray-500 duration-200  ${isActive?"border-b-2":""}`}>
                About Us

                </NavLink>
              </li>
              <li>
                <NavLink to="/country" onClick={handleToogle} className={({isActive})=>`hover:text-gray-500 duration-200  ${isActive?"border-b-2":""}`}>
                Country

                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/contact" onClick={handleToogle} className={({isActive})=>`hover:text-gray-500 duration-200  ${isActive?"border-b-2":""}`}>
                Contact Us

                </NavLink>
              </li> */}
  
            </ul>
         </div>
        </>
    )
}
         
        </nav>
      </header>
    </>
  );
};

export default Header;
