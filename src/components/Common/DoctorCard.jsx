import { React, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const DoctorCard = ({ id, name, speciality, image }) => {
  const { user } = useContext(AuthContext);
  // const onClickNavigate = () => {
  //   if (user?.role === "patient" ) {
  //     navigate(`/doctor-profile/${id}`);
  //   } else {
  //     navigate(`/login`);
  //   }
  // };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  return (
    <div
      // onClick={onClickNavigate}
      ref={ref}
      className={`flex flex-col  gap-4  bg-white  rounded-lg shadow-lg border border-gray-100 cursor-pointer  transform duration-1000  ease-out delay-100 transition-all   ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
      }`}
      key={id}
    >
      <div className="bg-[#ededed] rounded-tr-lg rounded-tl-lg ">
        <img src={image} alt="error" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-600 rounded-full "></div>{" "}
          <p className="text-green-600 font-semibold ">Available</p>{" "}
        </div>
        <h1 className="font-bold font-arimo">{name}</h1>
        <p className="text-gray-500 font-arimo"> {speciality}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
