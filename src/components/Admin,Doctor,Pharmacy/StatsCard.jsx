import React from 'react'

const StatsCard = ({ icon, value, label }) => {
  return (

  <div className="flex items-center p-4 bg-white rounded-md shadow-md">
    <div className="rounded-xl">
      <img src={icon} alt={`${label} Icon`} className="w-12 h-12" />
    </div>
    <div className="ml-4">
      <h2 className="text-xl font-bold">{value}</h2>
      <p className="text-gray-500">{label}</p>
    </div>
  </div>

  )
}

export default StatsCard
