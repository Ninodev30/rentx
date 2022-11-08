import { VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import RoutesNavigationProps from 'src/@types/routes';
import BackIcon from '@components/BackIcon';

const CarDetails: React.FC = () => {
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();

    return (
        <VStack flex={1} bgColor='gray.200' alignItems='center' justifyContent='center'>
            <BackIcon
                variant='dark'
                onPress={() => goBack()}
            />
        </VStack>
    );
}

export default CarDetails;