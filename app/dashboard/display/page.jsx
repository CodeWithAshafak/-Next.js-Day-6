'use client'

import DashHeader from '@/app/components/DashHeader'
import Sidebar from '@/app/components/Sidebar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

const display = () => {

  const [product, setProduct] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/product?page=${page}&limit=${limit}`)
        setProduct(response.data)
        console.log("data",response.data);
      } catch (error) {
        console.log(error)
      }
    }
    loadData()
  }, [page, limit])

  const downloadPdf = () => {
    const doc = new jsPDF()
    const tableRows = []
    const tableHeader = ['Image', 'Name', 'Description', 'Price', 'Category']

    product.forEach(item => {
      const row = [
        { content: item.imgname, styles: { halign: 'center', valign: 'middle' } },
        item.pname,
        item.pdec,
        item.price,
        item.cat
      ]
      tableRows.push(row)
    })

    autoTable(doc, {
      head: [tableHeader],
      body: tableRows,
      styles: { fillColor: [255, 255, 255] },
      startY: 20,
      theme: 'grid',
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 150 },
        2: { cellWidth: 150 },
        3: { cellWidth: 50 },
        4: { cellWidth: 50 }
      },
      didDrawPage: (data) => {
        // Footer
        doc.setFontStyle('bold');
        doc.setFontSize(10);
        doc.text('Products List', data.settings.margin.left, 285);
        doc.text(`Page ${data.pageCount}`, data.settings.margin.left, 290);
      }
    })

    doc.save('products.pdf')
  }

  const handlePageChange = (e) => {
    setPage(e.target.value)
  }

  return (
    <>
      <div className="flex h-screen bg-gray-200">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <DashHeader />

          <div className="flex-1 overflow-y-auto p-10 justify-center">
            {product.length > 0 && (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-400">
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((item) => (
                    <tr key={item._id} className="border-b-2 border-gray-400">
                      <td className="px-4 py-2 text-center">
                        <img
                          src={item.imgname}
                          alt={item.pname}
                          className="w-20 h-20 object-cover rounded-full"
                        />
                      </td>
                      <td className="px-4 py-2 text-center">{item.pname}</td>
                      <td className="px-4 py-2 text-center">{item.pdec}</td>
                      <td className="px-4 py-2 text-center">{item.price}</td>
                      <td className="px-4 py-2 text-center">{item.cat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div className="flex justify-center mt-4">
              <select value={page} onChange={handlePageChange} className="bg-gray-100 border-2 border-gray-400 rounded-md px-4 py-2">
                {Array(Math.ceil(product.length / limit)).fill(0).map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadPdf}>Download PDF</button>
          </div>


        </div>
      </div>
    </>
  )
}

export default display

