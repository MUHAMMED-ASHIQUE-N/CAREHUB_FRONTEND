import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      logout();
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const login = async (email, password) => {
    setLoading(true); // Show loader
    try {
      const res = await api.post("user/login", { email, password });
      const token = res.data.token || res.data.adminToken || res.data.phamacyToken;
      const user = res.data.user || { role: res.data.role };
  
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
  
      navigate(getRedirectPath(user.role), { replace: true });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); 
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
