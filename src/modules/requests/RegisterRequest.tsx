import AsyncStorage from "@react-native-async-storage/async-storage";
export const RegisterRequest = async (name:any, last_name:any, email:any, password:any, birthdate:any, authUrl:any) => {
    const expoPushToken = await AsyncStorage.getItem('expo-push-token');
    const url = `${authUrl}/register`;
    const params = {
        name,
        last_name,
        email,
        password,
        birthdate,
        expo_push_token: expoPushToken,
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params),
    });
    const res = await response.json();
    return {
        'body': res,
        'status': response.status
    };
};