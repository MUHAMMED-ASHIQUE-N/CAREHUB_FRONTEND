import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  User, 
  Mail, 
  Award, 
  Clock, 
  FileText, 
  DollarSign, 
  Lock, 
  ChevronLeft,
  Edit3,
  Save
} from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
const DoctorDetails = () => {

  const { state} = useLocation();
  const  {id} = useParams();
  // const { name, specialty, _id } = state.doctor;
  const doctor = state?.doctors?.find((doc) => doc._id === id)
console.log(doctor);

  

  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit,} = useForm({
  });

  const onSubmit = (data) => {
    console.log("Updated Data:", data);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 mb-6 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition duration-300"
        >
          <ChevronLeft size={18} />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Doctor"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div>
            {isEditing ? (
              <input
                {...register("name")}
                className="text-2xl font-bold bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg p-2 w-full text-white"
              />
            ) : (
              <h2 className="text-3xl font-bold">Dr. John Doe</h2>
            )}
            <p className="text-lg opacity-90 mt-1">Cardiologist</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Mail size={18} className="text-blue-500" /> Email
              </label>
              <input {...register("email")} className="w-full p-3 border border-gray-300 rounded-lg" disabled={!isEditing} />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <User size={18} className="text-blue-500" /> Speciality
              </label>
              <input {...register("speciality")} className="w-full p-3 border border-gray-300 rounded-lg" disabled={!isEditing} />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Award size={18} className="text-blue-500" /> Degree
              </label>
              <input {...register("degree")} className="w-full p-3 border border-gray-300 rounded-lg" disabled={!isEditing} />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Clock size={18} className="text-blue-500" /> Experience
              </label>
              <input {...register("experience")} className="w-full p-3 border border-gray-300 rounded-lg" disabled={!isEditing} />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <DollarSign size={18} className="text-blue-500" /> Consultation Fees
              </label>
              <input {...register("fees")} className="w-full p-3 border border-gray-300 rounded-lg" disabled={!isEditing} />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Lock size={18} className="text-blue-500" /> Password
              </label>
              <input type="password" {...register("password")} className="w-full p-3 border border-gray-300 rounded-lg" disabled={!isEditing} />
            </div>
          </div>
          <div className="space-y-2 col-span-full">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FileText size={18} className="text-blue-500" /> About
            </label>
            <textarea {...register("about")} rows="4"  className="w-full p-3 border border-gray-300 rounded-lg" disabled={!isEditing}></textarea>
          </div>
          <div className="pt-4 flex justify-end gap-4">
            {isEditing ? (
              <>
                <button type="button" onClick={cancelEdit} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg flex items-center gap-2">
                  <Save size={18} /> Save Changes
                </button>
              </>
            ) : (
              <button type="button" onClick={() => setIsEditing(true)} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg flex items-center gap-2">
                <Edit3 size={18} /> Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorDetails;
