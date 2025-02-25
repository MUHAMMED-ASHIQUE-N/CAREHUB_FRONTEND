import React, { useState } from "react";
import verified_icon from "../../assets/assets_frontend/verified_icon.svg";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import { useParams } from "react-router-dom";
import {DoctorsData} from '../../Constants/DoctorsData'

const DoctorProfile = () => {
  const [selectedDate, setSelectedDate] = useState("10");
  const [selectedTime, setSelectedTime] = useState("9:00 am");


  const {id} = useParams();
  const doctor = DoctorsData.find(doc => doc._id === id);


  if (!doctor) {
    return <div>Doctor not found</div>;
  }


  const dates = [
    { day: "MON", date: "10" },
    { day: "TUE", date: "11" },
    { day: "WED", date: "12" },
    { day: "THU", date: "13" },
    { day: "FRI", date: "14" },
    { day: "SAT", date: "15" },
    { day: "SUN", date: "16" },
  ];

  const timeSlots = [
    "8:00am",
    "8:30am",
    "9:00am",
    "9:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
  ];


  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <Navbar />
      <div className="mt-[4.5rem] mx-auto w-[80%] py-10">
        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div>
            <img
              src={doctor.image}
              alt="Doctor"
              className="bg-buttonColor w-full max-w-72 rounded-lg"
            />
          </div>
          <div className="flex-1 border border-gray-400 p-8 xl:pr-40 py-7 bg-white rounded-lg mx-2 md:mx-0 mt-[-80px] md:mt-[0]">
            <h1 className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {doctor.name}{" "}
              <img src={verified_icon} alt="Verified" className="w-5" />
            </h1>

            <div className="flex items-center gap-2 text-base mt-1 text-gray-600">
              <p>
                <span>{doctor.degree}</span> -{" "}
                <span>{doctor.speciality}</span>
              </p>{" "}
              <button className="py-0.5 px-2 text-xs border rounded-full">
                {doctor.experience}{" "}
              </button>{" "}
            </div>

            <div>
              <h2 className="text-gray-900 font-medium mt-3">About</h2>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {doctor.about}
              </p>
            </div>
            <p className="text-gray-700 font-medium mt-3">
              Appointment fee:{" "}
              <span className="text-black font-semibold">
                ${doctor.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots Section */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-auto scrollbar-hide mt-4">
            {dates.map((item, index) => (
              <div
                key={index}
                onClick={() => handleDateClick(item.date)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer border ${
                  selectedDate === item.date
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                <p>{item.day}</p>
                <p>{item.date}</p>
              </div>
            ))}
          </div>

          {/* Time Slots Section */}
          <div className="mt-6">
            <p>Select Time</p>
            <div className=" flex gap-5 overflow-x-scroll scrollbar-hide  w-full mt-4">
              {timeSlots.map((time, index) => (
                <div
                  key={index}
                  onClick={() => handleTimeClick(time)}
                  className={`text-center  px-5 py-2 rounded-full cursor-pointer border ${
                    selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
    
          </div>
          <button className="bg-blue-500 text-white py-3 px-5 rounded-full mt-4 align-sub">Book Appointment</button>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default DoctorProfile;