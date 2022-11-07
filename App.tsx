import { ActivityIndicator } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import Home from "./src/screens/Home";
import theme from './src/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  return (
    <NativeBaseProvider theme={theme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </NativeBaseProvider>
  );
}

export default App;