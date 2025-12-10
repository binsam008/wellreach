import React from 'react'

export default function Services(){
  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <p className="mb-6">Air, Sea and Land freight solutions with tracking and customs support.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Air Freight</div>
        <div className="p-4 bg-white rounded shadow">Sea Freight</div>
        <div className="p-4 bg-white rounded shadow">Land Transport</div>
      </div>
    </div>
  )
}
