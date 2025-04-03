// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { updateDoctor } from "../../Redux/Doctors/updateDoctor";

// const DoctorDetailsEditingPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const doctor = useSelector((state) =>
//     state.doctor.doctors.find((doc) => doc._id === id)
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     specialization: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     if (doctor) {
//       setFormData({
//         name: doctor.name,
//         specialization: doctor.specialization,
//         email: doctor.email,
//         phone: doctor.phone,
//       });
//     }
//   }, [doctor]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateDoctor({ id, updatedDoctor: formData }));
//     navigate(-1); // Navigate back after updating
//   };

//   return (
//     <div>
//       <h2>Edit Doctor Details</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <label>Specialization:</label>
//         <input
//           type="text"
//           name="specialization"
//           value={formData.specialization}
//           onChange={handleChange}
//         />

//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label>Phone:</label>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />

//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default DoctorDetailsEditingPage;



// const DoctorDetailsEditingPage = () => {
  
//   console.log(doctorData);
  

//   return (

//   )
// }

// export default DoctorDetailsEditingPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateDoctor } from "../../Redux/Doctors/updateDoctor";

const DoctorDetailsEditingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctors);
  const doctorData = doctors.find((doc) => doc._id === id);

  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Set initial values when the component mounts
  useEffect(() => {
    if (doctorData) {
      setValue("name", doctorData.name);
      setValue("email", doctorData.email);
    }
  }, [doctorData, setValue]);

  // Handle form submission
  const onSubmit = (data) => {
    
      dispatch(updateDoctor({ id, updatedData: data }));

    // Navigate back to doctor list or details page
    navigate(`/admin/doctor/${id}`);
  };

  return (
    <div>
      <h2>Edit Doctor Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DoctorDetailsEditingPage;


