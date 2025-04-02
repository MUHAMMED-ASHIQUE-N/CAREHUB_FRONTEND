  import React, { useEffect, useMemo } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import Navbar_admin from "../../components/Admin,Doctor,Pharmacy/Navbar_admin";
  import Sidebar from "../../components/Admin,Doctor,Pharmacy/Sidebar";
  import DoctorCard from "../../components/Common/DoctorCard";
  import { AdminMenuItems } from "../../Constants/constants";
  import {
    setSearchQuery,
    setSelectedSpecialty,
    toggleSpecialtyFilter,
    getDoctors,
  } from "../../Redux/DoctotFilter/doctorsSlice";
  import {DOCTOR_IMAGE_URL} from '../../Constants/constants'
  // Assets
  import search_icon from "../../assets/assets_frontend/search_icon.svg";
  import down1 from "../../assets/assets_frontend/dropdown_icon.svg";

  const DoctorsList = () => {
    const dispatch = useDispatch();
    const {
      doctors,
      searchQuery,
      filteredDoctors,
      selectedSpecialty,
      showSpecialtyFilter,
      loading,
      error,
    } = useSelector((state) => state.doctors);

    useEffect(() => {
      dispatch(getDoctors());
    }, [dispatch]);

    const specialties = useMemo(
      () => ["all", ...new Set(filteredDoctors.map((doctor) => doctor.speciality))],
      [filteredDoctors]
    );

    return (
      <div className="flex flex-col h-screen">
        <Navbar_admin department="Admin" />
        <div className="flex flex-1">
          <Sidebar menuItems={AdminMenuItems} />
          <main className="flex-1  bg-gray-50">
            <div className="p-6 bg-slate-100  w-full overflow-y-auto h-[87vh] scrollbar-hide">
              <h1 className="font-semibold text-lg mb-4 ">All Doctors</h1>
              {/* Search & Filter Section */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-6">
                {/* Search Input */}
                <div className="relative w-full md:w-1/2 ">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                    className="border w-full border-black px-4 py-2 rounded-full"
                  />
                  <img
                    src={search_icon}
                    alt="Search Icon"
                    className="absolute w-5 h-5 right-4 top-3"
                  />
                </div>
                {/* Specialty Filter */}
                <div className="relative w-full md:w-48">
                  <button
                    className="flex items-center justify-between w-full border border-gray-300 px-4 py-2 rounded-full"
                    onClick={() => dispatch(toggleSpecialtyFilter())}
                  >
                    <span>{selectedSpecialty === "all" ? "All Specialties" : selectedSpecialty}</span>
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
              {/* Status Messages */}
              {loading && <p className="text-center">Loading doctors...</p>}
              {error && <p className="text-center text-red-500">Error: {error}</p>}
              {/* Selected Specialty Badge */}
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
              {/* Doctors Grid */}
                    
      
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-6">
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
          
            </div>
          </main>
        </div>
      </div>
    );
  };

  export default DoctorsList;
