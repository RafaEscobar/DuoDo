import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { CustomNavigation } from './src/navigation/CustomNavigation';
import { ValidatingLogin } from './src/screens/auth/ValidatingLogin';
import { DashboardStack } from './src/navigation/DashboardStack';
import { BottomTabNavigation } from './src/navigation/BottomTabNavigation';
import { AddTask } from './src/screens/create/AddTask';
import { AllTask } from './src/screens/create/AllTask';

export default function App(){
  // console.log(process.env.AUTH_URL);
  return (
    <AuthProvider>
      {/* <AllTask /> */}
      <AddTask />
    </AuthProvider>
  );
}