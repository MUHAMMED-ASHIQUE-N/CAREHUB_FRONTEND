import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DoctorChat from '../pages/Doctor/DoctorChat'
import DoctorAppointments from '../pages/Doctor/DoctorAppointments'
import DoctorDashboard from '../pages/Doctor/DoctorDashboard'
import DoctorProfile from '../pages/Doctor/DoctorProfile'
const Doctor = () => {
  return (
    <div>
          <Routes>
        <Route path="/" element={<DoctorDashboard/>} />
        <Route path="appointments" element={<DoctorAppointments/>} />
        <Route path="chat" element={<DoctorChat/>} />
        <Route path="profile" element={<DoctorProfile/>} />

     
      </Routes>
    </div>
  )
}

export default Doctor
