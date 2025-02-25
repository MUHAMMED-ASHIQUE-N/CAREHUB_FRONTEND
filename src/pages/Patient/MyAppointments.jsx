import React, { useState } from 'react';
import doctor from "../../assets/assets_frontend/doc1.png";
import Navbar from "../../components/Common/Navbar";
import { useNavigate } from 'react-router-dom';

const AppointmentCard = ({ appointment, navigate }) => {
  const [showRazorpay, setShowRazorpay] = useState(false);

  const handlePayOnlineClick = () => {
    setShowRazorpay(true);
  };

  const handleRazorpayClick = () => {
    
    console.log('Proceeding to Razorpay payment...');
  };

  return (
    <div className='py-5 flex flex-col md:flex-row items-center justify-between'>
      {/* Left Section */}
      <div className='flex flex-col md:flex-row gap-5 pl-4 items-center md:items-start'>
        <div className='border w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md'>
          <img src={doctor} alt={appointment.doctorName} className="w-full h-full object-cover rounded-md" />
        </div>
        <div className='text-gray-500 flex flex-col justify-end text-center md:text-left'>
          <h1 className='font-semibold text-xl text-black'>{appointment.doctorName}</h1>
          <p>{appointment.specialization}</p>
          <p>Address: {appointment.address}</p>
          <p>Date & Time: {appointment.dateTime}</p>
        </div>
      </div>
      {/* Right Section */}
      <div className='flex justify-center md:justify-end items-end pr-4 mt-4 md:mt-0'>
        <div className='flex flex-col md:flex-row items-center md:items-end gap-2'>
          <button onClick={() => navigate("/chat")} className='bg-green-500 text-white py-2 px-5 rounded-md w-full md:w-auto' aria-label={`Chat with ${appointment.doctorName}`}>
            Chat
          </button>
          <div className='flex flex-col gap-2 w-full md:w-auto'>
            {!showRazorpay ? (
              <button
                className='bg-blue-500 text-white py-2 px-5 rounded-md w-full md:w-auto'
                aria-label="Pay online for the appointment"
                onClick={handlePayOnlineClick}
              >
                Pay Online
              </button>
            ) : (
              <button
                className='bg-purple-500 text-white py-2 px-5 rounded-md w-full md:w-auto'
                aria-label="Proceed to Razorpay payment"
                onClick={handleRazorpayClick}
              >
                Razorpay
              </button>
            )}
            <button className='bg-red-500 text-white py-2 px-5 rounded-md w-full md:w-auto' aria-label="Cancel the appointment">
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyAppointments = () => {
  const navigate = useNavigate();

  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Emily Larson",
      specialization: "Gynecologist",
      address: "27th Cross, Richmond Circle, Ring Road, London",
      dateTime: "27 Feb 2025 | 04:00 PM"
    },
    {
      id: 2,
      doctorName: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "123 Main St, Springfield, IL",
      dateTime: "28 Feb 2025 | 10:00 AM"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-white rounded-lg shadow-md mt-[4.5rem]">
        <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
        <div className="flex flex-col gap-3">
          {appointments.map(appointment => (
            <AppointmentCard key={appointment.id} appointment={appointment} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;