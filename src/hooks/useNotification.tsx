import { Platform } from 'react-native';
import { useEffect } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';



/**
 * Set configuration to background actions
 */
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const verifyPermissions = async() => {
    if (Device.isDevice) {
        //* Get current permissions status
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        /**
         * Verify current permissions status
         ** If there're no notification permissions request them
         */
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        return finalStatus;
    } else {
        console.log('Se requiere de un equipo físico para lanzar notificaciones push.');
    }
}

const registerForPushNotificationsAsync = async() => {

    Notifications.addNotificationReceivedListener(handleNotification);

    let token:any;

    //* Set configurations for an android device
    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#A055EB',
        });
    }

    //* Get permissons status
    const finalStatus = await verifyPermissions();

    let expoPushToken = await AsyncStorage.getItem('expo-push-token');

    if (!expoPushToken) {
        /**
         * If there's no notification permissions, show an error
         */
        if (finalStatus !== 'granted') {
            console.log('No se cuenta con permisos para lanzar notificaciones push.');
            return;
        } else {
            //* Get an expo token
            token = await Notifications.getExpoPushTokenAsync({
                projectId: Constants.expoConfig.extra.eas.projectId,
            });
            await AsyncStorage.setItem('expo-push-token', token.data);
        }
    }
}

const handleNotification = (notification:any) => {
    if (notification.request.content.title === 'Solicitud de amistad.') {
        console.log("Se recibio una notificación de amistad.");
    }
}

export const useNotification = () => {
    useEffect(() => {
        registerForPushNotificationsAsync();
    }, []);
}