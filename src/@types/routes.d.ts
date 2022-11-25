import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CarDTOType } from 'src/dtos/CarDTO';

export type RoutesProps = {
    home: undefined;
    car_details: CarDTOType;
    pick_date: undefined;
    rent_car_details: undefined;
    concluded_schedule: undefined;
    schedules: undefined;
}

type RoutesNavigationProps = NativeStackNavigationProp<RoutesProps>;

export default RoutesNavigationProps;