import { TouchableOpacity } from 'react-native';
import { HStack, Text, VStack, Image, Heading, Stack, IStackProps } from 'native-base';
import CarTypeProps from 'src/@types/car';
import Energy from '@assets/energy.svg';
import Gasoline from '@assets/gasoline.svg';

type Props = IStackProps & {
    data: CarTypeProps;
    onPress: () => void;
}

const Car: React.FC<Props> = ({ onPress, data: { name, brand, photo, combustible, rent }, ...rest }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Stack
                h={32} p={6}
                flexDirection='row' justifyContent='space-between' rounded='sm' bgColor='white'
                {...rest}
            >
                <VStack justifyContent='space-between'>
                    <VStack>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500'>
                            {brand}
                        </Text>
                        <Heading fontFamily='mono' fontWeight='medium' fontSize='md' color='gray.700'>
                            {name}
                        </Heading>
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
                        {combustible === 'energy' ? <Energy width={18} height={18} /> : <Gasoline width={18} height={18} />}
                    </HStack>
                </VStack>
                <Image
                    source={{ uri: photo }}
                    resizeMode='contain'
                    alt='Car photo'
                    width={40}
                    height={24}
                />
            </Stack>
        </TouchableOpacity>
    );
}

export default Car;