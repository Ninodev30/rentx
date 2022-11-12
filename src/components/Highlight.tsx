import { Box, Heading, IBoxProps } from 'native-base';
import BackIcon from './BackIcon';

type Props = IBoxProps & {
    backIconFunction: () => void;
    title: string;
    subTitle: JSX.Element;
}

const Highlight: React.FC<Props> = ({ backIconFunction, title, subTitle, ...rest }) => {
    return (
        <Box
            w='full' h={72}
            px={6} pt={16} pb={8}
            bgColor='gray.900'
            {...rest}
        >
            <BackIcon
                variant='light'
                mb={2} ml={2}
                onPress={backIconFunction}
            />
            <Heading fontFamily='mono' fontWeight='semibold' fontSize='2xl' color='white' my={7}>
                {title}
            </Heading>
            {subTitle}
        </Box>
    );
}

export default Highlight;