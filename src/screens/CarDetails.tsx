import { useNavigation } from '@react-navigation/native';
import { HStack, ScrollView, Text, VStack } from 'native-base';
import RoutesNavigationProps from 'src/@types/routes';
import BackIcon from '@components/BackIcon';
import StatusBar from '@components/StatusBar';
import Details from '@components/Details';

const CarDetails: React.FC = () => {
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();

    return (
        <ScrollView>
            <StatusBar variant='dark' />
            <VStack flex={1} p={8} pt={16} bgColor='white'>
                <BackIcon
                    variant='dark'
                    onPress={() => goBack()}
                />
                <VStack my={4} justifyContent='space-between' alignItems='center'>
                    <HStack justifyContent='space-between'>
                        <Details
                            icon='speed'
                            data='380km/h'
                        />
                        <Details
                            icon='acceleration'
                            data='3.2s'
                        />
                        <Details
                            icon='force'
                            data='800 HP'
                        />
                    </HStack>
                    <HStack justifyContent='space-between'>
                        <Details
                            icon='gasoline'
                            data='Gasolina'
                        />
                        <Details
                            icon='exchange'
                            data='Auto'
                        />
                        <Details
                            icon='people'
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