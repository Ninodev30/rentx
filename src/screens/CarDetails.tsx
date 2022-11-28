import { Text } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import CarDTOType from 'src/dtos/CarDTO';
import RoutesNavigationProps from 'src/@types/routes';
import CarDetailsComponent from '@components/CarDetailsComponent';
import Button from '@components/Button';

type RouteParams = {
    car: CarDTOType;
}

const CarDetails: React.FC = () => {
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();
    const { params } = useRoute();
    const { car } = params as RouteParams;

    const handlePickDate: () => void = () => navigate('pick_date', { car });
    const handleGoBack: () => void = () => goBack();

    return (
        <CarDetailsComponent
            car={car}
            backIconFunction={handleGoBack}
            buttonComponent={
                <Button
                    title='Escolher período do aluguel'
                    color='red.500'
                    pressColor='red.700'
                    onPress={handlePickDate}
                />
            }
            additionalInfo={
                <Text fontFamily='body' fontWeight='normal' fontSize='md' textAlign='justify' lineHeight={24} color='gray.600' mt={4} mb={16} px={2}>
                    {car.about}
                </Text>
            }
        />
    );
}

export default CarDetails;