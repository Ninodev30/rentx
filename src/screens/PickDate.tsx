import { useState } from 'react';
import { Box, HStack, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import RoutesNavigationProps from 'src/@types/routes';
import ArrowIcon from '@assets/arrow.svg';
import Highlight from '@components/Highlight';
import StatusBar from '@components/StatusBar';
import Button from '@components/Button';

const PickDate: React.FC = () => {
    const [initialDateSelected, setInitialDateSelected] = useState<string>('18/06/2022');
    const [finalDateSelected, setFinalDateSelected] = useState<string>('18/06/2022');
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();

    return (
        <VStack flex={1}>
            <StatusBar variant='light' />
            <Highlight
                title={'Escolha uma \ndata de início e \nfim do aluguel'}
                backIconFunction={() => goBack()}
                subTitle={
                    <HStack alignItems='center'>
                        <VStack h={7} justifyContent='space-between'>
                            <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.600' textTransform='uppercase'>
                                de
                            </Text>
                            {initialDateSelected ?
                                <Text fontFamily='body' fontWeight='medium' fontSize='md' color='white'>
                                    {initialDateSelected}
                                </Text>
                                :
                                <Box w={24} h='1px' bgColor='gray.600' />
                            }
                        </VStack>
                        <ArrowIcon style={{ marginHorizontal: 35 }} />
                        <VStack h={7} justifyContent='space-between'>
                            <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.600' textTransform='uppercase'>
                                até
                            </Text>
                            {finalDateSelected ?
                                <Text fontFamily='body' fontWeight='medium' fontSize='md' color='white'>
                                    {finalDateSelected}
                                </Text>
                                :
                                <Box w={24} h='1px' bgColor='gray.600' />
                            }
                        </VStack>
                    </HStack>
                }
                h={80}
            />
            <VStack flex={1} px={6}>
                <Button
                    title='Confimar'
                    color='pink.300'
                    pressColor='pink.500'
                    onPress={() => navigate('concluded_schedule')}
                />
            </VStack>
        </VStack>
    );
}

export default PickDate;