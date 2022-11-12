import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RoutesProps = {
    home: undefined;
    car_details: undefined;
    schedules: undefined;
    pick_date: undefined;
}

type RoutesNavigationProps = NativeStackNavigationProp<RoutesProps>;

export default RoutesNavigationProps;