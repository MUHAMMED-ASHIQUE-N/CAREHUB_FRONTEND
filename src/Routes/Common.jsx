import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from '../pages/Common/Home';
import Doctors from '../pages/Common/Doctors';
import ContactUs from '../pages/Common/ContactUs';
import About from '../pages/Common/About';
import Login from '../pages/Common/Login';
import DoctorProfile from '../pages/Common/DoctorProfile';
import SignUp from '../pages/Common/signUp';

const Common = () => {
  return (
    <div>
      
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/doctor-profile/:id" element={<DoctorProfile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
   
    </div>
  )
}

export default Common
