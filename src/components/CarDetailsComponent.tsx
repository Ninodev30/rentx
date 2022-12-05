import { useState, useRef } from 'react';
import { Dimensions, ViewToken } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Heading, VStack, HStack, Text, Box, FlatList } from 'native-base';
import Animated, { useSharedValue, SharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
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

type Props = {
    car: CarDTOType;
    buttonComponent: JSX.Element;
    additionalInfo: JSX.Element;
}

type ChangeImageProps = {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

type UseRefProps = (info: ChangeImageProps) => void;

type AnimatedStylesTypeProps = {
    header: {
        height: number;
    };
    sliderCar: {
        opacity: number;
    };
}

const CarDetailsComponent: React.FC<Props> = ({ car, buttonComponent, additionalInfo }) => {
    const [photoSelected, setPhotoSelected] = useState<number>(0);
    const { name, brand, rent, photos, accessories, fuel_type } = car as CarDTOType;

    const scrollY: SharedValue<number> = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
        console.log(event.contentOffset.y);
    });

    const AnimatedStyles: AnimatedStylesTypeProps = {
        header: useAnimatedStyle(() => {
            return {
                height: interpolate(
                    scrollY.value,
                    [0, 200],
                    [200, 70],
                    Extrapolate.CLAMP
                )
            }
        }),
        sliderCar: useAnimatedStyle(() => {
            return {
                opacity: interpolate(
                    scrollY.value,
                    [0, 150],
                    [1, 0],
                    Extrapolate.CLAMP
                )
            }
        })
    }

    let fuelTypeIcon: React.FC<SvgProps> = GasolineIcon;
    if (fuel_type.includes('electric'))
        fuelTypeIcon = ElectricIcon;
    if (fuel_type.includes('hybrid'))
        fuelTypeIcon = HybridIcon;

    const indexChanged: React.MutableRefObject<UseRefProps> = useRef<UseRefProps>((info) => {
        const index: number = info.viewableItems[0].index!
        setPhotoSelected(index);
    });

    const renderMiniBoxes: () => JSX.Element[] = () => (
        photos.map((_, index: number) => (
            <Box
                key={index}
                w='1.5' h='1.5' m={1} borderRadius='full'
                bgColor={index === photoSelected ? 'gray.700' : 'gray.400'}
            />
        ))
    )

    return (
        <VStack flex={1} px={4} pt={16} pb={8} bgColor='white' justifyContent='space-between'>
            <StatusBar variant='dark' />
            <Animated.View style={AnimatedStyles.header}>
                <HStack w='full' justifyContent='space-between' alignItems='center'>
                    <BackIcon
                        variant='dark'
                        ml={4}
                    />
                    <HStack>
                        {renderMiniBoxes()}
                    </HStack>
                </HStack>
                <FlatList
                    data={photos}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Box
                            h={32} my={8} alignItems='center' justifyContent='center'
                            style={{ width: Dimensions.get('window').width }}
                        >
                            <Animated.Image
                                source={{ uri: item }}
                                resizeMode='contain'
                                style={[AnimatedStyles.sliderCar, { width: 288, height: 132 }]}
                            />
                        </Box>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={indexChanged.current}
                />
            </Animated.View>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16} // how many frames render for second
            >
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
            </Animated.ScrollView>
            {buttonComponent}
        </VStack>
    );
}

export default CarDetailsComponent;