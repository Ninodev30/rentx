import { Box, Heading, IBoxProps } from 'native-base';
import BackIcon from './BackIcon';

type Props = IBoxProps & {
    title: string;
    subTitle: JSX.Element;
}

const Highlight: React.FC<Props> = ({ title, subTitle, ...rest }) => {
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
            />
            <Heading fontFamily='mono' fontWeight='semibold' fontSize='2xl' color='white' my={7}>
                {title}
            </Heading>
            {subTitle}
        </Box>
    );
}

export default Highlight;