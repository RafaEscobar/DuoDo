import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

/**
 ** AuthProviderProps interface to {children} param
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Context entity
 */
export const AuthContext = createContext({});

/**
 ** Function to build the AuthContext for the Auth
 * @param {children}
 * @returns void
 */
export const AuthProvider = ({ children }:AuthProviderProps) => {
  //* useState's
  const [token, setToken] = useState('');
  const [status, setStatus] = useState('unauthorized');

  /**
   ** Secondary load of token validation
   */
  useEffect(() => {
    validateToken();
  }, []);

  /**
   ** Async function to the token validate
   * @returns void
   */
  const validateToken = async() => {
    const token = await AsyncStorage.getItem('u-token');
    if (token) {
      //!TODO: Validamos por medio de una peticion que el token sea valido aun

      setToken(token);
      setStatus('authorized');
    }
  }

  /**
   ** Function to set token in the context
   * @param newToken - Current token
   */
  const setAuthToken = (newToken:string) => {
    setToken(newToken);
  };

  /**
   ** Function to set status in the context
   * @param newStatus - Current status
   */
  const setUserStatus = (newStatus:string) => {
    setStatus(newStatus);
  }

  return (
    <AuthContext.Provider value={{ token, status, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

