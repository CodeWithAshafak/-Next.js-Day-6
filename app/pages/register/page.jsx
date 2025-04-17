"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";

import schema from "@/app/middlewere/zodschema";
import { useRouter } from "next/navigation";
const page = () => {
  let router = useRouter();
  const [data, setData] = useState({});

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = schema.safeParse(data);
      if (!result.success) {
        const errors = result.error.errors;
        const messages = errors.map((error) => error.message);
        alert(messages.join(", "));
        return;
      }
      let api = "/api/user";
      try {
        let response = await axios.post(api, data);
        alert(response.data.message);
        router.push("/pages/login");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
    <div className="flex justify-center mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </div>

    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
          User Name
        </label>
        <input
          type="text"
          id="name"
          name="username"
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="1234567890"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
      >
        Register
      </button>
    </form>
  </div>
</div>

    </>
  );
};

export default page;
