import { Outlet } from "react-router-dom";

const PatientDashboard  = () => {
  return (
    <div>
      <h2>Patient Dashboard</h2>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  );
};

export default PatientDashboard ;
