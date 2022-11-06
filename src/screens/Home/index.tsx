import { StatusBar } from 'react-native';
import S from './styles';

const Home: React.FC = () => {
    return (
        <S.Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <S.Header>
                <S.LogoIcon />
                <S.HeaderText>
                    Total de 12 carros
                </S.HeaderText>
            </S.Header>
        </S.Container>
    );
}

export default Home;