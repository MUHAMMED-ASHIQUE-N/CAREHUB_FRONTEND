import React from 'react'
import SearchRsult from '../pages/Pharmacy/SearchRsult'
import { Route, Routes } from 'react-router-dom'
import MedicalInstructions from '../pages/Pharmacy/MedicalInstructions'

const Pharmacy = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<SearchRsult/>} />
        <Route path="/medical_instructions" element={<MedicalInstructions/>} />
      </Routes>
    </div>
  )
}

export default Pharmacy
