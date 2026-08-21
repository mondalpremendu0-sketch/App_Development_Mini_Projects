import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider
      value={{ User, setUser, loading, setLoading, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
