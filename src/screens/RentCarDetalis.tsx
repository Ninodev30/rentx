import { useState } from 'react';
import { Alert } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { HStack, Text, VStack, Icon, Box } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../services/api';
import RentalPeriodType from 'src/@types/rentalPeriod';
import RoutesNavigationProps from 'src/@types/routes';
import CarDetailsComponent from '@components/CarDetailsComponent';
import Button from '@components/Button';
import CarDTOType from 'src/dtos/CarDTO';
import registerCarInScheduleList from '../functions/registerCarInScheduleList';
import registerCarInScheduleListByUser from '../functions/registerCarInScheduleListByUser';

type RouteParams = {
    car: CarDTOType;
    dates: string[];
    rentalPeriod: RentalPeriodType;
}

const RentCarDetails: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { navigate } = useNavigation<RoutesNavigationProps>();

    const { params } = useRoute();
    const { car, dates, rentalPeriod } = params as RouteParams;

    const period: number = rentalPeriod.end - rentalPeriod.start;
    const rentValue: string = `${car.rent.price} x ${period} diárias`;
    const rentTotalValue: string = `R$ ${(car.rent.price * period).toLocaleString('pt-BR')}`;

    const handleConcludedSchedule: () => Promise<void> = async () => {
        setIsLoading(true);

        await api
            .get(`/schedules_bycars/${car.id}`)
            .then(async (response) => {
                const unavailable_dates: string[] = [
                    ...response.data.unavailable_dates,
                    ...dates
                ];

                await registerCarInScheduleList(unavailable_dates, car.id);
                await registerCarInScheduleListByUser(car, 1);
                navigate('concluded_schedule');
            })
            .catch((error) => {
                Alert.alert('Confirmar aluguel', 'não foi possível confirmar o aluguel');

                if (error.request)
                    return console.log(error.request);
                if (error.response)
                    return console.log(error.response);

                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <CarDetailsComponent
            car={car}
            buttonComponent={
                <Button
                    title='Alugar agora'
                    color='green.500'
                    pressColor='green.700'
                    onPress={handleConcludedSchedule}
                    disabled={isLoading}
                />
            }
            additionalInfo={
                <VStack p={4}>
                    <HStack pb={4} mb={4} borderBottomWidth='1' borderBottomColor='gray.300' justifyContent='space-between'>
                        <HStack alignItems='center'>
                            <Box w={12} h={12} mr={6} bgColor='red.500' justifyContent='center' alignItems='center' rounded='sm'>
                                <Icon
                                    as={Feather}
                                    name='calendar'
                                    size={5}
                                    color='white'
                                />
                            </Box>
                            <VStack>
                                <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                                    de
                                </Text>
                                <Text fontFamily='body' fontWeight='medium' fontSize='md' color='gray.700'>
                                    {rentalPeriod.startFormatted}
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack alignItems='center'>
                            <Icon
                                as={Ionicons}
                                name='chevron-forward'
                                size={4}
                                color='gray.500' mr={5}
                            />
                            <VStack>
                                <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                                    de
                                </Text>
                                <Text fontFamily='body' fontWeight='medium' fontSize='md' color='gray.700'>
                                    {rentalPeriod.endFormatted}
                                </Text>
                            </VStack>
                        </HStack>
                    </HStack>
                    <HStack justifyContent='space-between'>
                        <VStack justifyContent='space-around'>
                            <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                                total
                            </Text>
                            <Text fontFamily='body' fontWeight='medium' fontSize='md' color='gray.700'>
                                {rentValue}
                            </Text>
                        </VStack>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xl' color='green.500'>
                            {rentTotalValue}
                        </Text>
                    </HStack>
                </VStack>
            }
        />
    );
};

export default RentCarDetails;