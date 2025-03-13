import {configureStore} from "@reduxjs/toolkit";
import addDoctorReducer from "./addDoctor/AddDoctorslice"; // Ensure this is the correct path
import doctorsReducer from "./DoctotFilter/doctorsSlice"
export default configureStore({
  reducer: {
   doctors : doctorsReducer,
   addDoctor: addDoctorReducer, // Ensure this is correctly assigned
  }
});