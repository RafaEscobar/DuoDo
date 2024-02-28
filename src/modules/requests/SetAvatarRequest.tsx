import AsyncStorage from "@react-native-async-storage/async-storage";

export const SetAvatarRequest = async(authUrl:any, user_id:any, avatar_id:any) => {
    const url = `${authUrl}/set-avatar`;
    const token = await AsyncStorage.getItem('u-token');
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({user_id, avatar_id}),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const res = await response.json();
}