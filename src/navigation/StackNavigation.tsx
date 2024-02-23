import { AuthContext } from '../context/AuthContext';
import { BottomTabNavigation } from './BottomTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from '../screens/login/Landing';
import { Login } from '../screens/login/Login';
import { ResetPassword } from '../screens/login/ResetPassword';


const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const { status }:any = useContext(AuthContext);
  console.log(status);
  return (
    </Stack.Navigator>
  );
}
