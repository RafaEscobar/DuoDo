import { ALERT_TYPE, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export const useAlert = (type:any, title:any, text:any) => {
    Toast.show({
        type: type,
        title: title,
        textBody: text,
    });
}