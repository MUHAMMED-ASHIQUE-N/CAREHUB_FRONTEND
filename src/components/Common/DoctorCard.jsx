import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import {deleteDoctor} from "../../Redux/Doctors/DeleteDoctor";
import { CircleX} from "lucide-react";

const DoctorCard = ({ id, name, speciality, image }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const location = useLocation();
  const isAdminPage = location.pathname.includes("admin/");

  const handleDelete = () => {
    dispatch(deleteDoctor(id));
  };

  const onClickNavigate = () => {
    if (user?.role === "patient") {
      navigate(`/doctor-profile/${id}`);
    } else if (user?.role === "admin") {
      navigate(`/admin/edit-doctor/${id}`);
    } else {
      navigate(`/login`);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 bg-white rounded-lg shadow-lg border border-gray-100 cursor-pointer transition-all duration-1000 ease-out delay-100 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
      }`}
      key={id}
    >
      <div onClick={onClickNavigate} className="bg-[#ededed] rounded-tr-lg rounded-tl-lg">
        <img src={image} alt={name} />
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <p className="text-green-600 font-semibold">Available</p>
          </div>
          <h1 className="font-bold font-arimo">{name}</h1>
          <p className="text-gray-500 font-arimo">{speciality}</p>
        </div>
        { isAdminPage && user?.role === "admin" && (
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white  rounded-full"
       
          >
         <CircleX/>
          </button>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
