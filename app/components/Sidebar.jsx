'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
   <div className='bg-gray-800 h-18'>

       <button
        onClick={toggleSidebar}
        className="p-4 top-1 left-4 z-0 text-white bg-gray-800  rounded"
         >
          <GiHamburgerMenu />
      </button>

      
      <aside
      
        className={`top-0  left-0 h-screen w-64 bg-gray-900 p-6 mt-18
          text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 
        `}
      >
        <nav className="space-y-4 flex flex-col">
          <Link href="/dashboard/home">Home</Link>
          <Link href="/dashboard/insertcat">Insert Category</Link>
          <Link href="/dashboard/insertproduct">Insert Product</Link>
          <Link href="/dashboard/display">Display</Link>
          <Link href="/dashboard/search">Search</Link>
        </nav>
      </aside>

      </div>
    </>
  );
}

export default Sidebar;
















