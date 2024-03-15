import AsyncStorage from "@react-native-async-storage/async-storage";

export const RegisterRequest = async (name:any, last_name:any, email:any, password:any, birthdate:any, authUrl:any) => {
    try {
        const expoPushToken = await AsyncStorage.getItem('expo-push-token');
        console.log(expoPushToken);
        console.log(typeof expoPushToken);
        //  const url = `${authUrl}/register`;
        const url = `https://e04c-187-235-154-185.ngrok-free.app/api/register`;
        console.log(url);
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
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};