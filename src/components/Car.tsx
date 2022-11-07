import { HStack, Text, VStack, Icon } from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons';

type Props = {
    car?: string;
    nameOfCar: string;
    brand: string;
    price: number;
    motor: 'eletric' | 'combustion';
}

const Car: React.FC<Props> = ({ car, nameOfCar, brand, price, motor }) => {
    return (
        <HStack w='full' h={32} p={6} m={4} bgColor='white'>
            <VStack justifyContent='space-between'>
                <VStack>
                    <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500'>
                        {brand}
                    </Text>
                    <Text fontFamily='mono' fontWeight='medium' fontSize='md' color='gray.700'>
                        {nameOfCar}
                    </Text>
                </VStack>
                <HStack w={24} justifyContent='space-between' alignItems='center'>
                    <VStack>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500'>
                            ao dia
                        </Text>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='md' color='red.500'>
                            {`R$ ${price}`}
                        </Text>
                    </VStack>
                    <Icon
                        as={SimpleLineIcons}
                        name={motor === 'eletric' ? 'energy' : 'drop'}
                        color='gray.500'
                        size={5}
                    />
                </HStack>
            </VStack>
        </HStack>
    );
}

export default Car;