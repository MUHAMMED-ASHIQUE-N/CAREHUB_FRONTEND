import React from "react";
import { Routes, Route } from "react-router-dom";
import Common from "./Routes/Common";
import Admin from "./Routes/Admin";
import Doctor from "./Routes/Doctor";
import Pharmacy from "./Routes/Pharmacy";
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import Patient from "./Routes/Patient"; // Adjust the import path as needed
import ProfileCard from "./pages/Patient/ProfileCard";
import MyAppointments from "./pages/Patient/MyAppointments";
import Home from "./pages/Common/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Common />} />

      <Route element={<ProtectedRoute role="patient" />}>
        <Route path="/patient" element={<Home />} />
                <Route path="profilecard" element={<ProfileCard/>} />
        <Route path="my-appointments" element={<MyAppointments />} />
                
        
      </Route>

      <Route element={<ProtectedRoute role="admin" />}>
        <Route path="/admin/*"  element={<Admin />} />
      </Route>

      <Route element={<ProtectedRoute role="doctor" />}>
        <Route path="/doctor/*" element={<Doctor />} />
      </Route>

      <Route element={<ProtectedRoute role="pharmacy" />}>
        <Route path="/pharmacy/*" element={<Pharmacy />} />
      </Route>

      <Route path="/not-found" element={<h2>Page Not Found or Access Denied</h2>} />
    </Routes>
  );
};

export default App;