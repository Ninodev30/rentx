import { Ionicons } from '@expo/vector-icons';
import { HStack, Text, VStack, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import RoutesNavigationProps from 'src/@types/routes';
import CarDetailsComponent from '@components/CarDetailsComponent';

const RentCarDetails: React.FC = () => {
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();

    return (
        <CarDetailsComponent
            backIconFunction={() => goBack()}
            mainButtonFunction={() => navigate('concluded_schedule')}
            additionalInfo={
                <VStack>
                    <HStack justifyContent='space-between'>
                        <VStack>
                            <Text textTransform='uppercase'>
                                de
                            </Text>
                            <Text>
                                18/06/2022
                            </Text>
                        </VStack>
                        <Icon
                            as={Ionicons}
                            name='chevron-forward'
                            size={4}
                            color='gray.500'
                        />
                        <VStack>
                            <Text textTransform='uppercase'>
                                de
                            </Text>
                            <Text>
                                20/06/2022
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack justifyContent='space-between'>
                        <VStack justifyContent='space-around'>
                            <Text textTransform='uppercase'>
                                total
                            </Text>
                            <Text>
                                580 x  3 diárias
                            </Text>
                        </VStack>
                        <Text>
                            R$ 2.900
                        </Text>
                    </HStack>
                </VStack>
            }
        />
    );
}

export default RentCarDetails;