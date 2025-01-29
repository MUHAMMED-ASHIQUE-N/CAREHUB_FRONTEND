import React from 'react'

//assets
import search_icon from '../../assets/assets_frontend/search_icon.svg'
import down1 from '../../assets/assets_frontend/dropdown_icon.svg'
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
import Navbar from '../../components/Common/Navbar';
import DoctorCard from '../../components/Common/DoctorCard';
import Banner from '../../components/Common/Banner';
import Footer from '../../components/Common/Footer';




const Doctors = () => {

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
    <div >
     
      <div>
        <Navbar/>
      </div>
      <div className='mx-auto  lg:w-[85%]'>
        <div className='flex justify-center gap-4 items-center py-20 w-full mt-[4.5rem]'>
        <div className='w-1/2 flex-shrink-0  relative'>
             <input type="text" placeholder='Search' className='border w-full border-black px-4 py-2  rounded-full relative' />
             <img src={search_icon} alt=""  className='absolute w-5 h-5 right-5 top-3 '/>
            </div>
        
          <button className='flex items-center gap-1 border border-black px-4 py-2 rounded-full'>
            <span>Sort</span>
            <span><img src={down1} alt="" /></span>
          </button>
        </div>
        {/* //doctors */}
        <div className="mx-auto lg:w-[85%] w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-5
        
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

      {/* //banner  */}
      <div>
        <Banner/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Doctors