import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center px-6 md:px-[5%] py-4">
        {/* Logo */}
        <h1 className="font-semibold tracking-[0.5rem] text-3xl md:text-4xl text-[#233E3E]">Yoga</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center justify-between gap-6 text-base md:text-xl">
        <li className="cursor-pointer text-[#3F8C85] hover:text-[#254A48]">Home</li>
          <li className="cursor-pointer text-[#3F8C85] hover:text-[#254A48]">Our Purpose</li>
        <li className="cursor-pointer text-[#3F8C85] hover:text-[#254A48]">Yoga By Organ</li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-[#254A48] rounded-full px-2">
          <input
            type="text"
            placeholder="Search"
            className="text-white px-4 py-2 bg-transparent outline-none placeholder-white"
          />
          <IoIosSearch className="text-white h-5 w-5" />
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden text-3xl text-[#254A48]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Sidebar for mobile */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-2/3 h-screen bg-white shadow-md z-50 px-6 py-10 space-y-6 font-medium text-lg">
          <li className="cursor-pointer text-[#3F8C85] hover:text-[#254A48]">Home</li>
          <li className="cursor-pointer text-[#3F8C85] hover:text-[#254A48]">Our Purpose</li>
          <li className="cursor-pointer text-[#3F8C85] hover:text-[#254A48]">Yoga By Organ</li>

          <div className="flex items-center bg-[#254A48] rounded-full px-2 mt-4">
            <input
              type="text"
              placeholder="Search"
              className="text-white px-4 py-2 w-full bg-transparent outline-none placeholder-white"
            />
            <IoIosSearch className="text-white h-5 w-5" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
