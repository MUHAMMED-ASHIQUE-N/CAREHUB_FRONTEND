import React from 'react'
import Navbar_admin from '../../components/Admin,Doctor,Pharmacy/Navbar_admin'
import Sidebar from '../../components/Admin,Doctor,Pharmacy/Sidebar'
import DoctorCard from '../../components/Common/DoctorCard'

//assets

import doc1 from "../../assets/assets_frontend/doc1.png";
import doc2 from "../../assets/assets_frontend/doc2.png";
import doc3 from "../../assets/assets_frontend/doc3.png";
import doc4 from "../../assets/assets_frontend/doc4.png";
import doc5 from "../../assets/assets_frontend/doc5.png";
import doc6 from "../../assets/assets_frontend/doc6.png";
import doc7 from "../../assets/assets_frontend/doc7.png";
import doc8 from "../../assets/assets_frontend/doc8.png";
import doc9 from "../../assets/assets_frontend/doc9.png";
import doc10 from "../../assets/assets_frontend/doc10.png";
import doc11 from "../../assets/assets_frontend/doc11.png";
import doc12 from "../../assets/assets_frontend/doc12.png";
import doc13 from "../../assets/assets_frontend/doc13.png";
import doc14 from "../../assets/assets_frontend/doc14.png";
import doc15 from "../../assets/assets_frontend/doc15.png";

const DoctorsList = () => {


  
  
  
  
  
    const doctors = [
      {_id: "doc1",name: "Dr. Richard James",image: doc1,speciality: "General physician",degree: "MBBS",experience: "4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 50,address: {line1: "17th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc2",name: "Dr. Emily Larson",image: doc2,speciality: "Gynecologist",degree: "MBBS",experience: "3 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 60,address: {line1: "27th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc3",name: "Dr. Sarah Patel",image: doc3,speciality: "Dermatologist",degree: "MBBS",experience: "1 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 30,address: {line1: "37th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc4",name: "Dr. Christopher Lee",image: doc4,speciality: "Pediatricians",degree: "MBBS",experience: "2 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 40,address: {line1: "47th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc5",name: "Dr. Jennifer Garcia",image: doc5,speciality: "Neurologist",degree: "MBBS",experience: "4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 50,address: {line1: "57th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc6",name: "Dr. Andrew Williams",image: doc6,speciality: "Neurologist",degree: "MBBS",experience: "4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 50,address: {line1: "57th Cross, Richmond",line2: "Circle, Ring Road, London",}, },
      {_id: "doc7",name: "Dr. Christopher Davis",image: doc7,speciality: "General physician",degree: "MBBS",experience: "4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 50,address: {line1: "17th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc8",name: "Dr. Timothy White",image: doc8,speciality: "Gynecologist",degree: "MBBS",experience: "3 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 60,address: {line1: "27th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc9",name: "Dr. Ava Mitchell",image: doc9,speciality: "Dermatologist",degree: "MBBS",experience: "1 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 30,address: {line1: "37th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc10",name: "Dr. Jeffrey King",image: doc10,speciality: "Pediatricians",degree: "MBBS",experience: "2 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 40,address: {line1: "47th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc11",name: "Dr. Zoe Kelly",image: doc11,speciality: "Neurologist",degree: "MBBS",experience: "4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 50,address: {line1: "57th Cross, Richmond",line2: "Circle, Ring Road, London",},},{_id: "doc12",name: "Dr. Patrick Harris",image: doc12,speciality: "Neurologist",degree: "MBBS",experience: "4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 50,address: {line1: "57th Cross, Richmond",line2: "Circle, Ring Road, London",},},{_id: "doc13",name: "Dr. Chloe Evans",image: doc13,speciality: "General physician",degree: "MBBS",experience: "4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 50,address: {line1: "17th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc14",name: "Dr. Ryan Martinez",image: doc14,speciality: "Gynecologist",degree: "MBBS",experience: "3 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 60,address: {line1: "27th Cross, Richmond",line2: "Circle, Ring Road, London",},},
      {_id: "doc15",name: "Dr. Amelia Hill",image: doc15,speciality: "Dermatologist",degree: "MBBS",experience: "1 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees: 30,address: {line1: "37th Cross, Richmond",line2: "Circle, Ring Road, London",},},
    ];
  return (
    <div className="flex flex-col h-screen">
    <Navbar_admin /> {/* Navbar on top */}
    <div className="flex flex-1">
      <div className="flex-shrink-0">
        <Sidebar /> {/* Sidebar on the left */}
      </div>
      <div className="flex-1 p-4 bg-gray-50">
        {/* Main content goes here */}
        <h1 className='font-semibold text-lg'> All Doctors</h1>
        <div className="mx-auto  w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   overflow-y-auto scrollbar-hide h-[81vh]  gap-5
        
        py-10">
       {doctors.map((val) => (
         <div key={val._id}>
           <DoctorCard
             image={val.image}
             name={val.name}
             speciality={val.speciality}
           />
         </div>
       ))}
     </div>
        {/* Add more content to make the sidebar height adjust */}
      </div>
    </div>
  </div>
  )
}

export default DoctorsList
