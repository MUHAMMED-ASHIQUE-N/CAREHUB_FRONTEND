import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// assets
import cross_icon from "../../assets/assets_frontend/close.png";
import menu_icon from "../../assets/assets_frontend/menu.png";
import profile_pic from "../../assets/assets_frontend/profile_pic.png";
import dropdown_icon from "../../assets/assets_frontend/down.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isPatient = user?.role === "patient";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled || (location.pathname !== "/"  && location.pathname !== "/patient" ) 
          ? "bg-primaryColor"
          : "bg-transparent"
      } fixed top-0 w-full transition-all duration-300 z-50 py-4 text-white`}
    >
      <div className="w-[85%] mx-auto flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
        >
          <img
            src={menuOpen ? cross_icon : menu_icon}
            alt="Menu"
            className="w-6 h-6"
          />
        </button>

        {/* Logo */}
        <h1 className="font-viga tracking-[2px] text-3xl">Carehub</h1>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-7 font-dmSans">
          <NavLink to={ isPatient? "/patient" : "/" }className="relative text-white">Home</NavLink>
          <NavLink to="/doctors" className="relative text-white">Doctors</NavLink>
          <NavLink to="/about" className="relative text-white">About</NavLink>
          <NavLink to="/contact-us" className="relative text-white">Contact Us</NavLink>
        </div>

        {/* Authentication Section */}
        <div className="flex items-center space-x-7">
          {isPatient ?  (
            <div className="flex items-center relative">
              <img src={profile_pic} alt="Profile" className="w-8 rounded-full cursor-pointer" onClick={() => setDropDown(!dropDown)} />
              <img src={dropdown_icon} alt="Dropdown" onClick={() => setDropDown(!dropDown)} />

              {dropDown && (
                <div className="absolute top-12 right-0 bg-white w-40 rounded-lg shadow-lg font-dmSans text-black">
                  <div className="min-w-48 bg-stone-50 rounded flex flex-col gap-4 p-4 text-gray-600 font-medium">
                    <p onClick={() => navigate("/profilecard")} className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                    <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="md:flex items-center gap-1 py-2 bg-buttonColor px-5 rounded-full font-dmSans"
            >
              <span>Create</span> <span>Account</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
