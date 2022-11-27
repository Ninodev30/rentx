import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { FlatList, HStack, Text, VStack } from 'native-base';
import { AxiosResponse } from 'axios';
import CarDTOType from 'src/dtos/CarDTO';
import RoutesNavigationProps from 'src/@types/routes';
import api from '../services/api';
import Logo from '@assets/logo.svg';
import Car from '@components/Car';
import StatusBar from '@components/StatusBar';
import Loading from '@components/Loading';

const Home: React.FC = () => {
    const [carList, setCarList] = useState<CarDTOType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { navigate } = useNavigation<RoutesNavigationProps>();

    const fetchCars: () => Promise<void> = async () => {
        try {
            const response: AxiosResponse = await api.get('/cars');
            setCarList(response.data);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchCars();
        }, [])
    );

    return (
        <VStack flex={1} bgColor='gray.200'>
            <StatusBar variant='light' />
            <HStack h={32} pb={8} px={6} bgColor='gray.900' justifyContent='space-between' alignItems='flex-end'>
                <Logo width={108} height={12} />
                <Text fontFamily='body' fontWeight='normal' fontSize='md' color='gray.600' mb={-1}>
                    Total de 12 carros
                </Text>
            </HStack>
            {isLoading ? 
            <Loading /> :
                <FlatList
                    data={carList}
                    keyExtractor={(item, index) => index + item.id}
                    renderItem={({ item }) => (
                        <Car
                            data={item}
                            mb={4}
                            onPress={() => navigate('car_details', { car: item })}
                            showRentInfo={false}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    p={4}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            }
        </VStack>
    );
}

export default Home;