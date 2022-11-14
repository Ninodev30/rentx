import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesProps } from 'src/@types/routes';
import Home from '@screens/Home';
import CarDetails from '@screens/CarDetails';
import PickDate from '@screens/PickDate';
import ConcludedSchedule from '@screens/ConcludedSchedule';
import Schedules from '@screens/Schedules';

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
                name='pick_date'
                component={PickDate}
            />
            <Screen
                name='concluded_schedule'
                component={ConcludedSchedule}
            />
            <Screen
                name='schedules'
                component={Schedules}
            />
        </Navigator>
    )
}

export default AppRoutes;