import { View } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
    return (
        <View flex={1} bgColor='gray.200'>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}

export default Routes;