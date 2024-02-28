import { AuthContext } from '../context/AuthContext';
import { LoginStack } from './LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import { ValidatingLogin } from '../screens/auth/ValidatingLogin';
import React, { useContext } from 'react';
import { MainStackNavigation } from './MainStackNavigation';

export const CustomNavigation = () => {
  const { status }:any = useContext(AuthContext);
  console.log("1. Estatus: " + status);
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
