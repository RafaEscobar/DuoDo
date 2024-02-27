import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import Config from 'react-native-config';

export default function App(){
  console.log(process.env.AUTH_URL);
  return (
    <AuthProvider>
      <CustomNavigation />
    </AuthProvider>
  );
}