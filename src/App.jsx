import React from "react";
import {Routes, Route } from "react-router-dom";
import Common from "./Routes/Common";
import Patient from "./Routes/Patient";
import Admin from "./Routes/Admin";
import Doctor from "./Routes/Doctor";
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import Pharmacy from "./Routes/Pharmacy";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Common />} />
      <Route path="/patient/*" element={<ProtectedRoute role="patient" />}>
        <Route path="*" element={<Patient />} />
      </Route>

      <Route path="/admin/*" element={<ProtectedRoute role="admin" />}>
        <Route path="*" element={<Admin />} />
      </Route>

      <Route path="/doctor/*" element={<ProtectedRoute role="doctor" />}>
        <Route path="*" element={<Doctor />} />
      </Route>

      <Route path="/pharmacy/*" element={<ProtectedRoute role="pharmacy" />}>
        <Route path="*" element={<Pharmacy />} />
      </Route>

      <Route
        path="/not-found"
        element={<h2>Page Not Found or Access Denied</h2>}
      />
    </Routes>
  );
};

export default App;
