import { AuthContext } from '../context/AuthContext';
import { DashboardStack } from './DashboardStack';
import { SelectedStackNavigation } from './SelectedStackNavigation';
import React, { useContext } from 'react';

export const MainStackNavigation = () => {
    const { avatar }:any = useContext(AuthContext);
    console.log(avatar);
    return (
        (avatar == true) ?
        <DashboardStack /> :
        <SelectedStackNavigation />
    )
}