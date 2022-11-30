import { TouchableOpacity } from 'react-native';
import { HStack, Text, VStack, Image, Heading, IStackProps, Icon } from 'native-base';
import { SvgProps } from 'react-native-svg';
import ElectricIcon from '@assets/energy.svg';
import GasolineIcon from '@assets/gasoline.svg';
import HybridIcon from '@assets/hybrid.svg';
import Arrow from '@assets/arrow.svg';
import CarDTOType from 'src/dtos/CarDTO';

type Props = IStackProps & {
    data: CarDTOType;
    onPress: () => void;
    footer: boolean;
}

const Car: React.FC<Props> = ({ onPress, footer, data, ...rest }) => {
    let fuelTypeIcon: React.FC<SvgProps> = GasolineIcon;
    if (data.fuel_type.includes('electric'))
        fuelTypeIcon = ElectricIcon;
    if (data.fuel_type.includes('hybrid'))
        fuelTypeIcon = HybridIcon;

    return (
        <TouchableOpacity onPress={onPress}>
            <VStack {...rest} >
                <HStack h={32} p={6} justifyContent='space-between' rounded='sm' bgColor='white'>
                    <VStack justifyContent='space-between'>
                        <VStack>
                            <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500'>
                                {data.brand}
                            </Text>
                            <Heading fontFamily='mono' fontWeight='medium' fontSize='md' color='gray.700'>
                                {data.name}
                            </Heading>
                        </VStack>
                        <HStack w={24} justifyContent='space-between' alignItems='center'>
                            <VStack>
                                <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500'>
                                    {data.rent.period}
                                </Text>
                                <Text fontFamily='mono' fontWeight='medium' fontSize='md' color='red.500'>
                                    {`R$ ${data.rent.price}`}
                                </Text>
                            </VStack>
                            <Icon
                                as={fuelTypeIcon}
                                width={18} height={18}
                            />
                        </HStack>
                    </VStack>
                    <Image
                        source={{ uri: data.thumbnail }}
                        resizeMode='contain'
                        alt='Car photo'
                        width={40}
                        height={24}
                    />
                </HStack>
                {footer &&
                    <HStack h={10} px={3} mt={1} justifyContent='space-between' alignItems='center' rounded='sm' bgColor='white'>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                            período
                        </Text>
                        <HStack alignItems='center'>
                            <Text>
                                18/06/2022
                            </Text>
                            <Arrow style={{ marginHorizontal: 10 }} />
                            <Text>
                                20/06/2022
                            </Text>
                        </HStack>
                    </HStack>
                }
            </VStack>
        </TouchableOpacity>
    );
}

export default Car;