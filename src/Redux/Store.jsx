import {configureStore} from "@reduxjs/toolkit";
import addDoctorReducer from "./addDoctor/AddDoctorslice"; // Ensure this is the correct path
import doctorsReducer from "./DoctotFilter/doctorsSlice"
import doctorUpdateReducer from "./Doctors/updateDoctor"
export default configureStore({
  reducer: {
   doctors : doctorsReducer,
   addDoctor: addDoctorReducer,
   doctorUpdate: doctorUpdateReducer, 
  }
});