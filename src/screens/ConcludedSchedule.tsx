import { Button, Center, Heading, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import RoutesNavigationProps from 'src/@types/routes';
import StatusBar from '@components/StatusBar';
import LogoBackground from '@assets/logo_background_gray.svg';
import DoneIcon from '@assets/done.svg';

const ConcludedSchedule: React.FC = () => {
    const { navigate } = useNavigation<RoutesNavigationProps>();

    return (
        <VStack flex={1} py={16} alignItems='center' bgColor='gray.900'>
            <StatusBar variant='light' />
            <LogoBackground style={{}} />
            <VStack w={56} h={64} alignItems='center'>
                <DoneIcon />
                <Heading fontFamily='mono' fontWeight='semibold' fontSize='2xl' color='white' mt={10} mb={4}>
                    Carro alugado!
                </Heading>
                <Text fontFamily='body' fontWeight='normal' fontSize='md' color='gray.500' textAlign='center'>
                    Agora você só precisa ir até a concessionária da RENTX pegar o seu automóvel
                </Text>
            </VStack>
            <Button
                w={20} h={14} mt={16} bgColor='gray.800'
                _pressed={{ backgroundColor: 'gray.600' }}
                onPress={() => navigate('schedules')}
            >
                Ok
            </Button>
        </VStack>
    );
}

export default ConcludedSchedule;