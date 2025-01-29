import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// assets
import cross_icon from "../../assets/assets_frontend/close.png";
import menu_icon from "../../assets/assets_frontend/menu.png";
import profile_pic from "../../assets/assets_frontend/profile_pic.png";
import dropdown_icon from "../../assets/assets_frontend/down.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate()

  return (
    <nav
      className={`${
        isScrolled || location.pathname !== "/"
          ? "bg-primaryColor"
          : "bg-transparent"
      } fixed top-0 w-full transition-all duration-300  z-50  py-4 text-white`}
    >
      <div className="w-[85%] mx-auto flex justify-between items-center">
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
        <h1 className="font-viga tracking-[2px] text-3xl">Carehub</h1>

        <div className="hidden lg:flex items-center space-x-7 font-dmSans">
          <NavLink to={"/"} className="relative text-white">
            Home
            <hr className=" absolute top-7 w-full border-2 transition-all duration-700 ease-in-out opacity-0" />
          </NavLink>

          <NavLink to={"/doctors"} className="relative text-white">
            Doctors
            <hr className=" absolute top-7 w-full border-2 transition-all duration-700 ease-in-out opacity-0" />
          </NavLink>

          <NavLink to={"/about"} className="relative text-white">
            About
            <hr className=" absolute top-7 w-full border-2 transition-all duration-700 ease-in-out opacity-0" />
          </NavLink>

          <NavLink to={"/contact-Us"} className="relative text-white">
            Contact Us
            <hr className="absolute top-7  w-full border-2 transition-all duration-700 ease-in-out opacity-0" />
          </NavLink>
        </div>

        <div
          className={`absolute top-16 left-0 w-full bg-primaryColor transition-all duration-500 ${
            menuOpen
              ? "opacity-100 h-auto py-5"
              : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 text-center font-dmSans">
            <NavLink
              to={"/"}
              className="text-white text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/doctors"}
              className="text-white text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Doctors
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-white text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to={"/contact-Us"}
              className="text-white text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="flex items-center space-x-7">
          {token ? (
            <button
            // setToken(false)
              onClick={() =>{navigate("/login"),setToken(false) }}
              
              className=" md:flex items-center gap-1 py-2 bg-buttonColor px-5 rounded-full font-dmSans"
            >
              <span className="">Create</span> <span>Account </span>
            </button>
          ) : (
            <div className="flex items-center relative ">
              <img src={profile_pic} alt="" className="w-8 rounded-full" />
              <img
                src={dropdown_icon}
                alt=""
                onClick={() => setDropDown(!dropDown)}
              />

              {dropDown ? (
                <div className="absolute mx-auto top-12 right-0 bg-white w-40 rounded-lg shadow-lg font-dmSans  text-black ">
                  <div className="min-w-48 bg-stone-50 rounded flex flex-col gap-4 p-4 text-gray-600 font-medium">
                    <p onClick={()=>navigate("/profilecard")} className="hover:text-black cursor-pointer">
                      My Profile
                    </p>
                    <p onClick={()=>navigate("/my-appointments")} className="hover:text-black cursor-pointer">
                      My Appointments
                    </p>
                    <p
                      className="hover:text-black cursor-pointer"
                      onClick={() => setToken(true)}
                    >
                      {" "}
                      Logout
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
