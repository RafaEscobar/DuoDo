import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import { SelectAvatar } from './src/screens/auth/SelectAvatar';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function App(){
  return (
    <ActionSheetProvider>
      <AuthProvider>
        <CustomNavigation />
      </AuthProvider>
    </ActionSheetProvider>
  );
}