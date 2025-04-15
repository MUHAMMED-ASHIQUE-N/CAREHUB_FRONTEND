import { useState, useEffect } from "react";
import { 
  User, 
  Mail, 
  Award, 
  Clock, 
  FileText, 
  DollarSign, 
  Lock, 
  ChevronLeft,
  Edit3
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DOCTOR_IMAGE_URL } from "../../Constants/constants";
import { getDoctors } from "../../Redux/DoctotFilter/doctorsSlice";

const DoctorDetails = () => {
  const [doctorData, setDoctorData] = useState(null);
  const { id } = useParams();
  const { doctors } = useSelector((state) => state.doctors);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const doctor = doctors.find((doctor) => doctor._id === id);
    setDoctorData(doctor);
  }, [id, doctors]);

  useEffect(() => {
    dispatch(getDoctors());  
  }, [dispatch]); 
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
              src={DOCTOR_IMAGE_URL + doctorData?.image || "Loding..."}
              alt="Doctor"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{doctorData?.name || "Loding..."}</h2>
            <p className="text-lg opacity-90 mt-1">{doctorData?.speciality || "Loding..."}</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Mail size={18} className="text-blue-500" /> Email
            </label>
            <input value={doctorData?.email || "Loding..."} className="w-full p-3 border border-gray-300 rounded-lg" disabled />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <User size={18} className="text-blue-500" /> Speciality
            </label>
            <input value={doctorData?.speciality || "Loding..."} className="w-full p-3 border border-gray-300 rounded-lg" disabled />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Award size={18} className="text-blue-500" /> Degree
            </label>
            <input value={doctorData?.degree || "Loding..."} className="w-full p-3 border border-gray-300 rounded-lg" disabled />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Clock size={18} className="text-blue-500" /> Experience
            </label>
            <input value={doctorData?.experience || "Loding..."} className="w-full p-3 border border-gray-300 rounded-lg" disabled />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <DollarSign size={18} className="text-blue-500" /> Consultation Fees
            </label>
            <input value={doctorData?.fees || "Loding..."} className="w-full p-3 border border-gray-300 rounded-lg" disabled />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Lock size={18} className="text-blue-500" /> Password
            </label>
            <input type="password" value={doctorData?.password || "Loding..."} className="w-full p-3 border border-gray-300 rounded-lg" disabled />
          </div>
        </div>
        <div className="space-y-2 col-span-full">
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <FileText size={18} className="text-blue-500" /> About
          </label>
          <textarea rows="4" value={doctorData?.about || "Loding..."} className="w-full p-3 border border-gray-300 rounded-lg" disabled></textarea>
        </div>
        <div className="pt-4 flex justify-end">
          <button onClick={() => navigate(`/admin/edit-doctor/${id}`)} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg flex items-center gap-2">
            <Edit3 size={18} /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
