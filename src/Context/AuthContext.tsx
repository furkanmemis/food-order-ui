import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SessionUser } from '../models/SessionUser';

interface AuthContextType {
  user: SessionUser | null;
  login: (userData: SessionUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<SessionUser | null>(null);

  const login = (userData: SessionUser) => {
    if(userData.email === "admin" && userData.password === "admin"){
        setUser(userData);
        window.location.href="/home";
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