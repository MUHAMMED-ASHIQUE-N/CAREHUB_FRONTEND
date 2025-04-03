import {configureStore} from "@reduxjs/toolkit";
import addDoctorReducer from "./addDoctor/AddDoctorslice"; // Ensure this is the correct path
import doctorsReducer from "./DoctotFilter/doctorsSlice"
import doctorUpdateReducer from "./Doctors/updateDoctor"
import doctorDeleteReducer  from "./Doctors/DeleteDoctor"
export default configureStore({
  reducer: {
   doctors : doctorsReducer,
   addDoctor: addDoctorReducer,
   doctorUpdate: doctorUpdateReducer, 
   deleteDoctor: doctorDeleteReducer,
 

  }
});