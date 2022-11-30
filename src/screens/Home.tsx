import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button, FlatList, HStack, Icon, Text, VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import CarDTOType from 'src/dtos/CarDTO';
import RoutesNavigationProps from 'src/@types/routes';
import api from '../services/api';
import Logo from '@assets/logo.svg';
import Car from '@components/Car';
import StatusBar from '@components/StatusBar';
import Loading from '@components/Loading';
import ListEmpty from '@components/ListEmpty';

const Home: React.FC = () => {
    const [carList, setCarList] = useState<CarDTOType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { navigate } = useNavigation<RoutesNavigationProps>();
    const handleOpenSchedules: () => void = () => navigate('schedules');

    const fetchCars: () => Promise<void> = async () => {
        await api
            .get('/cars')
            .then((response) => {
                setCarList(response.data);
            })
            .catch((error) => {
                Alert.alert('Home', 'não foi possível exibir os carros');

                if (error.request)
                    return console.log(error.request);
                if (error.response)
                    return console.log(error.response);

                console.log(JSON.stringify(error));
            })
            .finally(() => {
                setIsLoading(false);
            })
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
                    Total de {carList.length} carros
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
                            footer={false}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    p={4}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                    ListEmptyComponent={<ListEmpty h='lg' title='Lista de carros indisponível' />}
                />
            }
            <Button
                w={12} h={12} rounded='full' position='absolute' justifyContent='center' alignItems='center' right={4} bottom={4}
                bgColor='red.500' _pressed={{ backgroundColor: 'red.700' }}
                onPress={handleOpenSchedules}
            >
                <Icon
                    as={Ionicons}
                    name='car-sport'
                    color='white'
                    size={6}
                />
            </Button>
        </VStack>
    );
}

export default Home;