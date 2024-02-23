import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoginStackNavigation } from './LoginStackNavigation';
import { DashboardNavigation } from './DashboardNavigation';
import { NavigationContainer } from '@react-navigation/native';

export const CustomNavigation = () => {
  const { status }:any = useContext(AuthContext);

  return (
    <NavigationContainer>
        {
            (status === 'unauthorized') ?
            <LoginStackNavigation /> :
            <DashboardNavigation />
        }
    </NavigationContainer>
  );
};
