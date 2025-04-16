'use client'

import React, { useEffect, useState } from 'react'
import DashHeader from '@/app/components/DashHeader'
import Sidebar from '@/app/components/Sidebar'
import axios from 'axios';

const productcat = () => {

  const [category, setCategory] = useState([])
  const [input, setInput] = useState({
    cat: '',
  });
  

  useEffect(() => {
    const loadData = async () => {
      let API = `http://localhost:3000/api/category`
      const response = await axios.get(API);
      setCategory(response.data);
    };
    loadData();
  }, []);


  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let API = `http://localhost:3000/api/category`
    const response = await axios.post(API, input);
    const data = await response.data;
    setCategory([...category, data]);
    alert("category saved");
  };



  return (
    <>
      <div className="flex h-screen bg-gray-200">
       
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashHeader />


         <div>

          <div className="flex-1 overflow-y-auto p-10 justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1>Insert Category</h1>

              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Product Category
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productCat"
                    type="text"
                    placeholder="enter product category"
                    name="cat"
                    value={input.cat}
                    onChange={inputHandle}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Insert Category
                  </button>
                </div>
              </form>
            </div>
          </div>


          <div>
            <table className="table-auto w-full border-collapse border border-gray-400">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border border-gray-400">S.No</th>
                  <th className="px-4 py-2 border border-gray-400">Category</th>
                </tr>
              </thead>
              <tbody>
                {category.map((cat, index) => (
                  <tr key={index} className="bg-white border-b border-gray-400 justify-center">
                    <td className="px-4 py-2 border border-gray-400 text-center">{index + 1}</td>
                    <td className="px-4 py-2 border border-gray-400 text-center">{cat.cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

  


          </div>


        </div>
      </div>
    </>
  );
};

export default productcat

