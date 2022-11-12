import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesProps } from 'src/@types/routes';
import Home from '@screens/Home';
import CarDetails from '@screens/CarDetails';
import Schedules from '@screens/Schedules';
import PickDate from '@screens/PickDate';

const AppRoutes: React.FC = () => {
    const { Navigator, Screen } = createNativeStackNavigator<RoutesProps>();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />
            <Screen
                name='car_details'
                component={CarDetails}
            />
            <Screen
                name='schedules'
                component={Schedules}
            />
            <Screen
                name='pick_date'
                component={PickDate}
            />
        </Navigator>
    )
}

export default AppRoutes;