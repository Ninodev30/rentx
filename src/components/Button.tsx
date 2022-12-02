import { Button as ButtonNativeBase, IButtonProps, Text, Spinner } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';

type Props = IButtonProps & {
    title: string;
    color: ColorType;
    pressColor: ColorType;
    isLoading?: boolean;
}

const Button: React.FC<Props> = ({ title, color, pressColor, isLoading, ...rest }) => {
    return (
        <ButtonNativeBase
            h={14}
            bgColor={color}
            _pressed={{ bgColor: pressColor }}
            style={{ opacity: isLoading ? .5 : 1 }}
            {...rest}
        >
            {isLoading ?
                <Spinner color='gray.700' accessibilityLabel='Loading' />
                :
                <Text fontFamily='body' fontWeight='medium' fontSize='md' color='white'>
                    {title}
                </Text>
            }
        </ButtonNativeBase>
    );
}

export default Button;