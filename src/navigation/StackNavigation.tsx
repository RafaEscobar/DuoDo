import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login/Login';

import React, { useContext } from 'react';
import { Landing } from '../screens/login/Landing';
import { SignUp } from '../screens/login/SignUp';
import { ResetPassword } from '../screens/login/ResetPassword';
import { AuthContext } from '../context/AuthContext';
import { BottomTabNavigation } from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const { status }:any = useContext(AuthContext);
  console.log(status);
  return (
    <Stack.Navigator>
      {
        (status == 'unauthorized') ?
          (
            <>
              <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false}}/>
            </>
          ) :
          (
            <>
              <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ headerShown: false}}  />
            </>
          )

      }
    </Stack.Navigator>
  );
}
