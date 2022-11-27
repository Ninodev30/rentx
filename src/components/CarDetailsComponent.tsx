import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Heading, VStack, HStack, Image, ScrollView, Text, Box } from 'native-base';
import CarDTOType from 'src/dtos/CarDTO';
import BackIcon from '@components/BackIcon';
import StatusBar from '@components/StatusBar';
import Details from '@components/Details';

import SpeedIcon from '@assets/speed.svg';
import AccelerationIcon from '@assets/acceleration.svg';
import ForceIcon from '@assets/force.svg';
import GasolineIcon from '@assets/gasoline.svg';
import ElectricIcon from '@assets/energy.svg';
import HybridIcon from '@assets/hybrid.svg';
import ExchangeIcon from '@assets/exchange.svg';
import PeopleIcon from '@assets/people.svg';
import { SvgProps } from 'react-native-svg';

type RouteParams = {
    car: CarDTOType
}

type Props = {
    backIconFunction: () => void;
    buttonComponent: JSX.Element;
    additionalInfo: JSX.Element;
}

const CarDetailsComponent: React.FC<Props> = ({ backIconFunction, buttonComponent, additionalInfo }) => {
    const [photoSelected, setPhotoSelected] = useState<number>(0);
    const { params } = useRoute();
    const { car: { name, brand, rent, photos, accessories, fuel_type } } = params as RouteParams;

    let fuelTypeIcon: React.FC<SvgProps> = GasolineIcon;
    if (fuel_type.includes('electric'))
        fuelTypeIcon = ElectricIcon;
    if (fuel_type.includes('hybrid'))
        fuelTypeIcon = HybridIcon;

    const renderMiniBoxes: () => JSX.Element[] = () => (
        photos.map((value: string, index: number) => (
            <Box
                key={value}
                w='1.5' h='1.5' m={1} borderRadius='full'
                bgColor={index === photoSelected ? 'gray.700' : 'gray.400'}
            />
        ))
    )

    return (
        <VStack flex={1} px={4} pt={16} pb={8} bgColor='white' justifyContent='space-between'>
            <StatusBar variant='dark' />
            <VStack>
                <HStack w='full' justifyContent='space-between' alignItems='center'>
                    <BackIcon
                        variant='dark'
                        ml={4}
                        onPress={backIconFunction}
                    />
                    <HStack>
                        {renderMiniBoxes()}
                    </HStack>
                </HStack>
                <Image
                    source={{ uri: photos[0] }}
                    resizeMode='contain'
                    alt='Car photo'
                    width={72}
                    height={32}
                    my={8}
                    alignSelf='center'
                />
            </VStack>
            <ScrollView>
                <HStack w='full' h={10} px={2} justifyContent='space-between' alignItems='center'>
                    <VStack justifyContent='space-between'>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                            {brand}
                        </Text>
                        <Heading fontFamily='mono' fontWeight='medium' fontSize='xl' color='gray.700' textTransform='capitalize'>
                            {name}
                        </Heading>
                    </VStack>
                    <VStack justifyContent='space-between'>
                        <Text fontFamily='mono' fontWeight='medium' fontSize='xs' color='gray.500' textTransform='uppercase'>
                            {rent.period}
                        </Text>
                        <Heading fontFamily='mono' fontWeight='medium' fontSize='xl' color='red.500' textTransform='capitalize'>
                            R$ {rent.price}
                        </Heading>
                    </VStack>
                </HStack>
                <VStack h={48} my={4} justifyContent='space-between'>
                    <HStack w='full' justifyContent='space-between'>
                        <Details icon={SpeedIcon} data={accessories[0].name} />
                        <Details icon={ForceIcon} data={accessories[1].name} />
                        <Details icon={AccelerationIcon} data={accessories[2].name} />
                    </HStack>
                    <HStack w='full' justifyContent='space-between'>
                        <Details icon={fuelTypeIcon} data={accessories[3].name} />
                        <Details icon={ExchangeIcon} data={accessories[4].name} />
                        <Details icon={PeopleIcon} data={accessories[5].name} />
                    </HStack>
                </VStack>
                {additionalInfo}
            </ScrollView>
            {buttonComponent}
        </VStack>
    );
}

export default CarDetailsComponent;