import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Navbar_admin from "../../components/Admin,Doctor,Pharmacy/Navbar_admin";
import Sidebar from "../../components/Admin,Doctor,Pharmacy/Sidebar";
import upload_Icon from "../../assets/assets_admin/upload_area.svg";

import { AdminMenuItems } from "../../Constants/constants";

const AddDoctors = () => {
  const fileInputRef = useRef(null);
  const [doctorsData, setDoctorsData] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // State for image preview
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl); // Set the preview image URL
    }
  };

  const onSubmit = (data) => {
    // Update doctorsData state with the form data
    setDoctorsData(data);
    console.log("Form Data:", data);
    // You can also send this data to an API or perform other actions here
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar_admin department={"Admin"} />
      <div className="flex flex-row">
        <div className="flex-shrink-0 ">
          <Sidebar  menuItems={AdminMenuItems} />
        </div>
        <div className="flex-1 w-full p-3 md:p-0  bg-gray-100">
          <div className="md:p-6 bg-gray-100 w-full overflow-y-auto h-[89vh] scrollbar-hide ">
            <h1 className="text-2xl font-bold mb-6">Add Doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-white p-6  md:max-w-6xl mx-auto  rounded-lg shadow-md">
                <div className="mb-6">
                  <div className="mt-2 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                    <div
                      className="flex items-center justify-center cursor-pointer"
                      onClick={handleIconClick}
                    >
                      {/* Display the preview image if available, otherwise show the upload icon */}
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-20 h-20 rounded-full border object-contain"
                        />
                      ) : (
                        <img
                          src={upload_Icon}
                          alt="Upload Icon"
                          className="w-20 h-20"
                        />
                      )}
                    </div>
                    <Controller
                      name="doctorPicture"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          type="file"
                          ref={(e) => {
                            fileInputRef.current = e; // Assign ref to file input
                            field.ref(e); // Assign ref to React Hook Form
                          }}
                          className="hidden"
                          onChange={(e) => {
                            handleFileChange(e); // Handle file change for preview
                            const file = e.target.files[0];
                            field.onChange(file); // Update React Hook Form value
                          }}
                        />
                      )}
                    />
                    <label className="block text-gray-700 text-center sm:text-left">
                      Upload doctor <br /> picture
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700">Doctor name</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Name"
                      {...register("doctorName", { required: "Doctor name is required" })}
                    />
                    {errors.doctorName && (
                      <p className="text-red-500 text-sm mt-1">{errors.doctorName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Speciality</label>
                    <select
                      className="w-full p-2 border rounded mt-2"
                      {...register("speciality", { required: "Speciality is required" })}
                    >
                      <option value="General physician">General physician</option>
                      <option value="Neurologist">Neurologist</option>
                      <option value="Dermatologist">Dermatologist</option>
                    </select>
                    {errors.speciality && (
                      <p className="text-red-500 text-sm mt-1">{errors.speciality.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700">Doctor Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Email"
                      {...register("doctorEmail", { required: "Email is required" ,pattern:{
                        value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "invalid email"
                      } })}
                    />
                    {errors.doctorEmail && (
                      <p className="text-red-500 text-sm mt-1">{errors.doctorEmail.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Degree</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Degree"
                      {...register("degree", { required: "Degree is required" })}
                    />
                    {errors.degree && (
                      <p className="text-red-500 text-sm mt-1">{errors.degree.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700">Set Password</label>
                    <input
                      type="password"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Password"
                      {...register("password", { required: "Password is required", pattern: {
                        value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "password should contain upperCase,lowerCase,number & special Charater"
                      } })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Fees</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Doctor fees"
                      {...register("fees", { required: "Fees are required" })}
                    />
                    {errors.fees && (
                      <p className="text-red-500 text-sm mt-1">{errors.fees.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Experience</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="1 Year"
                      {...register("experience", { required: "Experience is required" })}
                    />
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700">About Doctor</label>
                  <textarea
                    className="w-full p-2 border rounded mt-2"
                    rows="4"
                    placeholder="About Doctor"
                    {...register("aboutDoctor", { required: "About Doctor is required" })}
                  ></textarea>
                  {errors.aboutDoctor && (
                    <p className="text-red-500 text-sm mt-1">{errors.aboutDoctor.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;