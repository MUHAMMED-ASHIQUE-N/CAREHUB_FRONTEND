import React from "react";
// assets

import caduceus from "../../assets/assets_frontend/caduceus.png";
import ambulance from "../../assets/assets_frontend/ambulance-cross.svg";
import stethoscope from "../../assets/assets_frontend/stethoscope.svg";
import Dermatologist from "../../assets/assets_frontend/Dermatologist.svg";
import Gynecologist from "../../assets/assets_frontend/Gynecologist.svg";
import General_physician from "../../assets/assets_frontend/General_physician.svg";
import Neurologist from "../../assets/assets_frontend/Neurologist.svg";
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
import serviceImg1 from  "../../assets/assets_frontend/prescription.svg"
import serviceImg2 from  "../../assets/assets_frontend/listening.svg"
import serviceImg3 from  "../../assets/assets_frontend/heart-beat-alt.svg"
import serviceImg4 from  "../../assets/assets_frontend/eye-alt.svg"
import serviceImg5 from  "../../assets/assets_frontend/blood.svg"
import serviceImg6 from  "../../assets/assets_frontend/tooth.svg"
import service_white_Img1 from  "../../assets/assets_frontend/prescription_White.svg"
import service_white_Img2 from  "../../assets/assets_frontend/listening_White.svg"
import service_white_Img3 from  "../../assets/assets_frontend/heart-beat-alt_White.svg"
import service_white_Img4 from  "../../assets/assets_frontend/eye-alt _White.svg"
import service_white_Img5 from  "../../assets/assets_frontend/blood_White.svg"
import service_white_Img6 from  "../../assets/assets_frontend/tooth_white.svg"
import Navbar from "../../components/Common/Navbar";
import SectionHeading from "../../components/Common/SectionHeading";
import Features from "../../components/Common/Features";
import Speciality from "../../components/Common/Speciality";
import ServiceCard from "../../components/Common/ServiceCard";
import Footer from "../../components/Common/Footer";
import DoctorCard from "../../components/Common/DoctorCard";


