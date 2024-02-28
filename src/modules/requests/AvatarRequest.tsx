import AsyncStorage from "@react-native-async-storage/async-storage";

export const AvatarRequest = async(baseUrl:any) => {
    const url = `${baseUrl}/avatars`;
    const token = await AsyncStorage.getItem('u-token');
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const res = await response.json();
    console.log(res);
    return res.data;
}