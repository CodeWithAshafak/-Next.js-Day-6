'use client'
import DashHeader from '@/app/components/DashHeader'
import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import BarChart from './charts/BarChart'
import Timeline from './charts/Timeline'


const Home = () => {
  return (
    <div className="not-only:flex h-screen bg-gray-200">
    
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashHeader />

        <div className="relative flex-1 overflow-y-auto p-10 justify-center   ">
                  

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Total Sales</h2>
              <p className="text-6xl font-bold">$100,000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Total Orders</h2>
              <p className="text-6xl font-bold">1000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Total Customers</h2>
              <p className="text-6xl font-bold">100</p>
            </div>
          </div>


          <div className='flex flex-col justify-center'>

          <BarChart/>
         <Timeline/>
        


          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
