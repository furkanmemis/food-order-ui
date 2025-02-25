import React, { createContext, useState, useContext, ReactNode } from "react";
import { SessionUser } from "../Models/SessionUser";
import axios from "axios";


interface AuthContextType {
  login: (userData: SessionUser) => void;
  logout: () => void;
  name: string;
  surname: string;
  email: string;
  role: string;
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
  
  const [name, setName] = useState<string>('');
  const [surname,setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const login = async (userData: SessionUser) => {
    try {
      const { email, password } = userData;
      const response = await axios.post("http://localhost:4000/auth/login", { email, password });
  
      console.log("login response ->", response);
      const user = response.data.user;
  
      if (response.data.result === "Success") {
        localStorage.setItem("sessionUser", JSON.stringify(user));
        localStorage.setItem("token",user.token);
  
        console.log("user info", user.name, user.surname, user.email);
        setName(user.name)
        setSurname(user.surname)
        setEmail(user.email)
        setRole(user.role);
  
        // URL'yi değiştir
        window.history.pushState({}, "", "/home");
  
        // Yeni sayfa içeriğini yüklemek için durumu güncelle (Opsiyonel)
        window.dispatchEvent(new Event("popstate"));
      }
    } catch (error) {
      console.log("login error: ", error);
    }
  };

  const logout = () => {
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{login, logout, name, surname, email, role }}>
      {children}
    </AuthContext.Provider>
  );
};
