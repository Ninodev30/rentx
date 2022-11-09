import { Center, Text } from 'native-base';
import SpeedIcon from '@assets/speed.svg';
import AccelerationIcon from '@assets/acceleration.svg';
import ForceIcon from '@assets/force.svg';
import GasolineIcon from '@assets/gasoline.svg';
import ExchangeIcon from '@assets/exchange.svg';
import PeopleIcon from '@assets/people.svg';

type Props = {
    icon: 'speed' | 'acceleration' | 'force' | 'gasoline' | 'exchange' | 'people';
    data: string;
}

const Details: React.FC<Props> = ({ icon, data }) => {
    const renderIcon: () => JSX.Element | undefined = () => {
        if(icon === 'speed') return <SpeedIcon width={28} height={28} />
        if(icon === 'acceleration') return <AccelerationIcon width={28} height={28} />
        if(icon === 'force') return <ForceIcon width={28} height={28} />
        if(icon === 'gasoline') return <GasolineIcon width={28} height={28} />
        if(icon === 'exchange') return <ExchangeIcon width={28} height={28} />
        if(icon === 'people') return <PeopleIcon width={28} height={28} />
    }

    return (
        <Center w={23} h={27} bgColor='gray.200' rounded='sm'>
            {renderIcon()}
            <Text fontFamily='body' fontWeight='medium' fontSize='sm' color='gray.600' mt={3}>
                {data}
            </Text>
        </Center>
    );
}

export default Details;