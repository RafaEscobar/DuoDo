import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }:any) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('u-token')
      .then( token => {
        if (token) setToken(token);
      });
  }, []);

  const setAuthToken = (newToken:any = null) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
