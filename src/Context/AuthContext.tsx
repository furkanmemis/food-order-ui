import React, { createContext, useState, useContext, ReactNode } from "react";
import { SessionUser } from "../Models/SessionUser";
import axios from "axios";

interface AuthContextType {
  user: SessionUser | null;
  login: (userData: SessionUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<SessionUser | null>(null);

  const login = async (userData: SessionUser) => {
    try {
      const password = userData.password;
      const email = userData.email;

      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      const user = response.data.user;

      if (response.data.result === "Success") {
        localStorage.setItem("sessionUser", user);

        window.location.href = "/home";
      }
    } catch (error) {
      console.log("login error: ", error);
    }
  };

  const logout = () => {
    setUser(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
