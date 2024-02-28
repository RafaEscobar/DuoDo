import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
import { SelectedStackNavigation } from './SelectedStackNavigation';
import { DashboardStack } from './DashboardStack';

export const MainStackNavigation = () => {
    const { avatar }:any = useContext(AuthContext);
    return (
        (avatar == true) ?
        <DashboardStack /> :
        <SelectedStackNavigation />
    )
}