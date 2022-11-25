import { Center, Icon, Text } from 'native-base';
import { SvgProps } from 'react-native-svg';

type Props = {
    data: string;
    icon: React.FC<SvgProps>;
}

const Details: React.FC<Props> = ({ icon, data }) => {
    return (
        <Center w={27} h={23} bgColor='gray.200' rounded='sm'>
            <Icon as={icon} />
            <Text fontFamily='body' fontWeight='medium' fontSize='sm' color='gray.600' mt={2}>
                {data}
            </Text>
        </Center>
    );
}

export default Details;