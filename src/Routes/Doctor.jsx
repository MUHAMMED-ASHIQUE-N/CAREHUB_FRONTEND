import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DoctorChat from '../pages/Doctor/DoctorChat'
import DoctorAppointments from '../pages/Doctor/DoctorAppointments'
import DoctorProfile from '../pages/Doctor/DoctorProfile'
import DoctorDashboard from '../pages/Doctor/DoctorDashboard'

const Doctor = () => {
  return (
    <div>
          <Routes>
        <Route path="/doctor-home" element={<DoctorDashboard/>} />
        <Route path="/appointments-in-doctor" element={<DoctorAppointments/>} />
        <Route path="/doctor-profile" element={<DoctorProfile/>} />
        <Route path="/doctor-chat" element={<DoctorChat/>} />
     
      </Routes>
    </div>
  )
}

export default Doctor
