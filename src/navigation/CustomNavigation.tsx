import { AuthContext } from '../context/AuthContext';
import { LoginStack } from './LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import { ValidatingLogin } from '../screens/auth/ValidatingLogin';
import React, { useContext } from 'react';
import { DashboardStack } from './DashboardStack';

export const CustomNavigation = () => {
  const { status }:any = useContext(AuthContext);

  return (
    <NavigationContainer>
        {
            (status === 'checking') ?
            <ValidatingLogin /> :
            ((status === 'unauthorized') ?
            <LoginStack /> :
            // <MainStackNavigation />
            <DashboardStack />
            )
        }
    </NavigationContainer>
  );
};
