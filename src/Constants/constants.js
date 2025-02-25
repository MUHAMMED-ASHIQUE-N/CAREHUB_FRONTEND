import home_icon from "../assets/assets_admin/home_icon.svg";
import appointment_icon from "../assets/assets_admin/appointment_icon.svg";
import add_icon from "../assets/assets_admin/add_icon.svg";
import people_icon from "../assets/assets_admin/people_icon.svg";

export const AdminPATHS = {
  HOME: "/admin-home",
  APPOINTMENTS: "/appointments_in_admin",
  ADD_DOCTORS: "/add_Doctors",
  DOCTORS_LIST: "/doctorsList",
  CHAT: "/admin-chat",
};

export const DoctorPATHS = {
  HOME: "/doctor-home",
  APPOINTMENTS: "/appointments-in-doctor",
  DOCTOR_CHAT: "/doctor-chat",
  DOCTORS_PROFILE: "/doctor-profile",
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
  {
    path: AdminPATHS.CHAT,
    icon: people_icon,
    label: "Messages",
  },
];

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
