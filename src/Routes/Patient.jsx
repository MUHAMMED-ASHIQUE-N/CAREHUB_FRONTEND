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
import SignUp from '../pages/Common/signUp'
import ChatApp from '../pages/Patient/ChatApp'


const Patient = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<ChatApp/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/contact-Us" element={<ContactUs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/doctor-profile" element={<DoctorProfile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profilecard" element={<ProfileCard/>} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
   
    </div>
  )
}

export default Patient
