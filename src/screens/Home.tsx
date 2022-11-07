import { StatusBar } from 'react-native';
import { HStack, VStack } from 'native-base';
import Car from '@components/Car';

const Home: React.FC = () => {
    return (
        /*         <S.Container>
        <S.Header>
        <S.LogoIcon />
                        <S.HeaderText>
                        Total de 12 carros
                        </S.HeaderText>
                    </S.Header>
                    <Car
                    />
                    </S.Container> */
        <VStack flex={1} bgColor='gray.200'>
            <HStack

                h={32}
                bgColor='gray.900'
            >

            </HStack>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Car
                nameOfCar='panamera'
                brand='porsche'
                price={340}
                motor='eletric'
            />
        </VStack>
    );
}

export default Home;