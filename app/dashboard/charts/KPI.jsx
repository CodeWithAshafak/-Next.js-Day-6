import { useTheme } from 'next-themes';
import React from 'react';

const KPI = () => {

  const kpis = [
    { title: "Total Sales", value: "$980,000", color: "bg-green-500" },
    { title: "Total Orders", value: "1400", color: "bg-blue-500" },
    { title: "Total Customers", value: "132", color: "bg-purple-500" }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-white ${kpi.color}`}
          >
            <h2 className="text-2xl font-bold mb-4">{kpi.title}</h2>
            <p className="text-5xl font-bold">{kpi.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default KPI;
