import { HStack, Text, VStack } from 'native-base';

type Props = {
    car?: string;
    nameOfCar: string;
    brand: string;
    price: number;
}

const Car: React.FC<Props> = ({ car, nameOfCar, brand, price }) => {
    return (
        <HStack
            w='full'
            h={32}
            p={6}
            m={4}
            bgColor='white'
        >
            <VStack justifyContent='space-between'>
                <VStack>
{/*                     <S.Details>
                        {brand}
                    </S.Details>
                    <S.NameOfCar>
                        {nameOfCar}
                    </S.NameOfCar> */}
                </VStack>
                <HStack justifyContent='space-between'>
                    <VStack>
                        <Text
                            fontFamily='mono'
                            fontWeight='medium'
                            fontSize='md'
                        >
                            ao dia
                        </Text>
                        <Text
                            fontFamily='body'
                            fontWeight='medium'
                            fontSize='md'
                        >
                            {`R$ ${price}`}
                        </Text>
{/*                         <S.Details>
                            ao dia
                        </S.Details>
                        <S.Price>
                        </S.Price> */}
                    </VStack>
{/*                     <S.Icon
                        name='energy'
                    /> */}
                </HStack>
            </VStack>
        </HStack>
    );
}

export default Car;