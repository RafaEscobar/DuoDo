import { AuthProvider } from './src/context/AuthContext';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import React from 'react';

export default function App(){
  return (
      <AuthProvider>
        <CustomNavigation />
      </AuthProvider>
  );
}