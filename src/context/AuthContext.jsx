import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      logout();
    }
    setLoading(false); // Set loading to false after checking
  }, []);



  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };


  const login = async (email, password) => {
    try {
      const res = await api.post("user/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      
      const redirectPath = getRedirectPath(res.data.user.role);
      navigate(redirectPath, { replace: true }); // Ensure redirection is correct
    } catch (err) {
      console.error(err);
    }
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
        return "/patient";
      default:
        return "/";
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};