import { AuthContext } from '../context/AuthContext';
import { DashboardStack } from './DashboardStack';
import { LoginStack } from './LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import { ValidatingLogin } from '../screens/auth/ValidatingLogin';
import React, { useContext } from 'react';
import { MainStackNavigation } from './MainStackNavigation';
import { BottomTabNavigation } from './BottomTabNavigation';

export const CustomNavigation = () => {
  const { status }:any = useContext(AuthContext);

  return (
    <NavigationContainer>
        {
            (status === 'checking') ?
            <ValidatingLogin /> :
            ((status === 'unauthorized') ?
            <LoginStack /> :
            <MainStackNavigation />
            )
        }
    </NavigationContainer>
  );
};
