import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, Image, ScrollView, Text, useTheme, VStack } from 'native-base';
import RoutesNavigationProps from 'src/@types/routes';
import BackIcon from '@components/BackIcon';
import StatusBar from '@components/StatusBar';
import Details from '@components/Details';
import PeopleIcon from '@assets/people.svg';
import Button from '@components/Button';

import SpeedIcon from '@assets/speed.svg';
import AccelerationIcon from '@assets/acceleration.svg';
import ForceIcon from '@assets/force.svg';
import GasolineIcon from '@assets/gasoline.svg';
import ExchangeIcon from '@assets/exchange.svg';

const CarDetails: React.FC = () => {
    const [photoSelected, setPhotoSelected] = useState<number>(1);
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();
    const { colors: { gray } } = useTheme();

    return (
        <ScrollView flex={1} bgColor='white'>
            <StatusBar variant='dark' />
            <VStack px={4} pt={16} pb={8}>
                <HStack w='full' justifyContent='space-between' alignItems='center'>
                    <BackIcon
                        variant='dark'
                        ml={4}
                        onPress={() => goBack()}
                    />
                    <HStack w={14} justifyContent='space-evenly'>
                        <TouchableOpacity
                            style={{
                                width: 8, height: 8, borderRadius: 5,
                                backgroundColor: photoSelected === 1 ? gray[700] : gray[400]
                            }}
                            onPress={() => setPhotoSelected(1)}
                        />
                        <TouchableOpacity
                            style={{
                                width: 8, height: 8, borderRadius: 5,
                                backgroundColor: photoSelected === 2 ? gray[700] : gray[400]
                            }}
                            onPress={() => setPhotoSelected(2)}
                        />
                        <TouchableOpacity
                            style={{
                                width: 8, height: 8, borderRadius: 5,
                                backgroundColor: photoSelected === 3 ? gray[700] : gray[400]
                            }}
                            onPress={() => setPhotoSelected(3)}
                        />
                        <TouchableOpacity
                            style={{
                                width: 8, height: 8, borderRadius: 5,
                                backgroundColor: photoSelected === 4 ? gray[700] : gray[400]
                            }}
                            onPress={() => setPhotoSelected(4)}
                        />
                    </HStack>
                </HStack>
                <Image
                    source={{ uri: 'data:image/jpeg;base64,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' }}
                    resizeMode='contain'
                    alt='Car photo'
                    width={72}
                    height={32}
                    my={8}
                    alignSelf='center'
                />
                <HStack w='full' h={10} px={2} justifyContent='space-between' alignItems='center'>
                    <VStack justifyContent='space-between'>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                            Lamborghini
                        </Text>
                        <Heading fontFamily='mono' fontWeight='medium' fontSize='xl' color='gray.700' textTransform='capitalize'>
                            Huracan
                        </Heading>
                    </VStack>
                    <VStack justifyContent='space-between'>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                            ao dia
                        </Text>
                        <Heading fontFamily='mono' fontWeight='medium' fontSize='xl' color='red.500' textTransform='capitalize'>
                            R$ 580
                        </Heading>
                    </VStack>
                </HStack>
                <VStack h={48} my={4} justifyContent='space-between'>
                    <HStack w='full' justifyContent='space-between'>
                        <Details
                            icon={<SpeedIcon width={28} height={28} />}
                            data='380km/h'
                        />
                        <Details
                            icon={<ForceIcon width={28} height={28} />}
                            data='3.2s'
                        />
                        <Details
                            icon={<AccelerationIcon width={28} height={28} />}
                            data='800 HP'
                        />
                    </HStack>
                    <HStack w='full' justifyContent='space-between'>
                        <Details
                            icon={<GasolineIcon width={28} height={24} />}
                            data='Gasolina'
                        />
                        <Details
                            icon={<ExchangeIcon width={28} height={28} />}
                            data='Auto'
                        />
                        <Details
                            icon={<PeopleIcon width={28} height={28} />}
                            data='2 Pessoas'
                        />
                    </HStack>
                </VStack>
                <Text fontFamily='body' fontWeight='normal' fontSize='md' color='gray.600' mt={6} mb={16} px={2}>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </Text>
                <Button
                    title='Escolher período do aluguel'
                    color='red.500'
                    pressColor='red.700'
                    mx={2}
                    onPress={() => navigate('pick_date')}
                />
            </VStack>
        </ScrollView>
    );
}

export default CarDetails;