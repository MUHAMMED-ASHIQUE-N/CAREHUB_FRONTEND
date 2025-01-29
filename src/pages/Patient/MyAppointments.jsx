import React, { useState } from 'react';
import Navbar from '../../components/Common/Navbar';

function MyAppointments() {
  const [appointments, setAppointments] = useState([
    {
      doctorName: 'Dr. Emily Larson',
      specialty: 'Gynecologist',
      address: '27th Cross, Richmond Circle, Ring Road, London',
      date: '27 Feb 2025',
      time: '04:00 PM',
      paymentMethods: ['Stripe'],
    },
    {
      doctorName: 'Dr. Jennifer Garcia',
      specialty: 'Neurologist',
      address: '37th Cross, Richmond Circle, Ring Road, London',
      date: '26 Feb 2025',
      time: '11:00 AM',
      paymentMethods: ['Razorpay'],
    },
  ]);

  const handleCancel = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  return (
    <>
    <nav>
      <Navbar/>
    </nav>
    <div className='mt-[4.5rem] '>

    </div>
    </>
  );
}

export default MyAppointments;