import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RoutesProps = {
    home: undefined;
    car_details: undefined;
    pick_date: undefined;
    concluded_schedule: undefined;
    schedules: undefined;
}

type RoutesNavigationProps = NativeStackNavigationProp<RoutesProps>;

export default RoutesNavigationProps;