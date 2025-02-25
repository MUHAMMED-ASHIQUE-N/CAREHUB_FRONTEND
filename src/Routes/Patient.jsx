import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from '../pages/Common/Home'
import Doctors from '../pages/Common/Doctors'
import ContactUs from '../pages/Common/ContactUs'
import About from '../pages/Common/About'
import DoctorProfile from '../pages/Common/DoctorProfile'
import Login from '../pages/Common/Login'
import ProfileCard from '../pages/Patient/ProfileCard'
import MyAppointments from '../pages/Patient/MyAppointments'
import ChatApp from '../components/Common/ChatApp'


const Patient = () => {
  return (
    <div>
        <Routes>
        <Route path="/profilecard" element={<ProfileCard/>} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/Chat" element={<ChatApp/>} />
      </Routes>
   
    </div>
  )
}

export default Patient
