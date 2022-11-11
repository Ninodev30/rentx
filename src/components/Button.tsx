import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';

type Props = IButtonProps & {
    title: string;
    color: ColorType;
    pressColor: ColorType;
}

const Button: React.FC<Props> = ({ title, color, pressColor, ...rest }) => {
    return (
        <ButtonNativeBase
            h={14}
            bgColor={color}
            _pressed={{ bgColor: pressColor }}
            {...rest}
        >
            <Text fontFamily='body' fontWeight='medium' fontSize='md' color='white'>
                {title}
            </Text>
        </ButtonNativeBase>
    );
}

export default Button;