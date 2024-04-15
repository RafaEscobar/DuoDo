import { AuthProvider } from './src/context/AuthContext';
import { useNotification } from './src/hooks/useNotification';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

export default function App(){
  useNotification();
  return (
      <AuthProvider>
        <CustomNavigation />
      </AuthProvider>
  );
}