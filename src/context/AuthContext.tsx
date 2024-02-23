import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }:any) => {
  const [token, setToken] = useState('');
  const [status, setStatus] = useState('unauthorized');

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async() => {
    const token = await AsyncStorage.getItem('u-token');
    if (token) {
      //!TODO: Validamos por medio de una peticion que el token sea valido aun

      setToken(token);
      setStatus('authorized');
    }
  }

  const setAuthToken = async (newToken:any) => {

  };

  const setUserStatus = (newStatus:any) => {
    setStatus(newStatus);
  }

  return (
    <AuthContext.Provider value={{ token, setAuthToken, status }}>
      {children}
    </AuthContext.Provider>
  );
};

