  


  import React, { useEffect } from 'react';
  import { Controller, useForm } from 'react-hook-form';
  import { useDispatch, useSelector } from 'react-redux';
  import { useParams, useNavigate } from 'react-router-dom';
  import { updateDoctor } from '../../Redux/Doctors/updateDoctor'; // your redux update function
  import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useRef } from 'react';
import upload_Icon from "../../assets/assets_admin/upload_area.svg";
import { DOCTOR_IMAGE_URL } from '../../Constants/constants';

  const DoctorDetailsEditingPage = () => {
    const [doctorData, setDoctorData] = useState(null);
      const [previewImage, setPreviewImage] = useState(null);
      const fileInputRef = useRef(null);
    
    const { id } = useParams();
    const { doctors } = useSelector((state) => state.doctors);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      const doctor = doctors.find((doctor) => doctor._id === id);
      setDoctorData(doctor);
    }, [id, doctors]);
    console.log('this', doctorData);
    

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
    

    const {
      register,
      handleSubmit,
      setValue,
      control,
      formState: { errors },
    } = useForm();
  
    useEffect(() => {

      if (doctorData) {
        // Populate form fields
        setValue('name', doctorData.name);
        setValue('email', doctorData.email);
        setValue('speciality', doctorData.speciality || '');
        setValue('degree', doctorData.degree || '');
        setValue('password', doctorData.password || '');
        setValue('about', doctorData.about || '');
      setPreviewImage(DOCTOR_IMAGE_URL+ doctorData.image || '');
      }
    }, [doctorData, setValue]);
  
    // const onSubmit = (data) => {
    //   dispatch(updateDoctor({ id, updatedData: data }))
    //     .then(() => {
    //       toast.success('Doctor updated successfully!');
    //     })
    //     .catch(() => {
    //       toast.error('Update failed!');
    //     });
    // };

    const onSubmit = async (data) => {
      const formData = new FormData();

   Object.entries(data).forEach(([Key, value]) => {
formData.append(Key, value)
   });

   try{
    await dispatch(updateDoctor(({id, updatedData: formData}))).unwrap();
    toast.success('Doctor updated successfully!');
   } catch (error) {
     toast.error('Update failed!');
    console.log(error, "error");
    
    }
  }
  
    if (!doctorData) {
      return <div className="text-center mt-10">Loading...</div>;
    }
  
    return (
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Edit Doctor Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
        <div>
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
        </div>

          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
  
          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Invalid email',
                },
              })}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
  
          {/* Speciality */}
          <div>
            <label className="block font-medium">Speciality</label>
            <input
              type="text"
              {...register('speciality')}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
  
          {/* Degree */}
          <div>
            <label className="block font-medium">Degree</label>
            <input
              type="text"
              {...register('degree')}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium">Degree</label>
            <input
              type="text"
              {...register('password')}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium">Degree</label>
            <input
              type=""
              {...register('about')}
              className="w-full p-2  px-4 py-5 border border-gray-300 rounded-lg"
            />
          </div>
  
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default DoctorDetailsEditingPage;
  