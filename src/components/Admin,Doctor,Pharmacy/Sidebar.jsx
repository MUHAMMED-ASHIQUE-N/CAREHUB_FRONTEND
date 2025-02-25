import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Sidebar = ({ menuItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const handleItemClick = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  const isActive = (path) => activeItem === path;

  return (
    <div className="w-16 md:w-52 flex justify-center h-auto">
      <div className="mt-5 w-full flex flex-col items-center gap-7 text-black">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleItemClick(item.path)}
            className={`w-full cursor-pointer p-3 flex justify-center ${
              isActive(item.path)
                ? "bg-blue-50 border-r-4 border-blue-500 rounded-r-lg"
                : ""
            }`}
          >
            <div className="md:w-[80%] flex gap-5 items-center">
              <img
                src={item.icon}
                alt={`${item.label} icon`}
                className="w-6 h-6"
              />
              <p className="hidden md:block mt-1">{item.label}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;