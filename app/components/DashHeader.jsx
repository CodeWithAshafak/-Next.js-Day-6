"use client"
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const DashHeader = () => {
  const { theme, setTheme } = useTheme();

  const [user, setUser] = useState('');
  const handleLogout = () => {
    localStorage.removeItem("useremail");
    window.location.href = "/";
  };

  useEffect(() => {
    const user = localStorage.getItem("useremail");
    setUser(user);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button onClick={toggleTheme}>
        {theme === "dark" ? <FaRegMoon />: <FiSun />}
      </button>
      <div className="flex items-center">
        <p className="mr-4">{user}</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
       
      </div>
    </header>
  );
};

export default DashHeader;

