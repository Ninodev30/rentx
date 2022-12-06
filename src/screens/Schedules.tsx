import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, HStack, Text, VStack } from "native-base";
import api from '../services/api';
import CarDTOType from 'src/dtos/CarDTO';
import Highlight from "@components/Highlight";
import StatusBar from "@components/StatusBar";
import Car from '@components/Car';
import ListEmpty from '@components/ListEmpty';
import LoadAnimation from '@components/LoadAnimation';

type SchedulesTypeProps = {
    user_id: number;
    car: CarDTOType;
}

const Schedules: React.FC = () => {
    const [schedules, setSchedules] = useState<SchedulesTypeProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchCars: () => Promise<void> = async () => {
        await api
            .get('/schedules_byuser?user_id=1')
            .then((response) => {
                setSchedules(response.data);
            })
            .catch((error) => {
                Alert.alert('Agendamentos', 'não foi possível carregar seus agendamentos');

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
    )

    return (
        <VStack flex={1}>
            <StatusBar variant='light' />
            <Highlight
                title='Seus agendamentos, estão aqui.'
                subTitle={
                    <Text fontFamily='mono' fontWeight='normal' fontSize='md' color='white'>
                        Conforto, segurança e praticidade
                    </Text>
                }
            />
            <VStack flex={1} p={4} bgColor='gray.200'>
                <HStack pb={7} px={2} justifyContent='space-between'>
                    <Text fontFamily='body' fontWeight='normal' fontSize='md' color='gray.600'>
                        Agendamentos feitos
                    </Text>
                    <Text fontFamily='mono' fontWeight='medium' fontSize='md' color='gray.700'>
                        {schedules.length > 10 ? schedules.length : `0${schedules.length}`}
                    </Text>
                </HStack>
                {isLoading ?
                    <LoadAnimation />
                    :
                    <FlatList
                        data={schedules}
                        flex={1}
                        keyExtractor={(item, index) => index + String(item)}
                        renderItem={({ item }) => (
                            <Car
                                data={item.car}
                                mb={4}
                                onPress={() => {/* navigate('car_details') */ }}
                                footer
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        _contentContainerStyle={{ paddingBottom: 20 }}
                        ListEmptyComponent={<ListEmpty h='xs' title='Vocẽ ainda não alugou nenhum carro' />}
                    />
                }
            </VStack>
        </VStack>
    )
}

export default Schedules;