import { useNavigation } from '@react-navigation/native';
import { HStack, ScrollView, Text, VStack } from 'native-base';
import RoutesNavigationProps from 'src/@types/routes';
import BackIcon from '@components/BackIcon';
import StatusBar from '@components/StatusBar';
import Details from '@components/Details';

import SpeedIcon from '@assets/speed.svg';
import AccelerationIcon from '@assets/acceleration.svg';
import ForceIcon from '@assets/force.svg';
import GasolineIcon from '@assets/gasoline.svg';
import ExchangeIcon from '@assets/exchange.svg';
import PeopleIcon from '@assets/people.svg';
import Button from '@components/Button';

const CarDetails: React.FC = () => {
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();

    return (
        <ScrollView flex={1} bgColor='white'>
            <StatusBar variant='dark' />
            <VStack px={4} pt={16} pb={8}>
                <BackIcon
                    variant='dark'
                    ml={4}
                    onPress={() => goBack()}
                />
                <HStack w='full' h={10} my={4} justifyContent='space-between' alignItems='center'>
                    <VStack justifyContent='space-between'>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                            Lamborghini
                        </Text>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xl' color='gray.700' textTransform='capitalize'>
                            Huracan
                        </Text>
                    </VStack>
                    <VStack justifyContent='space-between'>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                            ao dia
                        </Text>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xl' color='red.500' textTransform='capitalize'>
                            R$580
                        </Text>
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
                <Text fontFamily='body' fontWeight='Regular' fontSize='md' color='gray.600' mt={6} mb='70px'>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </Text>
                <Button
                    title='Escolher período do aluguel'
                    color='red.500'
                    pressColor='red.700'
                />
            </VStack>
        </ScrollView>
    );
}

export default CarDetails;