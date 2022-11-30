import { IStackProps, Text, VStack } from "native-base";

type Props = IStackProps & {
    title: string;
}

const ListEmpty: React.FC<Props> = ({ title, ...rest }) => {
    return (
        <VStack alignItems='center' justifyContent='center' {...rest}>
            <Text fontFamily='body' fontWeight='medium' fontSize='md' color='gray.700'>
                {title}
            </Text>
        </VStack>
    );
}

export default ListEmpty;