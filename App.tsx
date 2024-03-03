import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { AuthProvider } from './src/context/AuthContext';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import React from 'react';

export default function App(){
  return (
    <ActionSheetProvider>
      <AuthProvider>
        <CustomNavigation />
      </AuthProvider>
    </ActionSheetProvider>
  );
}