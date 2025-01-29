import React from 'react'
import Contact_image from '../../assets/assets_frontend/contact_image.png'
import Navbar from '../../components/Common/Navbar'
import Footer from '../../components/Common/Footer'

const ContactUs = () => {
  return (
    <div>

      <div className='py-[2.5rem]'>
      <Navbar/>
      </div>

      <div className='text-center text-2xl text-gray-500 pt-20'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='py-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm mx-auto w-[80%]'>
        <img src={Contact_image} alt=""  className='w-full md:max-w-[360px]'/>
        <div className='flex flex- flex-col gap-5 justify-center items-start'>
          <p className=' font-semibold text-lg text-gray-600' >OUR OFFICE</p>
          <p className='text-gray-500'>00000 Willms Station <br />
          Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Tel: (000) 000-0000 <br />
          Email: greatstackdev@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button
                className="relative overflow-hidden bg-white border text-black hover:text-white font-bold border-black py-4 px-8 rounded-md font-roboto transition-all duration-500 
  before:absolute before:inset-0 before:bg-[#213555] before:scale-x-0 before:origin-center 
  hover:before:scale-x-100 before:transition-transform before:duration-500 
   before:z-0 z-40"
              >
                <span className="relative z-10">Get Appointment</span>
              </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs



// import React from 'react';

// const ContactUs = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">My Appointments</h1>

//       <div className="space-y-4">
//  {/* Appointment 1 */}
// <div className="p-4 border rounded-lg flex items-end space-x-4">
//   {/* Image Placeholder */}
//   <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
//     <span className="text-gray-500">Image</span>
//   </div>

//   {/* Appointment Details (Aligned to Bottom) */}
//   <div className="flex-1 flex flex-col justify-end">
//     <h2 className="text-xl font-semibold">Dr. Emily Larson</h2>
//     <p className="text-gray-600">Gynecologist</p>
//     <p className="text-gray-600">
//       Address: 27th Cross, Richmond Circle, Ring Road, London
//     </p>
//     <p className="text-gray-600">Date & Time: 27 Feb 2025 | 04:00 PM</p>
//     {/* Buttons aligned to the right in a column */}
//     <div className="mt-4 flex flex-col items-end space-y-2">
//       <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
//         Pay Online
//       </button>
//       <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
//         Cancel Appointment
//       </button>
//     </div>
//   </div>
// </div>



//         {/* Appointment 2 */}
//         <div className="p-4 border rounded-lg flex items-start space-x-4">
//           {/* Image Placeholder */}
//           <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
//             <span className="text-gray-500">Image</span>
//           </div>

//           {/* Appointment Details */}
//           <div className="flex-1 flex flex-col">
//             <h2 className="text-xl font-semibold">Dr. Jennifer Garcia</h2>
//             <p className="text-gray-600">Neurologist</p>
//             <p className="text-gray-600">Address: 37th Cross, Richmond Circle, Ring Road, London</p>
//             <p className="text-gray-600">Date & Time: 26 Feb 2025 | 11:00 AM</p>
//             {/* Buttons aligned to the right in a column */}
//             <div className="mt-4 flex flex-col items-end space-y-2">
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Pay Online</button>
//               <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Cancel Appointment</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;