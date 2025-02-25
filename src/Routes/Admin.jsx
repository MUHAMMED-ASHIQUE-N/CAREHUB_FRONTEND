import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Appointments from '../pages/Admin/Appointments'
import AddDoctors from '../pages/Admin/AddDoctors'
import DoctorsList from '../pages/Admin/DoctorsList'
import Dashboard from '../pages/Admin/Dashboard'
import AdminChat from '../pages/Admin/AdminChat'

const Admin = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/admin-home" element={<Dashboard/>} />
        <Route path="/appointments_in_admin" element={<Appointments/>} />
        <Route path="/add_Doctors" element={<AddDoctors/>} />
        <Route path="/doctorsList" element={<DoctorsList/>} />
        <Route path="/admin-chat" element={<AdminChat/>} />
      </Routes>
   
    </div>
  )
}

export default Admin
