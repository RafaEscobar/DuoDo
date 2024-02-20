import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('u-token');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    };

    loadToken();
  }, []);

  const setAuthToken = async (newToken:any) => {
    try {
      setToken(newToken);
      await AsyncStorage.setItem('u-token', newToken);
    } catch (error) {
      console.log('Error: ', error);  
    }
  };
  
  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
