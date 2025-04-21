import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Navbar_admin from "../../components/Admin,Doctor,Pharmacy/Navbar_admin";
import Sidebar from "../../components/Admin,Doctor,Pharmacy/Sidebar";
import upload_Icon from "../../assets/assets_admin/upload_area.svg";
import { useDispatch, useSelector } from "react-redux";
import { AdminMenuItems, DOCTOR_IMAGE_URL } from "../../Constants/constants";
import { Outlet, useParams } from "react-router-dom";
import {
  addDoctor,
  resetDoctorState,

  
} from "../../Redux/addDoctor/AddDoctorslice";
import {
  updateDoctor,
  resetUpdateState,
} from "../../Redux/Doctors/updateDoctor";
import { Circle } from "lucide-react";
import CircularIndeterminate from "../../components/Layout/CircularIndeterminate";

const AddDoctors = () => {
  const dispatch = useDispatch();
  const { doctor, loading, error } = useSelector((state) => state.addDoctor);
  const [showStatus, setShowStatus] = useState(false);
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [doctorData, setDoctorData] = useState([]);

  const { id } = useParams();
  const { doctors } = useSelector((state) => state.doctors);
  useEffect(() => {
    const docToUpdate = doctors.find((doc) => doc._id === id);
    console.log('Doctor data to update:', docToUpdate);
    if (docToUpdate) {
      setDoctorData(docToUpdate);
      reset(docToUpdate); // Sync form with data
      setPreviewImage(docToUpdate?.image);
    }
  }, [id, doctors]);
  
  
  

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };




  
  
  const onSubmit = async (data) => {
    console.log('Form Data:', data);
    const formData = new FormData();
    if (id) {
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      try {
        setShowStatus(true);
        await dispatch(updateDoctor({ id, updatedData: formData })).unwrap();
        reset();
        setPreviewImage(null);
      } catch (error) {
        console.log(error);
      }
    } else {
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      try {
        setShowStatus(true);
        await dispatch(addDoctor(formData)).unwrap();
        reset();
        setPreviewImage(null);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setShowStatus(false), 5000);
      }
    }
  };


  

  return (
    <div className="flex flex-col h-screen">
      <Navbar_admin department={"Admin"} />
      <div className="flex flex-row">
        <div className="flex-shrink-0">
          <Sidebar menuItems={AdminMenuItems} />
        </div>
        {loading ? (
          <div className="flex-1 w-full p-3 md:p-0 bg-gray-100 flex items-center justify-center">
            <CircularIndeterminate/>
          </div>
        ) :( <div className="flex-1 w-full p-3 md:p-0 bg-gray-100">
          <div className="md:p-6 bg-gray-100 w-full overflow-y-auto h-[89vh] scrollbar-hide">
            <h1 className="text-2xl font-bold mb-6">Add Doctor</h1>
            {showStatus && (
              <div>
             
                {error && <p className="text-red-500">{error}</p>}
                {doctor && (
                  <p className="text-green-500">Doctor added successfully!</p>
                )}
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-white p-6 md:max-w-6xl mx-auto rounded-lg shadow-md">
                <div className="mb-6">
                  <div
                    className="mt-2 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 cursor-pointer"
                    onClick={handleIconClick}
                  >
                    {previewImage ? (
                      <img
                        src={ previewImage}
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
                    <Controller
                      name="image"
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <input
                          type="file"
                          ref={(e) => {
                            fileInputRef.current = e;
                            field.ref(e);
                          }}
                          className="hidden"
                          onChange={(e) => {
                            handleFileChange(e);
                            const file = e.target.files[0];
                            field.onChange(file);
                          }}
                        />
                      )}
                    />
                    <label className="block text-gray-700 text-center sm:text-left">
                      Upload doctor <br /> picture
                    </label>
                  </div>
                </div>

                {/* Other form fields remain unchanged */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700">Doctor name</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Name"
                      {...register("name", {
                        required: "Doctor name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Speciality</label>
                    <select
                      className="w-full p-2 border rounded mt-2"
                      {...register("speciality", {
                        required: "Speciality is required",
                      })}
                    >
                      <option value="General physician">
                        General physician
                      </option>
                      <option value="Neurologist">Neurologist</option>
                      <option value="Dermatologist">Dermatologist</option>
                    </select>
                    {errors.speciality && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.speciality.message}
                      </p>
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
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Degree</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Degree"
                      {...register("degree", {
                        required: "Degree is required",
                      })}
                    />
                    {errors.degree && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.degree.message}
                      </p>
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
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "Password should contain uppercase, lowercase, number & special character",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Fees</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="Doctor fees"
                      {...register("fees", {
                        required: "Fees are required",
                      })}
                    />
                    {errors.fees && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fees.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Experience</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-2"
                      placeholder="1 Year"
                      {...register("experience", {
                        required: "Experience is required",
                      })}
                    />
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.experience.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700">About Doctor</label>
                  <textarea
                    className="w-full p-2 border rounded mt-2"
                    rows="4"
                    placeholder="About Doctor"
                    {...register("about", {
                      required: "About Doctor is required",
                    })}
                  ></textarea>
                  {errors.about && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.about.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
                >
                  {id ? <span>Update</span> : <span>Submit</span>}
                </button>
              </div>
            </form>
          </div>
        </div>)}
       
      </div>
      <Outlet />
    </div>
  );
};

export default AddDoctors;
