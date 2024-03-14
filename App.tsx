import { AuthProvider } from './src/context/AuthContext';
import { useNotification } from './src/hooks/useNotification';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import React from 'react';

export default function App(){
  const expoPushToken = useNotification();
  console.log(expoPushToken);
  return (
      <AuthProvider>
        <CustomNavigation />
      </AuthProvider>
  );
}