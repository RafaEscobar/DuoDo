import AsyncStorage from "@react-native-async-storage/async-storage";

export const RefreshUser = async(baseUrl:any) => {
    const url = `${baseUrl}/refresh-user`;
    const token = await AsyncStorage.getItem('u-token');
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const res = await response.json();
    return res;
}