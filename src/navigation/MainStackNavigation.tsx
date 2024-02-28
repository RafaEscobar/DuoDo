import { AuthContext } from '../context/AuthContext';
import { DashboardStack } from './DashboardStack';
import { SelectAvatar } from '../screens/auth/SelectAvatar';
import React, { useContext } from 'react';

export const MainStackNavigation = () => {
    const { avatar }:any = useContext(AuthContext);
    console.log("AQUI");
    console.log(avatar);
    return (
        (avatar == true) ?
        <DashboardStack /> :
        <SelectAvatar />
    )
}