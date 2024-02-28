import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { CustomNavigation } from './src/navigation/CustomNavigation';

export default function App(){
  return (
    <AuthProvider>
      <CustomNavigation />
    </AuthProvider>
  );
}