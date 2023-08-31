import { StyleSheet, Text, View, Image } from "react-native";
import KaKaoLoginScreen from "./KakaoLoginScreen";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
i

export default function LoadingScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <Image
                source={require('../assets/images/moldoo-logo.png')}
                style={styles.image}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('KaKaoLoginScreen')}
                style={styles.NextBottom}
            >
                <Text style={styles.BottomText}>카카오 화면으로</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
});