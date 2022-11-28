import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, HStack, Text, VStack } from 'native-base';
import { DateData } from 'react-native-calendars';
import { format } from 'date-fns';
import CarDTOType from 'src/dtos/CarDTO';
import getPlataformDate from '@utils/getPlataformDate';
import RoutesNavigationProps from 'src/@types/routes';
import SelectedDatesProps from 'src/@types/selectedDates';
import RentalPeriodType from 'src/@types/rentalPeriod';
import Calendar from '@components/Calendar';
import generateInterval from '@components/Calendar/generateInterval';
import ArrowIcon from '@assets/arrow.svg';
import Highlight from '@components/Highlight';
import StatusBar from '@components/StatusBar';
import Button from '@components/Button';

type RouteParams = {
    car: CarDTOType;
}

const PickDate: React.FC = () => {
    const [lastSelectedDate, setLastSelectedDate] = useState<DateData>({} as DateData);
    const [SelectedDate, setSelectedDate] = useState<SelectedDatesProps>({} as SelectedDatesProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodType>({} as RentalPeriodType);

    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();
    const { params } = useRoute();
    const { car } = params as RouteParams;

    const handleChangeDate: (date: DateData) => void = (date) => {
        let start: DateData = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end: DateData = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        transformDates(start, end);
    }

    const transformDates: (startData: DateData, endData: DateData) => void = (startData, endData) => {
        const interval: SelectedDatesProps = generateInterval(startData, endData);
        setSelectedDate(interval);
        
        // getting the first and last property of interval object;
        const firstDate: string = Object.keys(interval)[0];
        const lastDate: string = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            start: startData.timestamp / 86400000, // milliseconds in a day;
            end: endData.timestamp / 86400000,
            startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlataformDate(new Date(lastDate)), 'dd/MM/yyyy')
        })
    }

    const isEndDaySelected: boolean = rentalPeriod.start < rentalPeriod.end;
    const handleGoBack: () => void = () => goBack();

    const handleConfirmRent: () => void = () => {
        if (!rentalPeriod.start)
            return Alert.alert('Escolher período', 'selecione o período inicial do aluguel');
        if (!isEndDaySelected)
            return Alert.alert('Escolher período', 'selecione o período final do aluguel');

        const dates: string[] = Object.keys(SelectedDate);

        navigate('rent_car_details', {
            car: car,
            dates: dates,
            rentalPeriod: rentalPeriod
        });
    }

    return (
        <VStack flex={1}>
            <StatusBar variant='light' />
            <Highlight
                title={'Escolha uma \ndata de início e \nfim do aluguel'}
                backIconFunction={handleGoBack}
                h={80}
                subTitle={
                    <HStack alignItems='center'>
                        <VStack h={7} justifyContent='space-between'>
                            <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.600' textTransform='uppercase'>
                                de
                            </Text>
                            {rentalPeriod.startFormatted ?
                                <Text fontFamily='body' fontWeight='medium' fontSize='md' color='white'>
                                    {rentalPeriod.startFormatted}
                                </Text>
                                :
                                <Box w={24} h='1px' bgColor='gray.600' />
                            }
                        </VStack>
                        <ArrowIcon style={{ marginHorizontal: 35 }} />
                        <VStack h={7} justifyContent='space-between'>
                            <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.600' textTransform='uppercase'>
                                até
                            </Text>
                            {rentalPeriod.end > rentalPeriod.start ?
                                <Text fontFamily='body' fontWeight='medium' fontSize='md' color='white'>
                                    {rentalPeriod.endFormatted}
                                </Text>
                                :
                                <Box w={24} h='1px' bgColor='gray.600' />
                            }
                        </VStack>
                    </HStack>
                }
            />
            <VStack flex={1} pt={4} pb={8} bgColor='white' justifyContent='space-between'>
                <Calendar
                    markedDates={SelectedDate}
                    onDayPress={handleChangeDate}
                />
                <Button
                    title='Confimar'
                    color={isEndDaySelected ? 'red.500' : 'pink.300'}
                    pressColor={isEndDaySelected ? 'red.700' : 'pink.500'}
                    mx={6}
                    onPress={handleConfirmRent}
                />
            </VStack>
        </VStack>
    );
}

export default PickDate;