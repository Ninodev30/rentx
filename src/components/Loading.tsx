import { ITheme, Spinner, useTheme } from 'native-base';

const Loading: React.FC = () => {
    const { colors }: ITheme = useTheme();

    return (
        <Spinner
            color={colors.gray[700]}
            style={{ flex: 1 }}
            size='lg'
        />
    )
}

export default Loading;