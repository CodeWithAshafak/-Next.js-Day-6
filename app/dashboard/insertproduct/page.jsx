'use client'

import React, { useEffect, useState } from 'react'
import DashHeader from '@/app/components/DashHeader'
import Sidebar from '@/app/components/Sidebar'
import axios from 'axios';

const Product = () => {
  const [category, setCategory] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [input, setInput] = useState({
    pname: "",
    pdec: "",
    price: ""
  });

  useEffect(() => {
    const loadData = async () => {
      let API = `http://localhost:3000/api/category`
      const response = await axios.get(API);
      setCategory(response.data);
      console.log(response.data);
    };
    loadData();
  }, []);

  const inputHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(selectedFile);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "ashafakpreset");
    formData.append("cloud_name", "dovyg2mt3");

    const api = "https://api.cloudinary.com/v1_1/dovyg2mt3/image/upload";
    const response = await axios.post(api, formData);

    let api1 = `http://localhost:3000/api/product`;
    await axios.post(api1, { imgname: response.data.url, ...input });
    alert("data saved...!");
  };

  return (
    <>
      <div className="flex h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashHeader />
          <div className="flex-1 overflow-y-auto p-10 justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1>Insert Product</h1>
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Product category
                  </label>
                  <select name="category" onChange={(e) => setInput(prev => ({ ...prev, cat: e.target.value }))}>
                    <option value="">--Select Category--</option>
                    {category.map((key) => (
                      <option key={key._id} value={key.cat}>{key.cat}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Product Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productCat"
                    type="text"
                    placeholder="enter product category"
                    name="pname"
                    value={input.pname}
                    onChange={inputHandle}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Product Description
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productDesc"
                    type="text"
                    placeholder="enter product Description"
                    name="pdec"
                    value={input.pdec}
                    onChange={inputHandle}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Product Price
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productPrice"
                    type="text"
                    placeholder="enter product Price"
                    name="price"
                    value={input.price}
                    onChange={inputHandle}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Product image
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productImage"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Insert Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