const serviceDetials = [
  {_id: "serv1",title:"General Treatment",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",image:serviceImg1, image_white:service_white_Img1,},
  {_id: "serv2",title:"Ear Treatment",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",image:serviceImg2,image_white:service_white_Img2,},
  {_id: "serv3",title:"Heart Surgery",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",image:serviceImg3,image_white:service_white_Img3,},
  {_id: "serv4",title:"Vision Problems",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",image:serviceImg4,image_white:service_white_Img4,},
  {_id: "serv5",title:"Blood Transfusion",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",image:serviceImg5,image_white:service_white_Img5,},
  {_id: "serv6",title:"Teeth Whitening",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",image:serviceImg6,image_white:service_white_Img6,},
]

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




// const specialityData = [
//     { speciality: 'General physician',image: General_physician},
//     {speciality: 'Gynecologist',image: Gynecologist},
//     {speciality: 'Dermatologist',image: Dermatologist},
//     {speciality: 'Pediatricians',image: Pediatricians},
//     {speciality: 'Neurologist',image: Neurologist},
//     { speciality: 'Gastroenterologist', image: Gastroenterologist },
//       ]
const Home = () => {
  return (
    <div className=" ">
      <div className='relative bg-[url("./assets/assets_frontend/banner-1.jpg")] bg-cover  h-[70vh] xl:h-[90vh]'>
        <div className="absolute inset-0">
          <Navbar />
        </div>
        <div className="h-full flex items-center ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute  text-white flex flex-col gap-3 justify-center   pl-5 md:px-10 lg:px-28">
            <h1 className="text-2xl md:text-5xl font-bold tracking-[1px]  md:tracking-[1px]">
              We Provide <span className="text-buttonColor">Medical</span>{" "}
              Services <br /> That You Can{" "}
              <span className="text-buttonColor">Trust!</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              vero reiciendis illum minus dolores voluptate cumque.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap ">
              <button
                className="relative overflow-hidden bg-buttonColor text-white py-4 px-8 rounded-md font-roboto transition-all duration-500 
  before:absolute before:inset-0 before:bg-[#213555] before:scale-x-0 before:origin-center 
  hover:before:scale-x-100 before:transition-transform before:duration-500 
   before:z-0 z-40"
              >
                <span className="relative z-10">Get Appointment</span>
              </button>

              <button
                className="relative overflow-hidden bg-[#213555] text-white py-4 px-8 rounded-md font-roboto transition-all duration-500 
  before:absolute before:inset-0 before:bg-buttonColor before:scale-x-0 before:origin-center 
  hover:before:scale-x-100 before:transition-transform before:duration-500 
   before:z-0 z-30"
              >
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto lg:w-[85%]  py-10 ">
        <SectionHeading
          heading={
            <>
              We Are Always Ready to Help You & <br /> Your Family
            </>
          }
          paragrah={
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing praesent
              aliquet. pretiumts
            </>
          }
          show={true}
        />
        <div className="flex flex-wrap lg:flex-row lg:flex-nowrap justify-between items-center mx-auto w-full gap-8 py-10">
          <Features
            image={ambulance}
            heading="Emergency Help"
            paragraph={
              <>
                Emergency Help ensures immediate medical attention for critical
                situations, providing life-saving care and urgent treatment for
                patients in need.
              </>
            }
          />

          <div className="text-5xl text-primaryColor hidden md:block animate-pulse">
            ........
          </div>

          <Features
            image={caduceus}
            heading="Enriched Pharmacy"
            paragraph={
              <>
                Enriched Pharmacy provides high-quality medications, expert
                guidance, and comprehensive pharmaceutical care to ensure better
                health and well-being.
              </>
            }
          />

          <div className="text-5xl text-primaryColor hidden md:block animate-pulse">
            ........
          </div>

          <Features
            image={stethoscope}
            heading="Medical Treatment"
            paragraph={
              <>
                Medical Treatment offers expert care, advanced procedures, and
                personalized treatments to ensure the best health outcomes.
              </>
            }
          />
        </div>
      </div>
      <div className="py-10  bg-[#F4F4F4]">
        <div className="mx-auto lg:w-[85%]  ">
          <SectionHeading
            heading="Find by specialty "
            paragrah={
              <>
                Easily browse through an extensive list of trusted doctors{" "}
                <br /> Book Your Appointments
              </>
            }
          />
          <div className="flex items-center justify-center flex-wrap gap-4">
            <Speciality
              image={General_physician}
              speciality="General physician"
            />
            <Speciality image={Dermatologist} speciality="Dermatologist" />
            <Speciality image={Neurologist} speciality="Neurologist" />
            <Speciality image={Dermatologist} speciality="Dermatologist" />
            <Speciality image={Gynecologist} speciality="Gynecologist" />
          </div>
        </div>
      </div>
      {/* //Doctoe cards */}
      <div className="mx-auto lg:w-[85%]  w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-4 py-10">
        {doctors.slice(0, 10).map((val, index) => (
          <div key={index}>
  <DoctorCard
    image={val.image}
    name={val.name}
    speciality={val.speciality}
  />
</div>

        ))}
      </div>

      {/* //service */}
      <div className="py-10  bg-[#F4F4F4]">
        <div className="mx-auto w-[85%]">
          <SectionHeading
            heading={
              <>
                We Offer Different Services To <br />
                Improve Your Health
              </>
            }
            show={true}
            paragrah={
              <>
                Lorem ipsum dolor sit amet consectetur adipiscing praesent
                aliquet. <br />
                pretiumts
              </>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 py-10">
            {serviceDetials.map((data) => (
              <div key={data._id}>
                <ServiceCard
                  image={data.image}
                  image_white={data.image_white}
                  description={data.description}
                  title={data.title}
                  show={true}
                />
                     

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer banner  */}

      <div className="py-20">
        <div className="relative bg-[url('./assets/assets_frontend/handShake.jpg')] h-[30vh] xl:h-[50vh] bg-center bg-cover flex flex-col items-center gap-4 justify-center">
          <div className="absolute inset-0 bg-[#1E61A4] opacity-75"></div>
          <h1 className="text-[#213555] text-2xl md:text-4xl font-bold z-50">
            CareHub
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold font-sans text-white z-50">
            {" "}
            Where Trust Meets Healthcare
          </h1>
          <button
            className="relative overflow-hidden bg-buttonColor text-white py-4 px-8 rounded-md font-roboto transition-all duration-500 
  before:absolute before:inset-0 before:bg-[#213555] before:scale-x-0 before:origin-center 
  hover:before:scale-x-100 before:transition-transform before:duration-500 
   before:z-0 z-10"
          >
            <span className="relative z-10">Get Appointment</span>
          </button>
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
