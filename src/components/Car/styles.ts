/* import styled, { css } from 'styled-components/native';
import { SimpleLineIcons } from '@expo/vector-icons';

const S = {
    SubContent: styled.View`

    `,

    NameOfCar: styled.Text`
        ${({ theme: { colors, fonts } }) => css`
            font-family: ${fonts.family.secondary_500};
            font-size: ${fonts.size.md};
            color: ${colors.title};
        `};
    `,

    Details: styled.Text`
        text-transform: uppercase;
        ${({ theme: { colors, fonts } }) => css`
            font-family: ${fonts.family.secondary_500};
            font-size: ${fonts.size.xs};
            color: ${colors.text_details};
        `};
    `,

    Price: styled.Text`
        ${({ theme: { colors, fonts } }) => css`
            font-family: ${fonts.family.secondary_500};
            font-size: ${fonts.size.md};
            color: ${colors.main};
        `};
    `,

    Icon: styled(SimpleLineIcons).attrs(({ theme: { colors } }) => ({
        size: 24,
        color: colors.text_details
    }))``
};

export default S; */