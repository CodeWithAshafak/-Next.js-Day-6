
'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Login = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    email:" ",
    password: ""
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    router.push(`/dashboard`);

    localStorage.setItem("username", input.email.split('@')[0]);
    localStorage.setItem("useremail", input.email);

    router.push(`/dashboard`);
    // const api = "http://localhost:3000/api/signin";
    // try {
    //   const response = await axios.post(api, input);
    //   console.log(response.data.message)
    //   localStorage.setItem("useremail", response.email);
    //   alert(response.data.message);
    //   
    // } catch (error) {
    //   console.log(error.response.data.message);
    // }
  };
  return (
    <>
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          textDecoration: "underline",
        }}
      >
        Log in 
      </h1>
      <form className="w-full max-w-lg m-auto p-3 shadow-2xs ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Enter email
            </label>

            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="your email "
              name="email"
              value={input.email}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              name="password"
              value={input.password}
              onChange={inputHandle}
            />
           
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full flex md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              className="border border-amber-900 bg-black p-3 text-cyan-200 m-2 hover:text-black hover:bg-amber-100 rounded-sm cursor-pointer"
              onClick={handleSubmit}
            >
              Log In 
            </button>
            <Link href='/components/Register'>

             <h1>Register</h1>
            </Link>
            
          </div>
        </div>
      </form>
    </div>
  </>
  )
}

export default Login











