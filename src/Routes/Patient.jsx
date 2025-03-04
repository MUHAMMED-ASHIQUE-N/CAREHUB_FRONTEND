import React from 'react'
import { Routes, Route, } from 'react-router-dom'

import ProfileCard from '../pages/Patient/ProfileCard'
import MyAppointments from '../pages/Patient/MyAppointments'
import ChatApp from '../components/Common/ChatApp'
import  Home  from '../pages/Common/Home'


const Patient = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
        <Route path="/profilecard" element={<ProfileCard/>} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="Chat" element={<ChatApp/>} />
      </Routes>
   
    </div>
  )
}

export default Patient
