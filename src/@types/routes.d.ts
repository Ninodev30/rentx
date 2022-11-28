import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import RentalPeriodType from './rentalPeriod';
import CarDTOType from 'src/dtos/CarDTO';

export type RoutesProps = {
    home: undefined;
    car_details: {
        car: CarDTOType;
    }
    pick_date: {
        car: CarDTOType;
    };
    rent_car_details: {
        car: CarDTOType;
        dates: string[];
        rentalPeriod: RentalPeriodType;
    }
    concluded_schedule: undefined;
    schedules: undefined;
}

type RoutesNavigationProps = NativeStackNavigationProp<RoutesProps>;

export default RoutesNavigationProps;