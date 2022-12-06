import { Box } from 'native-base';
import LottieView from 'lottie-react-native';
import loadingCar from '../assets/loading_car.json';

const LoadAnimation: React.FC = () => {
    return (
        <Box flex={1} alignItems='center' justifyContent='center'>
            <LottieView
                source={loadingCar}
                style={{ height: 200 }}
                resizeMode='contain'
                autoPlay
                loop
            />
        </Box>
    )
}

export default LoadAnimation;