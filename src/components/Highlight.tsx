import { Box, IBoxProps } from 'native-base';
import BackIcon from './BackIcon';

type Props = IBoxProps & {
    backIconFunction: () => void;
    title: string;
    subTitle: JSX.Element;
}

const Highlight: React.FC<Props> = ({ backIconFunction, title, subTitle, ...rest }) => {
    return (
        <Box {...rest}>
            <BackIcon variant='light' onPress={backIconFunction} />
        </Box>
    );
}

export default Highlight;