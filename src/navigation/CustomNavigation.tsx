import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardStack } from './DashboardStack';
import { LoginStack } from './LoginStack';

export const CustomNavigation = () => {
  const { status }:any = useContext(AuthContext);

  return (
    <NavigationContainer>
        {
            (status === 'unauthorized') ?
            <LoginStack /> :
            <DashboardStack />
        }
    </NavigationContainer>
  );
};
