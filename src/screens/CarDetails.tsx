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
                <Text fontFamily='body' fontWeight='Regular' fontSize='md' color='gray.600' mt={3}>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </Text>
            </VStack>
        </ScrollView>
    );
}

export default CarDetails;