import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }:any) => {
  const [token, setToken] = useState(null);

  const setAuthToken = (newToken:any) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
