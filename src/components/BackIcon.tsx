import { Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type Props = {
    variant: 'light' | 'dark';
    onPress: () => void;
}

const BackIcon: React.FC<Props> = ({ variant, onPress }) => {
    return (
        <TouchableOpacity>
            <Icon
                as={Ionicons}
                name='chevron-back'
                onPress={onPress}
                size={6}
                color={variant === 'light' ? 'white' : 'gray.600'}
            />
        </TouchableOpacity>
    );
}

export default BackIcon;