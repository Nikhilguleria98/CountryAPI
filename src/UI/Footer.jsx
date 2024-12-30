import React from "react";
import { TiLocation } from "react-icons/ti";
import { TbMailFilled } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const Footer = () => {
  const footerData = [
    {
      id: 1,
      icon: "TiLocation",
      name: "Find us",
      details: "Chandigarh , India",
    },
    {
      id: 2,
      icon: "IoCall",
      name: "Call us",
      details: "+91 9876543210",
    },
    {
      id: 3,
      icon: "TbMailFilled",
      name: "Mail Us",
      details: "xyz@gmail.com",
    },
  ];
  const iconMap = {
    TiLocation: <TiLocation />,
    IoCall: <IoCall />,
    TbMailFilled: <TbMailFilled />,
  };

  return (
    <>
      <div className="">
      <div className="text-white  flex flex-wrap justify-around gap-5 sm:gap-0  p-2  bg-zinc-900">
        {footerData.map((data) => {
          return (
            <div key={data.id} className="flex gap-3 justify-center">
              <div className="flex items-center">
              <p className="text-blue-400 text-2xl">{iconMap[data.icon]}</p>
              </div>
         <div>
         <p>{data.name}</p>
         <p>{data.details}</p> 
         </div>
            </div>
          );
        })}
      </div>
      <div className=" gap-5 flex justify-around p-2">
        <div>
        <p>Copyright @ all rights reserverd</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
            <NavLink to="/" className={({isActive})=>`${isActive?"border-b-2":""}`}>Home</NavLink>
            <NavLink to="/contact" className={({isActive})=>`${isActive?"border-b-2":""}`}>Contact Us</NavLink>
            <NavLink to="/country" className={({isActive})=>`${isActive?"border-b-2":""}`}>Country</NavLink>
            <NavLink to="/about" className={({isActive})=>`${isActive?"border-b-2":""}`}>About Us</NavLink>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
