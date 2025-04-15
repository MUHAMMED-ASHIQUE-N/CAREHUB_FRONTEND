import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Appointments from "../pages/Admin/Appointments";
import AddDoctors from "../pages/Admin/AddDoctors";
import DoctorsList from "../pages/Admin/DoctorsList";
import Dashboard from "../pages/Admin/Dashboard";
import DoctorDetails from "../pages/Admin/DoctorDetails";
import DoctorDetailsEditingPage from "../pages/Admin/DoctorDetailsEditingPage";

const AdminLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="add-doctors" element={<AddDoctors />} />
        <Route path="edit-doctor/:id" element={<AddDoctors />} />
        <Route path="doctors-list" element={<DoctorsList />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/doctor-editing/:id" element={<DoctorDetailsEditingPage />} />
      </Route>
    </Routes>
  );
};

export default Admin;
