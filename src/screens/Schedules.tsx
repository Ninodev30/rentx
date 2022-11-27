import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, HStack, Text, VStack } from "native-base";
import CarDTOType from 'src/dtos/CarDTO';
import RoutesNavigationProps from 'src/@types/routes';
import Highlight from "@components/Highlight";
import StatusBar from "@components/StatusBar";
import Car from '@components/Car';

const Schedules: React.FC = () => {
    const [schedules, setSchedules] = useState<CarDTOType[]>([])

    const { navigate } = useNavigation<RoutesNavigationProps>();
    const handleGoBack: () => void = () => navigate("home");

    return (
        <VStack flex={1}>
            <StatusBar variant='light' />
            <Highlight
                title='Seus agendamentos, estão aqui.'
                backIconFunction={handleGoBack}
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
                <FlatList
                    data={schedules}
                    keyExtractor={(item, index) => index + item.id}
                    renderItem={({ item }) => (
                        <Car
                            data={item}
                            mb={4}
                            onPress={() => {/* navigate('car_details') */ }}
                            showRentInfo
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    )
}

export default Schedules;