import { HStack, Text, VStack, Icon, Image } from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons';
import CarTypeProps from 'src/@types/car';
import { TouchableOpacity } from 'react-native';

type Props = {
    data: CarTypeProps;
    onPress: () => void;
}

const Car: React.FC<Props> = ({ onPress, data: { name, brand, photo, motor, rent } }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <HStack h={32} p={6} mt={4} mx={4} rounded='sm' justifyContent='space-between' bgColor='white'>
                <VStack justifyContent='space-between'>
                    <VStack>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500'>
                            {brand}
                        </Text>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='md' color='gray.700'>
                            {name}
                        </Text>
                    </VStack>
                    <HStack w={24} justifyContent='space-between' alignItems='center'>
                        <VStack>
                            <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500'>
                                {rent.period}
                            </Text>
                            <Text fontFamily='mono' fontWeight='medium' fontSize='md' color='red.500'>
                                {`R$ ${rent.price}`}
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
                <Image
                    source={{ uri: photo }}
                    resizeMode='contain'
                    alt='Car photo'
                    width={40}
                    height={24}
                />
            </HStack>
        </TouchableOpacity>
    );
}

export default Car;