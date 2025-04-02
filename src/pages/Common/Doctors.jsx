  import React, { useEffect } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import {
    setSearchQuery,
    setSelectedSpecialty,
    toggleSpecialtyFilter,
    getDoctors,
  } from "../../Redux/DoctotFilter/doctorsSlice";
  import { DOCTOR_IMAGE_URL } from "../../Constants/constants";

  //assets
  import search_icon from "../../assets/assets_frontend/search_icon.svg";
  import down1 from "../../assets/assets_frontend/dropdown_icon.svg";
  import Navbar from "../../components/Common/Navbar";
  import DoctorCard from "../../components/Common/DoctorCard";
  import Banner from "../../components/Common/Banner";
  import Footer from "../../components/Common/Footer";

  const Doctors = () => {
    const dispatch = useDispatch();
    const {
      searchQuery,
      filteredDoctors,
      selectedSpecialty,
      showSpecialtyFilter,
      loading,
      error,
    } = useSelector((state) => state.doctors);

    useEffect(() => {
      dispatch(getDoctors()); // Fetch doctors on component mount
    }, [dispatch]);

    const specialties = [
      "all",
      ...new Set(filteredDoctors.map((doctor) => doctor.speciality)),
    ];

    return (
      <div>
        <Navbar />
        <div className="mx-auto lg:w-[85%]">
          <div className="mx-auto flex justify-center gap-4 flex-col md:flex-row items-center py-20 w-[90%] md:w-full mt-[4.5rem]">
            <div className="w-full md:w-1/2 flex-shrink-0 relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="border w-full border-black px-4 py-2 rounded-full relative"
              />
              <img
                src={search_icon}
                alt="Search Icon"
                className="absolute w-5 h-5 right-5 top-3"
              />
            </div>

            <div className="relative w-full md:w-auto">
              <button
                className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full w-full md:w-48 justify-between"
                onClick={() => dispatch(toggleSpecialtyFilter())}
              >
                <span>
                  {selectedSpecialty === "all"
                    ? "All Specialties"
                    : selectedSpecialty}
                </span>
                <img src={down1} alt="Dropdown" className="w-4 h-4" />
              </button>

              {showSpecialtyFilter && (
                <div className="absolute right-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {specialties.map((specialty, index) => (
                    <button
                      key={index}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        specialty === selectedSpecialty ? "bg-blue-50" : ""
                      }`}
                      onClick={() => dispatch(setSelectedSpecialty(specialty))}
                    >
                      {specialty === "all" ? "All Specialties" : specialty}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {loading ? (
            <p className="text-center">Loading doctors...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <>
              {selectedSpecialty !== "all" && (
                <div className="text-center mb-6">
                  <span className="bg-primaryColor text-white px-4 py-1 rounded-full text-sm">
                    Showing: {selectedSpecialty}
                    <button
                      onClick={() => dispatch(setSelectedSpecialty("all"))}
                      className="ml-2 text-white hover:text-gray-200"
                    >
                      ×
                    </button>
                  </span>
                </div>
              )}

              <div className="mx-auto lg:w-[85%] w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor._id}
                    id={doctor._id}
                    image={DOCTOR_IMAGE_URL+doctor.image}
                    name={doctor.name}
                    speciality={doctor.speciality}
                  />
                ))}
              </div>
            </>
          )}

          <Banner />
        </div>
        <Footer />
      </div>
    );
  };

  export default Doctors;
