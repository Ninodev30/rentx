import { TouchableOpacity } from 'react-native';
import { Icon, IIconProps } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

type Props = IIconProps & {
    variant: 'light' | 'dark';
}

const BackIcon: React.FC<Props> = ({ variant, onPress, ...rest }) => {
    return (
        <TouchableOpacity>
            <Icon
                as={Ionicons}
                name='chevron-back'
                onPress={onPress}
                size={6}
                color={variant === 'light' ? 'white' : 'gray.600'}
                {...rest}
            />
        </TouchableOpacity>
    );
}

export default BackIcon;