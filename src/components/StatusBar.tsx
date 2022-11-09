import { StatusBar as StatusBarReactNative } from "react-native";

type Props = {
    variant: 'light' | 'dark';
}

const StatusBar: React.FC<Props> = ({ variant }) => {
    return (
        <StatusBarReactNative
            barStyle={`${variant}-content`}
            backgroundColor='transparent'
            translucent
        />
    )
}

export default StatusBar;