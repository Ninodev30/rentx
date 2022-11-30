import { TouchableOpacity } from 'react-native';
import { Icon, IIconProps } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = IIconProps & {
    variant: 'light' | 'dark';
}

const BackIcon: React.FC<Props> = ({ variant, ...rest }) => {
    const { goBack } = useNavigation();

    return (
        <TouchableOpacity onPress={goBack}>
            <Icon
                as={Ionicons}
                name='chevron-back'
                size={6}
                color={variant === 'light' ? 'white' : 'gray.600'}
                {...rest}
            />
        </TouchableOpacity>
    );
}

export default BackIcon;