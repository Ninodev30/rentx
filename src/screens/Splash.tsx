import { useEffect } from "react";
import { VStack } from "native-base";
import Animated, { SharedValue, useAnimatedStyle, useSharedValue, interpolate, withTiming, Extrapolate, runOnJS } from "react-native-reanimated";
import StatusBar from "@components/StatusBar";
import BrandSvg from '@assets/brand.svg';
import LogoSvg from '@assets/logo.svg';
import { useNavigation } from "@react-navigation/native";
import RoutesNavigationProps from "src/@types/routes";

type AnimatedStylesTypeProps = {
    logo: {
        opacity: number;
        transform: {
            translateX: number;
        }[];
    };
    brand: {
        opacity: number;
        transform: {
            translateX: number;
        }[];
    };
}

const Splash: React.FC = () => {
    const { navigate } = useNavigation<RoutesNavigationProps>();
    const splashAnimation: SharedValue<number> = useSharedValue(0);

    const startApp: () => void = () => navigate('home');

    const AnimatedStyles: AnimatedStylesTypeProps = {
        logo: useAnimatedStyle(() => {
            return {
                opacity: interpolate(
                    splashAnimation.value,
                    [0, 25, 50],
                    [0, .5, 1],
                ),
                transform: [
                    {
                        translateX: interpolate(
                            splashAnimation.value,
                            [0, 50],
                            [-50, 0],
                            Extrapolate.CLAMP
                        )
                    }
                ]
            }
        }),
        brand: useAnimatedStyle(() => {
            return {
                opacity: interpolate(
                    splashAnimation.value,
                    [0, 25, 50],
                    [1, .5, 0]
                ),
                transform: [
                    {
                        translateX: interpolate(
                            splashAnimation.value,
                            [0, 50],
                            [0, -50],
                            Extrapolate.CLAMP
                        )
                    }
                ]
            }
        })
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50, {
            duration: 2000
        },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        )
    }, []);

    return (
        <VStack flex={1} bgColor='gray.900' justifyContent='center' alignItems='center'>
            <StatusBar variant="light" />
            <Animated.View style={AnimatedStyles.brand}>
                <BrandSvg width={80} height={50} />
            </Animated.View>
            <Animated.View style={AnimatedStyles.logo}>
                <LogoSvg width={100} height={20} />
            </Animated.View>
        </VStack>
    );
}

export default Splash;