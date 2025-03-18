import home_icon from "../assets/assets_admin/home_icon.svg";
import appointment_icon from "../assets/assets_admin/appointment_icon.svg";
import add_icon from "../assets/assets_admin/add_icon.svg";
import people_icon from "../assets/assets_admin/people_icon.svg";




export const AdminPATHS = {
  HOME: "/admin",
  APPOINTMENTS: "/admin/appointments",
  ADD_DOCTORS: "/admin/add-doctors",
  DOCTORS_LIST: "/admin/doctors-list",
};

export const AdminMenuItems = [
  {
    path: AdminPATHS.HOME,
    icon: home_icon,
    label: "Dashboard",
  },
  {
    path: AdminPATHS.APPOINTMENTS,
    icon: appointment_icon,
    label: "Appointments",
  },
  {
    path: AdminPATHS.ADD_DOCTORS,
    icon: add_icon,
    label: "Add Doctors",
  },
  {
    path: AdminPATHS.DOCTORS_LIST,
    icon: people_icon,
    label: "Doctors List",
  },

];


export const DoctorPATHS = {
  HOME: "/doctor",
  APPOINTMENTS: "/doctor/appointments",
  DOCTOR_CHAT: "/doctor/chat",
  DOCTOR_PROFILE: "/doctor/profile",
};

export const DoctorMenuItems = [
  {
    path: DoctorPATHS.HOME,
    icon: home_icon,
    label: "Dashboard",
  },
  {
    path: DoctorPATHS.APPOINTMENTS,
    icon: appointment_icon,
    label: "Appointments",
  },
  {
    path: DoctorPATHS.DOCTOR_CHAT,
    icon: add_icon,
    label: "Chat",
  },
  {
    path: DoctorPATHS.DOCTORS_PROFILE,
    icon: people_icon,
    label: "Profile",
  },
];


export const DOCTOR_IMAGE_URL = "http://localhost:7070/api/doctor/getDoctor/"