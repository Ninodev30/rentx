import { Feather, Ionicons } from '@expo/vector-icons';
import { HStack, Text, VStack, Icon, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import RoutesNavigationProps from 'src/@types/routes';
import CarDetailsComponent from '@components/CarDetailsComponent';
import Button from '@components/Button';

const RentCarDetails: React.FC = () => {
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();

    return (
        <CarDetailsComponent
            backIconFunction={() => goBack()}
            buttonComponent={
                <Button
                    title='Alugar agora'
                    color='green.500'
                    pressColor='green.700'
                    onPress={() => navigate('concluded_schedule')}
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
                                    18/06/2022
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
                                    20/06/2022
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
                                580 x  3 diárias
                            </Text>
                        </VStack>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xl' color='green.500'>
                            R$ 2.900
                        </Text>
                    </HStack>
                </VStack>
            }
        />
    );
}

export default RentCarDetails;