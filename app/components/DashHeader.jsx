"use client";
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const DashHeader = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState("");

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("useremail");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!session) return null; // Don't render header until session is available

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-sm font-extrabold text-white">Welcome {session.user?.name}</h1>

      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        
        <button onClick={toggleTheme} className="text-white">
          {theme === "dark" ? <FaRegMoon /> : <FiSun />}
        </button>

        <p className="text-white text-sm">Signed in as {session.user?.email}</p>

        {session.user?.image && (
          <img
            src={session.user.image}
            alt="GitHub profile"
            className="w-10 h-10 rounded-full"
          />
        )}

        <button
          onClick={() => signOut()}
          className="text-red-500 hover:text-red-600 font-bold text-sm px-4 py-2 rounded border-2 border-red-500 hover:border-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default DashHeader;