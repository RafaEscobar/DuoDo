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
  const [status, setStatus] = useState('checking');
  const [user, setUser] = useState('');
  const [authUrl, setAuthUrl] = useState('https://0cb6-189-203-89-106.ngrok-free.app/api');
  const [baseUrl, setBaseUrl] = useState('https://0cb6-189-203-89-106.ngrok-free.app/api/v1');
  const [avatar, setAvatar] = useState(false);

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
      const res = await WhoIAm(token);
      if (res == 'ok') {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          setUser(user);
          setToken(token);
          setStatus('authorized');
        }
      } else {
        setStatus('unauthorized');
      }
    } else {
      setStatus('unauthorized');
    }
  }

  const WhoIAm = async(token:any) => {
    const url = `${authUrl}/who-i-am`;
    console.log(url)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    const res = await response.json();
    return res.status;
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

  const seCurrentUser = (newUser:any) => {
    setUser(newUser);
  }

  return (
    <AuthContext.Provider value={{
      token,
      status,
      user,
      authUrl,
      baseUrl,
      avatar,
      setToken,
      setUser,
      setStatus,
      setAvatar
      }}>
      {children}
    </AuthContext.Provider>
  );
};

