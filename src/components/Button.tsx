import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

const Button: React.FC<Props> = ({ title, ...rest }) => {
    return (
        <ButtonNativeBase {...rest}>
            <Text>
                {title}
            </Text>
        </ButtonNativeBase>
    );
}

export default Button;