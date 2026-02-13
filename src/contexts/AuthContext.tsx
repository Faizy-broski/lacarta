// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

// Define the type for the auth context (optional if not using TS, but helps with errors)
interface AuthContextType {
  user: any; // Replace 'any' with a proper User type if you have one (e.g., { id: string; name: string; email: string; role: string; })
  token: string | null;
  login: (userData: any, authToken: string) => void; // Adjust types as needed
  logout: () => void;
}

// Provide a default value to avoid the TS error
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null); // Use proper type if available
  const [token, setToken] = useState<string | null>(localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      // Optionally decode token to get user data (use jwt-decode library if needed)
      // For now, assume user data is stored separately or fetched
      setUser(JSON.parse(localStorage.getItem('user') || 'null'));
    }
  }, [token]);

  const login = (userData: any, authToken: string) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('token', authToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};