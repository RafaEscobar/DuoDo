import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardStack } from './DashboardStack';
import { LoginStack } from './LoginStack';
import { ValidatingLogin } from '../screens/auth/ValidatingLogin';

export const CustomNavigation = () => {
  const { status }:any = useContext(AuthContext);

  return (
    <NavigationContainer>
        {
            (status === 'checking') ?
            <ValidatingLogin /> :
            ((status === 'unauthorized') ?
            <LoginStack /> :
            <DashboardStack />)

        }
    </NavigationContainer>
  );
};
