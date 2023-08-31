import { createNativeStackNavigator } from "@react-navigation/native-stack";
import KakaoLoginScreen from "../screens/KakaoLoginScreen";
export default function AuthStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="KakaoLogin" component={KakaoLoginScreen} />
        </Stack.Navigator>
    );
}