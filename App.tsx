import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import { SelectAvatar } from './src/screens/auth/SelectAvatar';

export default function App(){
  return (
    <AuthProvider>
      {/* <CustomNavigation /> */}
      <SelectAvatar />
    </AuthProvider>
  );
}