import React, { createContext, useState, useContext, ReactNode } from "react";
import { SessionUser } from "../Models/SessionUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface AuthContextType {
  login: (userData: SessionUser) => void;
  logout: () => void;
  name: string;
  surname: string;
  email: string;
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
        console.log("user info")
        console.log(user.name)
        console.log(user.surname)
        console.log(user.email)


        window.location.href = "/home";
        setName(user.name);
        setEmail(user.email);
        setSurname(user.surname);
      }
    } catch (error) {
      console.log("login error: ", error);
    }
  };

  const logout = () => {
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{login, logout, name, surname, email }}>
      {children}
    </AuthContext.Provider>
  );
};
