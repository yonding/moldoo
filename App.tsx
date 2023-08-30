import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PlayButton from './components/PlayButton';
import VisualTimer from './components/VisualTimer';
import SwitchToggle from './components/SwitchToggle'
import { useFonts } from 'expo-font';


export default function App({ }) {
  const [fontsLoaded] = useFonts({
    'nanum': require('./assets/fonts/NanumSquareNeo.ttf'),
    'nanum-bold': require('./assets/fonts/NanumSquareNeoBold.ttf'),
  });
  return (
    <View style={styles.container}>
      <SwitchToggle />
      <StatusBar style="auto" />
      <VisualTimer></VisualTimer>
      <PlayButton onPress={() => { alert('시작하기') }} title="시작하기"></PlayButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E26',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
