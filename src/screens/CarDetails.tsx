import { Text } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTOType } from 'src/dtos/CarDTO';
import RoutesNavigationProps from 'src/@types/routes';
import CarDetailsComponent from '@components/CarDetailsComponent';
import Button from '@components/Button';

const CarDetails: React.FC = () => {
    const { navigate, goBack } = useNavigation<RoutesNavigationProps>();
    const { params } = useRoute();
    const { about } = params as CarDTOType;
 
    return (
        <CarDetailsComponent
            backIconFunction={() => goBack()}
            buttonComponent={
                <Button
                    title='Escolher período do aluguel'
                    color='red.500'
                    pressColor='red.700'
                    onPress={() => navigate('pick_date')}
                />
            }
            additionalInfo={
                <Text fontFamily='body' fontWeight='normal' fontSize='md' textAlign='justify' lineHeight={24} color='gray.600' mt={4} mb={16} px={2}>
                    {about}
                </Text>
            }
        />
    );
}

export default CarDetails;