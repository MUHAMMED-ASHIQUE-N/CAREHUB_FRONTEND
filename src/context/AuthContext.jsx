import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(); // Correct Context Name

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser)); // Ensure storedUser is parsed
    } else {
      logout();
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.post("user/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user info properly
      setUser(res.data.user);
      navigate(getRedirectPath(res.data.user.role));
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Remove stored user info
    setUser(null);
    navigate("/");
  };

  const getRedirectPath = (role) => {
    switch (role) {
      case "admin":
        return "/admin";
      case "doctor":
        return "/doctor";
      case "pharmacy":
        return "/pharmacy";
      case "patient":
        return "/";
      default:
        return "/";
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
