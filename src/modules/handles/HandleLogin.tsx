import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginModule } from "../api/LoginModule";

export const handleLogin = async (email: any, password: any, navigate: any) => {
  try {
    const token = await LoginModule({
      email,
      password
    });
    await AsyncStorage.setItem('u-token', token);
    navigate('BottomTabNavigator');
  } catch (error) {
    console.log('Error: ', error);
  }
}