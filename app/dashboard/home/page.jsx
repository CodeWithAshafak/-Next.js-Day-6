'use client'
import DashHeader from '@/app/components/DashHeader'
import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import KPI from '../charts/KPI'



const Home = () => {
  return (
    <div className="not-only:flex h-screen bg-gray-200">
    
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashHeader />

        <div className="relative flex-1 overflow-y-auto p-10 justify-center   ">
                  

         <KPI/>


          <div>
          </div>
        </div>


        
      </div>
    </div>
  )
}

export default Home